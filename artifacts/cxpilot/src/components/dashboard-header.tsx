export function DashboardHeader() {
  return (
    <section className="fade-up flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <div className="mono-label text-[10px] font-medium text-[#8c87a4]">Monday, June 24, 2024</div>
        <h1 className="mt-2 text-[28px] font-extrabold tracking-[-.055em] text-[#2e2947] sm:text-[32px]">Good morning, Alex</h1>
        <p className="mt-2 text-[13px] text-[#89849b]">Here's what's happening with your customer experience today.</p>
      </div>
      <div className="flex items-center gap-2 rounded-[10px] border border-[#ebe8f1] bg-white px-3 py-2 text-[11px] text-[#7d7892] shadow-[0_4px_14px_-12px_rgba(47,40,84,.25)]">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#e9e7fc] text-[10px] text-[#6258cc]">⌁</span>
        <span><strong className="font-bold text-[#524c6c]">Live workspace</strong> · synced 2 min ago</span>
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#61c4a4]" />
      </div>
    </section>
  );
}