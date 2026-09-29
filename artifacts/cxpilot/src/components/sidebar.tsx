import { Link, useLocation } from 'wouter';
import { CxpIcon } from '@/components/cxp-icon';
import { navItems, utilityNavItems } from '@/data/navigation';

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [location] = useLocation();

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-[#211d39]/30 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[252px] flex-col border-r border-[#ebe9f1] bg-white px-4 py-5 shadow-[8px_0_30px_-24px_rgba(47,40,84,.3)] transition-transform duration-300 lg:static lg:translate-x-0 lg:shadow-none ${open ? 'translate-x-0' : '-translate-x-full'}`}
        data-testid="sidebar"
      >
        <div className="flex items-center gap-3 px-3">
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[11px] bg-[#6c60dc] shadow-[0_8px_18px_-8px_rgba(108,96,220,.8)]">
            <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-[#9188ed]/70" />
            <span className="absolute -bottom-3 -left-1 h-6 w-6 rounded-full bg-[#5146bc]/80" />
            <span className="relative text-[17px] font-extrabold tracking-[-.08em] text-white">cx</span>
          </div>
          <div className="leading-none">
            <div className="text-[17px] font-extrabold tracking-[-.06em] text-[#27233f]">CXPilot</div>
            <div className="mt-1 text-[9px] font-semibold uppercase tracking-[.18em] text-[#9a96ae]">Customer intelligence</div>
          </div>
        </div>

        <div className="mt-11 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#a29eb4]">Workspace</div>
        <nav className="mt-3 flex flex-1 flex-col gap-1" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = location === item.href || (item.href === '/dashboard' && location === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`}
                className={`group flex items-center gap-3 rounded-[10px] px-3 py-[11px] text-[12px] font-semibold transition-colors ${active ? 'bg-[#f0effe] text-[#5d53c9]' : 'text-[#77738d] hover:bg-[#f8f7fc] hover:text-[#4e4968]'}`}
              >
                <CxpIcon name={item.icon} size={17} strokeWidth={active ? 2.2 : 1.8} className={active ? 'text-[#665bd5]' : 'text-[#9793a8] group-hover:text-[#665bd5]'} />
                <span>{item.label}</span>
                {item.label === 'AI Insights' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#ee9a70]" />}
              </Link>
            );
          })}
          <div className="mt-auto border-t border-[#f0eef4] pt-4">
            {utilityNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
                className={`group flex items-center gap-3 rounded-[10px] px-3 py-[11px] text-[12px] font-semibold transition-colors ${location === item.href ? 'bg-[#f0effe] text-[#5d53c9]' : 'text-[#77738d] hover:bg-[#f8f7fc] hover:text-[#4e4968]'}`}
              >
                <CxpIcon name={item.icon} size={17} className="text-[#9793a8] group-hover:text-[#665bd5]" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-6 rounded-[13px] border border-[#e9e6f4] bg-[#f7f6fd] p-3">
          <div className="flex items-center justify-between">
            <span className="mono-label text-[9px] font-medium text-[#8782a1]">AI coverage</span>
            <span className="text-[11px] font-bold text-[#6258cc]">84.6%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#e5e2f4]">
            <div className="h-full w-[84.6%] rounded-full bg-[#7166da]" />
          </div>
          <div className="mt-2 text-[10px] leading-4 text-[#918ca8]">Conversations handled automatically this month.</div>
        </div>

        <div className="mt-5 flex items-center gap-2.5 border-t border-[#f0eef4] px-2 pt-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e5fc] text-[11px] font-bold text-[#5f55c9]">AM</div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[11px] font-bold text-[#3f3b58]">Alex Morgan</div>
            <div className="truncate text-[10px] text-[#9995a9]">alex@cxpilot.ai</div>
          </div>
          <button type="button" aria-label="Open profile menu" data-testid="button-profile-menu" className="rounded-md px-1 text-[#aaa6b8] hover:text-[#6258cc]">•••</button>
        </div>
      </aside>
    </>
  );
}