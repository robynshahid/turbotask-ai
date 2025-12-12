import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ProductDetail from "./pages/ProductDetail";
import Resources from "./pages/Resources";
import ArticleDetail from "./pages/ArticleDetail";
import Support from "./pages/Support";
import HelpArticleDetail from "./pages/HelpArticleDetail";
import Templates from "./pages/Templates";
import Toolkits from "./pages/Toolkits";
import Bundles from "./pages/Bundles";
import Automation from "./pages/Automation";
import Membership from "./pages/Membership";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/resources/:id"} component={ArticleDetail} />
      <Route path={"/support"} component={Support} />
      <Route path={"/support/article/:id"} component={HelpArticleDetail} />
      <Route path={"/products/templates"} component={Templates} />
      <Route path={"/products/toolkits"} component={Toolkits} />
      <Route path={"/products/bundles"} component={Bundles} />
      <Route path={"/products/automation"} component={Automation} />
      <Route path={"/membership"} component={Membership} />
      <Route path={"/products/:category"} component={ProductDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
