
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import BlogPage from "./pages/Blog";
import ContactsPage from "./pages/Contacts";
import OrderWebsitePage from "./pages/OrderWebsite";
import NotFound from "./pages/NotFound";
import IncreaseConversionBlog from "./pages/blogs/IncreaseConversionBlog";
import SeoOptimizationBlog from "./pages/blogs/SeoOptimizationBlog";
import PsychologyOfDesignBlog from "./pages/blogs/PsychologyOfDesignBlog";
import MobileOptimizationBlog from "./pages/blogs/MobileOptimizationBlog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/increase-conversion" element={<IncreaseConversionBlog />} />
          <Route path="/blog/seo-optimization-2025" element={<SeoOptimizationBlog />} />
          <Route path="/blog/psychology-of-design" element={<PsychologyOfDesignBlog />} />
          <Route path="/blog/mobile-optimization" element={<MobileOptimizationBlog />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/contact" element={<ContactsPage />} />
          <Route path="/order" element={<OrderWebsitePage />} />
          <Route path="/case-studies" element={<ProjectsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
