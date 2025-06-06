
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateCompany from "./pages/CreateCompany";
import TeamConfig from "./pages/TeamConfig";
import AIMarketplace from "./pages/AIMarketplace";
import AgentConfig from "./pages/AgentConfig";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create-company" element={<CreateCompany />} />
          <Route path="/team-config/:teamId" element={<TeamConfig />} />
          <Route path="/ai-marketplace/:teamId" element={<AIMarketplace />} />
          <Route path="/agent-config/:teamId/:agentId" element={<AgentConfig />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
