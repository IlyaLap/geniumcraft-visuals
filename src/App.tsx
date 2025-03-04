
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
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
import AboutPage from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const queryClient = new QueryClient();

// ScrollToTop component to ensure page scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<ProjectsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
