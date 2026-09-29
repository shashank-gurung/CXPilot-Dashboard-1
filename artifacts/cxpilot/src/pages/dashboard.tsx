import { AppLayout } from '@/components/app-layout';
import { AIInsightCard } from '@/components/ai-insight-card';
import { DashboardHeader } from '@/components/dashboard-header';
import { RecentConversations } from '@/components/recent-conversations';
import { SentimentCard } from '@/components/sentiment-card';
import { StatCard } from '@/components/stat-card';
import { stats } from '@/data/mock-data';

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-10">
        <DashboardHeader />
        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace summary">
          {stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} />)}
        </section>
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,.85fr)]">
          <SentimentCard />
          <AIInsightCard />
        </section>
        <div className="mt-5">
          <RecentConversations />
        </div>
        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-[#eae7f0] py-5 text-[10px] text-[#aaa5b4] sm:flex-row">
          <span>CXPilot workspace · Built for clearer customer conversations.</span>
          <span className="font-mono">v1.0.0 / local preview</span>
        </footer>
      </div>
    </AppLayout>
  );
}