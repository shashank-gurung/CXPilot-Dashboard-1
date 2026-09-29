import {
  BarChart3,
  Bell,
  ChartNoAxesCombined,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Lightbulb,
  Menu,
  MessageCircle,
  MessagesSquare,
  Search,
  Settings2,
  SmilePlus,
  Sparkles,
  Users,
  UsersRound,
  X,
  type LucideIcon,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  users: Users,
  'messages-square': MessagesSquare,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  'chart-no-axes-combined': ChartNoAxesCombined,
  'settings-2': Settings2,
  'users-round': UsersRound,
  'message-circle': MessageCircle,
  'smile-plus': SmilePlus,
  search: Search,
  bell: Bell,
  help: CircleHelp,
  menu: Menu,
  close: X,
  'file-text': FileText,
  'bar-chart': BarChart3,
};

export function CxpIcon({
  name,
  size = 18,
  strokeWidth = 1.8,
  className,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}