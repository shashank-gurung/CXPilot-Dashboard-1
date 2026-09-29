export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "layout-dashboard" },
  { label: "Customers", href: "/customers", icon: "users" },
  { label: "Conversations", href: "/conversations", icon: "messages-square" },
  { label: "AI Copilot", href: "/ai-copilot", icon: "sparkles" },
  { label: "AI Insights", href: "/ai-insights", icon: "lightbulb" },
  { label: "Analytics", href: "/analytics", icon: "chart-no-axes-combined" },
];

export const utilityNavItems: NavItem[] = [
  { label: "Settings", href: "/settings", icon: "settings-2" },
];