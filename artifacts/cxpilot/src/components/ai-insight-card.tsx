import { useState } from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import type { DashboardInsight } from '@workspace/api-client-react';

export function AIInsightCard({ insight }: { insight: DashboardInsight }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="fade-up fade-up-delay-4 relative overflow-hidden rounded-[14px] border border-[#dedaf5] bg-[#f0effc] p-5 shadow-[0_8px_24px_-18px_rgba(103,91,213,.35)] sm:p-6" data-testid="card-ai-insight">
      <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full border-[18px] border-[#dedaf5]/70" />
      <div className="absolute -right-3 -top-5 h-20 w-20 rounded-full border border-[#d8d3f1]" />
      <div className="relative">
        <div className="flex items-center gap-2 text-[#645ad0]"><span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-white/70"><Lightbulb size={16} strokeWidth={2} /></span><span className="mono-label text-[9px] font-bold">{insight.eyebrow}</span></div>
        <h2 className="mt-5 max-w-[360px] text-[18px] font-extrabold leading-[1.35] tracking-[-.045em] text-[#40386d]">{insight.title}</h2>
        <div className={`grid transition-[grid-template-rows] duration-300 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden"><p className="mt-4 max-w-[390px] border-l-2 border-[#b2aae9] pl-3 text-[11px] leading-5 text-[#716b91]"><strong className="font-bold text-[#5b5484]">Recommended action:</strong> {insight.recommendation}</p><p className="mt-3 text-[10px] font-semibold text-[#837da2]">{insight.relatedCount} share this pattern.</p></div>
        </div>
        <button type="button" onClick={() => setExpanded((value) => !value)} data-testid="button-view-insight" className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold text-[#5f55c9] hover:text-[#463cb1] focus:outline-none focus:ring-2 focus:ring-[#665bd5]/30">{expanded ? 'Hide insight' : 'View Insight'} <ArrowRight size={14} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} /></button>
      </div>
    </article>
  );
}