export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: string;
  delta: string;
  context: string;
  icon: string;
  tone: 'indigo' | 'mint' | 'peach' | 'gold';
};

export type Conversation = {
  id: string;
  initials: string;
  customer: string;
  email: string;
  message: string;
  sentiment: 'Positive' | 'Neutral' | 'Negative';
  priority: 'High' | 'Medium' | 'Low';
  time: string;
  status: 'Open' | 'Waiting' | 'Resolved';
  accent: string;
};

export type SentimentPoint = {
  day: string;
  positive: number;
  neutral: number;
  negative: number;
};

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Customers', href: '/customers', icon: 'users' },
  { label: 'Conversations', href: '/conversations', icon: 'messages-square' },
  { label: 'AI Copilot', href: '/ai-copilot', icon: 'sparkles' },
  { label: 'AI Insights', href: '/ai-insights', icon: 'lightbulb' },
  { label: 'Analytics', href: '/analytics', icon: 'chart-no-axes-combined' },
];

export const utilityNavItems: NavItem[] = [
  { label: 'Settings', href: '/settings', icon: 'settings-2' },
];

export const stats: Stat[] = [
  {
    label: 'Total Customers',
    value: '1,248',
    delta: '+12.4%',
    context: 'vs last month',
    icon: 'users-round',
    tone: 'indigo',
  },
  {
    label: 'Active Conversations',
    value: '37',
    delta: '-8.2%',
    context: 'vs yesterday',
    icon: 'message-circle',
    tone: 'mint',
  },
  {
    label: 'AI Resolution Rate',
    value: '84.6%',
    delta: '+6.8%',
    context: 'Automated handling',
    icon: 'sparkles',
    tone: 'peach',
  },
  {
    label: 'Customer Satisfaction',
    value: '92.4%',
    delta: '+3.2%',
    context: 'CSAT Score',
    icon: 'smile-plus',
    tone: 'gold',
  },
];

export const sentimentData: Record<'7 Days' | '30 Days' | '90 Days', SentimentPoint[]> = {
  '7 Days': [
    { day: 'Mon', positive: 62, neutral: 24, negative: 14 },
    { day: 'Tue', positive: 64, neutral: 21, negative: 15 },
    { day: 'Wed', positive: 61, neutral: 25, negative: 14 },
    { day: 'Thu', positive: 67, neutral: 22, negative: 11 },
    { day: 'Fri', positive: 66, neutral: 20, negative: 14 },
    { day: 'Sat', positive: 69, neutral: 19, negative: 12 },
    { day: 'Sun', positive: 65, neutral: 22, negative: 13 },
  ],
  '30 Days': [
    { day: '1', positive: 54, neutral: 29, negative: 17 },
    { day: '5', positive: 58, neutral: 25, negative: 17 },
    { day: '9', positive: 57, neutral: 28, negative: 15 },
    { day: '13', positive: 62, neutral: 23, negative: 15 },
    { day: '17', positive: 60, neutral: 25, negative: 15 },
    { day: '21', positive: 66, neutral: 21, negative: 13 },
    { day: '25', positive: 63, neutral: 23, negative: 14 },
    { day: '30', positive: 65, neutral: 22, negative: 13 },
  ],
  '90 Days': [
    { day: 'Jan', positive: 52, neutral: 30, negative: 18 },
    { day: 'Feb', positive: 56, neutral: 27, negative: 17 },
    { day: 'Mar', positive: 60, neutral: 24, negative: 16 },
    { day: 'Apr', positive: 65, neutral: 22, negative: 13 },
    { day: 'May', positive: 61, neutral: 24, negative: 15 },
    { day: 'Jun', positive: 65, neutral: 22, negative: 13 },
  ],
};

export const conversations: Conversation[] = [
  {
    id: 'arjun-singh',
    initials: 'AS',
    customer: 'Arjun Singh',
    email: 'arjun.singh@gmail.com',
    message: 'The package arrived earlier than expected. Thank you!',
    sentiment: 'Positive',
    priority: 'Low',
    time: '8 min ago',
    status: 'Resolved',
    accent: '#dce9ff',
  },
  {
    id: 'priya-mehta',
    initials: 'PM',
    customer: 'Priya Mehta',
    email: 'priya.mehta@outlook.com',
    message: 'Can I change the delivery address for order #4821?',
    sentiment: 'Neutral',
    priority: 'Medium',
    time: '22 min ago',
    status: 'Waiting',
    accent: '#f7e3d7',
  },
  {
    id: 'rahul-sharma',
    initials: 'RS',
    customer: 'Rahul Sharma',
    email: 'rahul.sharma@icloud.com',
    message: 'I have been waiting for an update since last week.',
    sentiment: 'Negative',
    priority: 'High',
    time: '41 min ago',
    status: 'Open',
    accent: '#e9dcf9',
  },
  {
    id: 'ananya-verma',
    initials: 'AV',
    customer: 'Ananya Verma',
    email: 'ananya.verma@gmail.com',
    message: 'The new size guide was really helpful — perfect fit.',
    sentiment: 'Positive',
    priority: 'Low',
    time: '1 hr ago',
    status: 'Resolved',
    accent: '#d9eee4',
  },
  {
    id: 'rohan-kapoor',
    initials: 'RK',
    customer: 'Rohan Kapoor',
    email: 'rohan.kapoor@proton.me',
    message: 'Is there a way to pause my subscription for a month?',
    sentiment: 'Neutral',
    priority: 'Medium',
    time: '2 hrs ago',
    status: 'Open',
    accent: '#f3e6ba',
  },
];

export const insight = {
  eyebrow: 'Pattern detected',
  title: 'Delivery delays are responsible for 42% of negative customer conversations this week.',
  recommendation:
    'Consider improving proactive delivery notifications and providing customers with real-time order updates.',
  relatedCount: '86 conversations',
};