import { Router, type IRouter } from "express";
import { asc, count } from "drizzle-orm";
import { GetDashboardResponse } from "@workspace/api-zod";
import {
  db,
  dashboardConversationsTable,
  dashboardInsightsTable,
  dashboardStatsTable,
  sentimentPointsTable,
} from "@workspace/db";

const router: IRouter = Router();

const statsSeed = [
  { sortOrder: 0, label: "Total Customers", value: "1,248", delta: "+12.4%", context: "vs last month", icon: "users-round", tone: "indigo" },
  { sortOrder: 1, label: "Active Conversations", value: "37", delta: "-8.2%", context: "vs yesterday", icon: "message-circle", tone: "mint" },
  { sortOrder: 2, label: "AI Resolution Rate", value: "84.6%", delta: "+6.8%", context: "Automated handling", icon: "sparkles", tone: "peach" },
  { sortOrder: 3, label: "Customer Satisfaction", value: "92.4%", delta: "+3.2%", context: "CSAT Score", icon: "smile-plus", tone: "gold" },
];

const sentimentSeed = [
  ["7 Days", [
    ["Mon", 62, 24, 14], ["Tue", 64, 21, 15], ["Wed", 61, 25, 14],
    ["Thu", 67, 22, 11], ["Fri", 66, 20, 14], ["Sat", 69, 19, 12], ["Sun", 65, 22, 13],
  ]],
  ["30 Days", [
    ["1", 54, 29, 17], ["5", 58, 25, 17], ["9", 57, 28, 15], ["13", 62, 23, 15],
    ["17", 60, 25, 15], ["21", 66, 21, 13], ["25", 63, 23, 14], ["30", 65, 22, 13],
  ]],
  ["90 Days", [
    ["Jan", 52, 30, 18], ["Feb", 56, 27, 17], ["Mar", 60, 24, 16],
    ["Apr", 65, 22, 13], ["May", 61, 24, 15], ["Jun", 65, 22, 13],
  ]],
] as const;

const conversationSeed = [
  { id: "arjun-singh", initials: "AS", customer: "Arjun Singh", email: "arjun.singh@gmail.com", message: "The package arrived earlier than expected. Thank you!", sentiment: "Positive", priority: "Low", time: "8 min ago", status: "Resolved", accent: "#dce9ff" },
  { id: "priya-mehta", initials: "PM", customer: "Priya Mehta", email: "priya.mehta@outlook.com", message: "Can I change the delivery address for order #4821?", sentiment: "Neutral", priority: "Medium", time: "22 min ago", status: "Waiting", accent: "#f7e3d7" },
  { id: "rahul-sharma", initials: "RS", customer: "Rahul Sharma", email: "rahul.sharma@icloud.com", message: "I have been waiting for an update since last week.", sentiment: "Negative", priority: "High", time: "41 min ago", status: "Open", accent: "#e9dcf9" },
  { id: "ananya-verma", initials: "AV", customer: "Ananya Verma", email: "ananya.verma@gmail.com", message: "The new size guide was really helpful — perfect fit.", sentiment: "Positive", priority: "Low", time: "1 hr ago", status: "Resolved", accent: "#d9eee4" },
  { id: "rohan-kapoor", initials: "RK", customer: "Rohan Kapoor", email: "rohan.kapoor@proton.me", message: "Is there a way to pause my subscription for a month?", sentiment: "Neutral", priority: "Medium", time: "2 hrs ago", status: "Open", accent: "#f3e6ba" },
];

export async function seedDashboard() {
  const [{ count: statCount }] = await db
    .select({ count: count() })
    .from(dashboardStatsTable);

  if (Number(statCount) > 0) return;

  await db.insert(dashboardStatsTable).values(statsSeed);
  await db.insert(sentimentPointsTable).values(
    sentimentSeed.flatMap(([range, points]) =>
      points.map(([day, positive, neutral, negative], sortOrder) => ({
        range,
        sortOrder,
        day,
        positive,
        neutral,
        negative,
        totalSignals: 1248,
      })),
    ),
  );
  await db.insert(dashboardInsightsTable).values({
    eyebrow: "Pattern detected",
    title: "Delivery delays are responsible for 42% of negative customer conversations this week.",
    recommendation: "Consider improving proactive delivery notifications and providing customers with real-time order updates.",
    relatedCount: "86 conversations",
  });
  await db.insert(dashboardConversationsTable).values(conversationSeed);
}

router.get("/dashboard", async (_req, res, next) => {
  try {
    await seedDashboard();

    const [stats, points, [insight], conversations] = await Promise.all([
      db.select().from(dashboardStatsTable).orderBy(asc(dashboardStatsTable.sortOrder)),
      db.select().from(sentimentPointsTable).orderBy(asc(sentimentPointsTable.sortOrder)),
      db.select().from(dashboardInsightsTable).limit(1),
      db.select().from(dashboardConversationsTable),
    ]);

    const series = ["7 Days", "30 Days", "90 Days"].map((range) => {
      const rangePoints = points.filter((point) => point.range === range);
      const lastPoint = rangePoints.at(-1);
      return {
        range,
        points: rangePoints.map(({ day, positive, neutral, negative }) => ({ day, positive, neutral, negative })),
        positive: lastPoint?.positive ?? 0,
        neutral: lastPoint?.neutral ?? 0,
        negative: lastPoint?.negative ?? 0,
        totalSignals: lastPoint?.totalSignals ?? 0,
      };
    });

    const data = GetDashboardResponse.parse({
      stats: stats.map(({ label, value, delta, context, icon, tone }) => ({ label, value, delta, context, icon, tone })),
      sentiment: series,
      insight: {
        eyebrow: insight.eyebrow,
        title: insight.title,
        recommendation: insight.recommendation,
        relatedCount: insight.relatedCount,
      },
      conversations: conversations.map(({ id, initials, customer, email, message, sentiment, priority, time, status, accent }) => ({
        id, initials, customer, email, message, sentiment, priority, time, status, accent,
      })),
    });

    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;