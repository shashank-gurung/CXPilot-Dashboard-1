import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CxpIcon } from '@/components/cxp-icon';
import { sentimentData } from '@/data/mock-data';

const ranges = ['7 Days', '30 Days', '90 Days'] as const;

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number }>; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-[#e9e6f0] bg-white px-3 py-2 shadow-[0_10px_22px_-14px_rgba(47,40,84,.3)]">
      <div className="text-[10px] font-bold text-[#4c4767]">{label}</div>
      {payload.map((item) => <div key={item.dataKey} className="mt-1 text-[10px] text-[#88839a]"><span className="mr-1 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.dataKey === 'positive' ? '#6b60d8' : item.dataKey === 'neutral' ? '#6bc4a8' : '#e29b7f' }} />{item.dataKey}: {item.value}%</div>)}
    </div>
  );
}

export function SentimentCard() {
  const [range, setRange] = useState<(typeof ranges)[number]>('30 Days');
  const data = sentimentData[range];
  return (
    <article className="fade-up fade-up-delay-3 min-w-0 rounded-[14px] border border-[#ebe8f1] bg-white p-5 shadow-[0_4px_15px_-13px_rgba(47,40,84,.25)] sm:p-6" data-testid="card-customer-sentiment">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <div className="flex items-center gap-2"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eeecff] text-[#665bd5]"><CxpIcon name="bar-chart" size={15} /></span><h2 className="text-[14px] font-bold text-[#3c3755]">Customer Sentiment</h2></div>
          <p className="mt-2 text-[11px] text-[#9994a8]">How your customers are feeling across all conversations.</p>
        </div>
        <div className="flex self-start rounded-lg bg-[#f7f6fb] p-1" role="tablist" aria-label="Sentiment time range">
          {ranges.map((item) => <button key={item} type="button" onClick={() => setRange(item)} role="tab" aria-selected={range === item} data-testid={`button-sentiment-${item.toLowerCase().replace(' ', '-')}`} className={`rounded-md px-2.5 py-1.5 text-[10px] font-bold transition-colors ${range === item ? 'bg-white text-[#5d53c9] shadow-[0_2px_6px_-4px_rgba(47,40,84,.35)]' : 'text-[#9994a9] hover:text-[#6258cc]'}`}>{item}</button>)}
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_144px]">
        <div className="min-w-0">
          <div className="h-[204px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 8, right: 5, left: -24, bottom: 0 }}>
                <defs><linearGradient id="positiveFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7569db" stopOpacity={0.22} /><stop offset="100%" stopColor="#7569db" stopOpacity={0.01} /></linearGradient></defs>
                <CartesianGrid vertical={false} stroke="#efedf4" strokeDasharray="3 4" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#aaa5b4', fontSize: 10 }} dy={8} />
                <YAxis domain={[0, 80]} axisLine={false} tickLine={false} tick={{ fill: '#aaa5b4', fontSize: 9 }} tickFormatter={(value) => `${value}%`} />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: '#dcd8ed', strokeDasharray: '3 4' }} />
                <Area type="monotone" dataKey="positive" stroke="#7166d8" strokeWidth={2.4} fill="url(#positiveFill)" dot={false} activeDot={{ r: 4, fill: '#7166d8', stroke: '#fff', strokeWidth: 2 }} />
                <Area type="monotone" dataKey="neutral" stroke="#6ec5a9" strokeWidth={1.8} fill="none" dot={false} />
                <Area type="monotone" dataKey="negative" stroke="#e19a7d" strokeWidth={1.8} fill="none" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold text-[#9691a6]">
            <span><i className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#7166d8]" />Positive</span>
            <span><i className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#6ec5a9]" />Neutral</span>
            <span><i className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#e19a7d]" />Negative</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t border-[#f0eef4] pt-4 xl:block xl:border-l xl:border-t-0 xl:pl-5 xl:pt-0">
          <div><div className="text-[10px] text-[#a39eaf]">Positive</div><div className="mt-1 text-[20px] font-extrabold tracking-[-.05em] text-[#6258cc]">65%</div></div>
          <div className="border-l border-[#f0eef4] pl-3 xl:mt-6 xl:border-l-0 xl:border-t xl:pl-0 xl:pt-5"><div className="text-[10px] text-[#a39eaf]">Neutral</div><div className="mt-1 text-[20px] font-extrabold tracking-[-.05em] text-[#48a88b]">22%</div></div>
          <div className="border-l border-[#f0eef4] pl-3 xl:mt-6 xl:border-l-0 xl:border-t xl:pl-0 xl:pt-5"><div className="text-[10px] text-[#a39eaf]">Negative</div><div className="mt-1 text-[20px] font-extrabold tracking-[-.05em] text-[#d98669]">13%</div></div>
          <div className="col-span-3 mt-2 border-t border-[#f0eef4] pt-3 text-[10px] text-[#a39eaf] xl:mt-6">Total signals <strong className="ml-1 font-bold text-[#514b68]">1,248</strong></div>
        </div>
      </div>
    </article>
  );
}