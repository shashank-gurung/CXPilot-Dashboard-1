import { useState, type ReactNode } from 'react';
import { Sidebar } from '@/components/sidebar';
import { TopHeader } from '@/components/top-header';

export function AppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [analyzeOpen, setAnalyzeOpen] = useState(false);

  return (
    <div className="app-shell flex min-h-[100dvh] w-full text-[#29253f]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopHeader onMenuOpen={() => setSidebarOpen(true)} onAnalyze={() => setAnalyzeOpen(true)} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      {analyzeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#211d39]/25 p-5 backdrop-blur-[3px]" onClick={() => setAnalyzeOpen(false)}>
          <div role="dialog" aria-modal="true" aria-labelledby="analyze-title" className="w-full max-w-md rounded-2xl border border-[#e9e6f2] bg-white p-6 shadow-[0_24px_60px_-24px_rgba(47,40,84,.35)]" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div><div className="mono-label text-[9px] font-medium text-[#766dd1]">AI workspace</div><h2 id="analyze-title" className="mt-2 text-[20px] font-extrabold tracking-[-.04em] text-[#332e50]">Analyze a conversation</h2></div>
              <button type="button" onClick={() => setAnalyzeOpen(false)} aria-label="Close analyze dialog" data-testid="button-close-analyze" className="text-[22px] leading-none text-[#aaa5b6] hover:text-[#5d53c9]">×</button>
            </div>
            <p className="mt-3 text-[12px] leading-5 text-[#858096]">Paste a customer message and CXPilot will surface sentiment, intent, urgency, and a suggested reply.</p>
            <textarea placeholder="Paste a conversation message here..." data-testid="textarea-analyze-conversation" className="mt-5 h-28 w-full resize-none rounded-xl border border-[#e8e5ef] bg-[#faf9fd] p-3 text-[12px] text-[#3d3857] outline-none placeholder:text-[#aca7b8] focus:border-[#b9b1eb] focus:ring-4 focus:ring-[#6c60dc]/10" />
            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setAnalyzeOpen(false)} data-testid="button-cancel-analyze" className="rounded-lg px-3 py-2 text-[11px] font-bold text-[#77718b] hover:bg-[#f5f3fa]">Cancel</button>
              <button type="button" onClick={() => setAnalyzeOpen(false)} data-testid="button-run-analysis" className="rounded-lg bg-[#675bd5] px-3.5 py-2 text-[11px] font-bold text-white hover:bg-[#594dc7]">Run analysis</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}