import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Dashboard from '@/pages/dashboard';
import PlaceholderPage from '@/pages/placeholder';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/customers">
          <PlaceholderPage title="Customers" description="A focused view of customer health, history, and relationship context is coming next." icon="users" />
        </Route>
        <Route path="/conversations">
          <PlaceholderPage title="Conversations" description="Review every customer conversation with the context and signal that helps your team move faster." icon="messages-square" />
        </Route>
        <Route path="/ai-copilot">
          <PlaceholderPage title="AI Copilot" description="Give every teammate a thoughtful first draft, useful context, and the confidence to respond." icon="sparkles" />
        </Route>
        <Route path="/ai-insights">
          <PlaceholderPage title="AI Insights" description="Turn recurring themes across conversations into clear, prioritized opportunities." icon="lightbulb" />
        </Route>
        <Route path="/analytics">
          <PlaceholderPage title="Analytics" description="Understand the operational story behind your support volume, outcomes, and customer sentiment." icon="chart-no-axes-combined" />
        </Route>
        <Route path="/settings">
          <PlaceholderPage title="Settings" description="Manage workspace preferences, team access, and how CXPilot interprets your conversations." icon="settings-2" />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;