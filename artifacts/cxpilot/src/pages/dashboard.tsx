import { useGetDashboard } from '@workspace/api-client-react';
import { AppLayout } from '@/components/app-layout';
import { AIInsightCard } from '@/components/ai-insight-card';
import { DashboardHeader } from '@/components/dashboard-header';
import { RecentConversations } from '@/components/recent-conversations';
import { SentimentCard } from '@/components/sentiment-card';
import { StatCard } from '@/components/stat-card';

export default function Dashboard() {
  const { data, isLoading, error } = useGetDashboard();

  if (isLoading) {
    return (
      <AppLayout>
        <div className="mx-auto w-full max-w-[1480px] px-5 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-10">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-white/70" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => <div key={index} className="h-44 animate-pulse rounded-[14px] border border-[#ebe8f1] bg-white/70" />)}
          </div>
          <div className="mt-5 h-96 animate-pulse rounded-[14px] border border-[#ebe8f1] bg-white/70" />
        </div>
      </AppLayout>
    );
  }

  if (error || !data) {
    return (
      <AppLayout>
        <div className="mx-auto flex min-h-[70vh] w-full max-w-[680px] flex-col items-center justify-center px-5 text-center">
          <div className="rounded-[14px] border border-[#ead9d4] bg-white p-8 shadow-[0_4px_15px_-13px_rgba(47,40,84,.25)]">
            <h1 className="text-xl font-extrabold tracking-[-.04em] text-[#3d3855]">Dashboard data is unavailable</h1>
            <p className="mt-2 text-sm leading-6 text-[#8f899e]">CXPilot could not load the workspace data from the database. Try refreshing once the API server is available.</p>
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="mx-auto w-full max-w-[1480px] px-5 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-10">
        <DashboardHeader />
        <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Workspace summary">
          {data.stats.map((stat, index) => <StatCard key={stat.label} stat={stat} index={index} />)}
        </section>
        <section className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,.85fr)]">
          <SentimentCard sentiment={data.sentiment} />
          <AIInsightCard insight={data.insight} />
        </section>
        <div className="mt-5">
          <RecentConversations conversations={data.conversations} />
        </div>
        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-[#eae7f0] py-5 text-[10px] text-[#aaa5b4] sm:flex-row">
          <span>CXPilot workspace · Built for clearer customer conversations.</span>
          <span className="font-mono">v1.0.0 / local preview</span>
        </footer>
      </div>
    </AppLayout>
  );
}