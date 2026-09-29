import { CxpIcon } from '@/components/cxp-icon';
import type { Stat } from '@/data/mock-data';

const toneStyles = {
  indigo: { icon: 'bg-[#efedff] text-[#675bd5]', line: 'bg-[#6d62d9]' },
  mint: { icon: 'bg-[#e3f5ef] text-[#3d9e82]', line: 'bg-[#66c5aa]' },
  peach: { icon: 'bg-[#fcece4] text-[#dc7f5f]', line: 'bg-[#e29a7c]' },
  gold: { icon: 'bg-[#fbf1d7] text-[#b48b2d]', line: 'bg-[#d9b45d]' },
};

export function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const tone = toneStyles[stat.tone];
  return (
    <article className={`card-lift fade-up fade-up-delay-${index + 1} relative overflow-hidden rounded-[14px] border border-[#ebe8f1] bg-white p-5 shadow-[0_4px_15px_-13px_rgba(47,40,84,.25)]`} data-testid={`card-stat-${stat.label.toLowerCase().replaceAll(' ', '-')}`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${tone.icon}`}><CxpIcon name={stat.icon} size={18} /></div>
      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <div className="text-[11px] font-semibold text-[#8d889e]">{stat.label}</div>
          <div className="mt-1 text-[25px] font-extrabold tracking-[-.06em] text-[#302b49]">{stat.value}</div>
        </div>
        <span className={`mb-1 rounded-md px-1.5 py-1 font-mono text-[10px] font-medium ${stat.delta.startsWith('-') ? 'bg-[#fdf0ec] text-[#d58065]' : 'bg-[#e8f6f0] text-[#3d9e82]'}`}>{stat.delta}</span>
      </div>
      <div className="mt-3 text-[10px] text-[#aaa5b4]">{stat.context}</div>
      <div className={`absolute bottom-0 left-0 h-[3px] w-1/3 rounded-r-full ${tone.line}`} />
    </article>
  );
}