import { ArrowUpRight, ChevronRight } from 'lucide-react';
import type { DashboardConversation } from '@workspace/api-client-react';

const sentimentStyles = {
  Positive: 'bg-[#e4f5ee] text-[#3b987c]',
  Neutral: 'bg-[#f4f1e4] text-[#a18438]',
  Negative: 'bg-[#fcece7] text-[#cf775d]',
};
const statusStyles = {
  Resolved: 'bg-[#e8f5ee] text-[#4e9a7b]',
  Waiting: 'bg-[#f7f0dc] text-[#a78132]',
  Open: 'bg-[#f1edff] text-[#675bd5]',
};

export function RecentConversations({ conversations }: { conversations: DashboardConversation[] }) {
  return (
    <section className="fade-up fade-up-delay-4 rounded-[14px] border border-[#ebe8f1] bg-white shadow-[0_4px_15px_-13px_rgba(47,40,84,.25)]" data-testid="section-recent-conversations">
      <div className="flex flex-col justify-between gap-3 border-b border-[#f0eef4] px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div><h2 className="text-[14px] font-bold text-[#3d3855]">Recent Conversations</h2><p className="mt-1 text-[11px] text-[#a09bab]">The latest signals from your customer inbox.</p></div>
        <button type="button" data-testid="button-view-all-conversations" className="flex items-center gap-1 self-start text-[11px] font-bold text-[#655bd0] hover:text-[#473db7] sm:self-auto">View all <ArrowUpRight size={14} /></button>
      </div>
      <div className="scrollbar-thin overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead><tr className="border-b border-[#f3f1f6] text-[9px] font-bold uppercase tracking-[.12em] text-[#aaa5b5]"><th className="px-5 py-3 font-bold sm:px-6">Customer</th><th className="px-3 py-3 font-bold">Latest message</th><th className="px-3 py-3 font-bold">Sentiment</th><th className="px-3 py-3 font-bold">Priority</th><th className="px-3 py-3 font-bold">Time</th><th className="px-3 py-3 font-bold">Status</th><th className="w-8 px-3" /></tr></thead>
          <tbody>
            {conversations.map((conversation) => (
              <tr key={conversation.id} className="group border-b border-[#f5f3f7] transition-colors last:border-0 hover:bg-[#fbfaff]" data-testid={`row-conversation-${conversation.id}`}>
                <td className="px-5 py-4 sm:px-6"><div className="flex items-center gap-2.5"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-[#595174]" style={{ backgroundColor: conversation.accent }}>{conversation.initials}</span><div><div className="whitespace-nowrap text-[11px] font-bold text-[#4a4561]">{conversation.customer}</div><div className="mt-0.5 whitespace-nowrap text-[9px] text-[#aaa5b3]">{conversation.email}</div></div></div></td>
                <td className="max-w-[270px] px-3 py-4"><div className="truncate text-[11px] text-[#77728a]">{conversation.message}</div></td>
                <td className="px-3 py-4"><span className={`rounded-md px-2 py-1 text-[9px] font-bold ${sentimentStyles[conversation.sentiment]}`}>{conversation.sentiment}</span></td>
                <td className="px-3 py-4"><span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold ${conversation.priority === 'High' ? 'text-[#d4775e]' : conversation.priority === 'Medium' ? 'text-[#ae8b43]' : 'text-[#8d899c]'}`}><i className={`h-1.5 w-1.5 rounded-full ${conversation.priority === 'High' ? 'bg-[#df8b70]' : conversation.priority === 'Medium' ? 'bg-[#d9b25d]' : 'bg-[#aaa5b3]'}`} />{conversation.priority}</span></td>
                <td className="whitespace-nowrap px-3 py-4 font-mono text-[10px] text-[#aaa5b3]">{conversation.time}</td>
                <td className="px-3 py-4"><span className={`rounded-md px-2 py-1 text-[9px] font-bold ${statusStyles[conversation.status]}`}>{conversation.status}</span></td>
                <td className="px-3 py-4 text-[#c0bccb]"><ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:text-[#675bd5]" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}