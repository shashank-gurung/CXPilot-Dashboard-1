import { integer, pgTable, serial, text, doublePrecision } from "drizzle-orm/pg-core";

export const dashboardStatsTable = pgTable("dashboard_stats", {
  id: serial("id").primaryKey(),
  sortOrder: integer("sort_order").notNull(),
  label: text("label").notNull(),
  value: text("value").notNull(),
  delta: text("delta").notNull(),
  context: text("context").notNull(),
  icon: text("icon").notNull(),
  tone: text("tone").notNull(),
});

export const sentimentPointsTable = pgTable("sentiment_points", {
  id: serial("id").primaryKey(),
  range: text("range").notNull(),
  sortOrder: integer("sort_order").notNull(),
  day: text("day").notNull(),
  positive: doublePrecision("positive").notNull(),
  neutral: doublePrecision("neutral").notNull(),
  negative: doublePrecision("negative").notNull(),
  totalSignals: integer("total_signals").notNull(),
});

export const dashboardInsightsTable = pgTable("dashboard_insights", {
  id: serial("id").primaryKey(),
  eyebrow: text("eyebrow").notNull(),
  title: text("title").notNull(),
  recommendation: text("recommendation").notNull(),
  relatedCount: text("related_count").notNull(),
});

export const dashboardConversationsTable = pgTable("dashboard_conversations", {
  id: text("id").primaryKey(),
  initials: text("initials").notNull(),
  customer: text("customer").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  sentiment: text("sentiment").notNull(),
  priority: text("priority").notNull(),
  time: text("time").notNull(),
  status: text("status").notNull(),
  accent: text("accent").notNull(),
});

export type DashboardStat = typeof dashboardStatsTable.$inferSelect;
export type SentimentPoint = typeof sentimentPointsTable.$inferSelect;
export type DashboardInsight = typeof dashboardInsightsTable.$inferSelect;
export type DashboardConversation = typeof dashboardConversationsTable.$inferSelect;