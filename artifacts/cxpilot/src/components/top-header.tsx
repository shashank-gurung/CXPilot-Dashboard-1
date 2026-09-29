import { useState } from 'react';
import { CxpIcon } from '@/components/cxp-icon';

export function TopHeader({
  onMenuOpen,
  onAnalyze,
}: {
  onMenuOpen: () => void;
  onAnalyze: () => void;
}) {
  const [noticeOpen, setNoticeOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <header className="relative flex flex-wrap items-center gap-3 border-b border-[#ebe9f1] bg-white/80 px-5 py-4 backdrop-blur-xl sm:px-7 lg:flex-nowrap lg:px-10" data-testid="top-header">
      <button type="button" onClick={onMenuOpen} aria-label="Open navigation" data-testid="button-open-navigation" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#68637f] hover:bg-[#f3f1fb] lg:hidden">
        <CxpIcon name="menu" size={20} />
      </button>
      <div className="order-3 flex h-10 w-full items-center rounded-[10px] border border-[#ebe9f1] bg-[#faf9fd] px-3 text-[#a09caf] transition-colors focus-within:border-[#bdb6ed] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#6c60dc]/10 sm:order-none sm:max-w-[330px]" data-testid="search-command">
        <CxpIcon name="search" size={17} className="shrink-0 text-[#9691aa]" />
        <input type="search" placeholder="Search or type command..." aria-label="Search or type command" data-testid="input-command-search" className="w-full bg-transparent px-2 text-[12px] text-[#38334f] outline-none placeholder:text-[#a09caf]" />
        <kbd className="hidden rounded-md border border-[#e6e3ee] bg-white px-1.5 py-0.5 font-mono text-[9px] text-[#aaa5b7] sm:inline">⌘ K</kbd>
      </div>
      <div className="ml-auto flex items-center gap-1.5">
        <div className="relative">
          <button type="button" onClick={() => setNoticeOpen((value) => !value)} aria-label="View notifications" data-testid="button-notifications" className={`relative flex h-9 w-9 items-center justify-center rounded-[9px] transition-colors ${noticeOpen ? 'bg-[#f0effe] text-[#6258cc]' : 'text-[#858097] hover:bg-[#f6f4fb] hover:text-[#6258cc]'}`}>
            <CxpIcon name="bell" size={17} />
            <span className="absolute right-[8px] top-[7px] h-1.5 w-1.5 rounded-full border border-white bg-[#ed9270]" />
          </button>
          {noticeOpen && <div className="absolute right-0 top-11 z-20 w-64 rounded-xl border border-[#ebe9f1] bg-white p-4 shadow-[0_16px_35px_-18px_rgba(47,40,84,.28)]"><div className="text-[12px] font-bold text-[#3f3a58]">One pattern needs your eye</div><p className="mt-1 text-[11px] leading-5 text-[#8b879b]">Delivery delays are trending in negative conversations.</p></div>}
        </div>
        <div className="relative">
          <button type="button" onClick={() => setHelpOpen((value) => !value)} aria-label="Open help" data-testid="button-help" className={`flex h-9 w-9 items-center justify-center rounded-[9px] transition-colors ${helpOpen ? 'bg-[#f0effe] text-[#6258cc]' : 'text-[#858097] hover:bg-[#f6f4fb] hover:text-[#6258cc]'}`}>
            <CxpIcon name="help" size={17} />
          </button>
          {helpOpen && <div className="absolute right-0 top-11 z-20 w-52 rounded-xl border border-[#ebe9f1] bg-white p-4 shadow-[0_16px_35px_-18px_rgba(47,40,84,.28)]"><div className="text-[12px] font-bold text-[#3f3a58]">Need a hand?</div><p className="mt-1 text-[11px] leading-5 text-[#8b879b]">Browse the CXPilot guide or ask your workspace admin.</p></div>}
        </div>
        <div className="mx-2 hidden h-6 w-px bg-[#eeeaf3] sm:block" />
        <button type="button" data-testid="button-date-range" className="hidden items-center gap-2 rounded-[9px] border border-[#e9e6f0] bg-white px-3 py-2 text-[11px] font-semibold text-[#68637f] transition-colors hover:border-[#c9c3ee] hover:text-[#5d53c9] sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6c60dc]" /> Last 30 Days <span className="text-[10px] text-[#aaa5b5]">⌄</span>
        </button>
        <button type="button" onClick={onAnalyze} data-testid="button-analyze-conversation" className="flex items-center gap-1.5 rounded-[9px] bg-[#675bd5] px-3 py-2.5 text-[11px] font-bold text-white shadow-[0_8px_16px_-9px_rgba(103,91,213,.9)] transition-all hover:-translate-y-0.5 hover:bg-[#594dc7] focus:outline-none focus:ring-4 focus:ring-[#675bd5]/20">
          <span className="text-[15px] leading-none">+</span><span className="hidden sm:inline">Analyze Conversation</span><span className="sm:hidden">Analyze</span>
        </button>
      </div>
    </header>
  );
}