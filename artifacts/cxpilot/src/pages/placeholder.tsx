import { AppLayout } from '@/components/app-layout';
import { CxpIcon } from '@/components/cxp-icon';

export default function PlaceholderPage({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <AppLayout>
      <div className="mx-auto flex min-h-[calc(100dvh-74px)] w-full max-w-[1100px] items-center justify-center px-5 py-10 sm:px-8">
        <section className="w-full max-w-lg rounded-2xl border border-[#e9e6f1] bg-white p-8 text-center shadow-[0_14px_35px_-26px_rgba(47,40,84,.3)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f0effe] text-[#665bd5]"><CxpIcon name={icon} size={22} /></div>
          <div className="mono-label mt-6 text-[9px] font-medium text-[#918ba8]">CXPilot workspace</div>
          <h1 className="mt-2 text-[25px] font-extrabold tracking-[-.05em] text-[#332e50]">{title}</h1>
          <p className="mx-auto mt-3 max-w-sm text-[12px] leading-5 text-[#908b9f]">{description}</p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold text-[#827c96]"><span className="h-1.5 w-1.5 rounded-full bg-[#6dc5a8]" /> This view is ready for your workspace data</div>
        </section>
      </div>
    </AppLayout>
  );
}