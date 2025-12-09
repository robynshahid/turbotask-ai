import { KineticButton } from "@/components/ui/kinetic-card";
import { Zap } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background font-body selection:bg-primary selection:text-white flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-black flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary fill-current" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">TurboTask AI</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm font-bold uppercase tracking-wide">
            <a href="/#products" className="hover:text-primary transition-colors cursor-pointer">Products</a>
            <Link href="/resources" className={`hover:text-primary transition-colors ${location === '/resources' ? 'text-primary' : ''}`}>Resources</Link>
            <Link href="/about" className={`hover:text-primary transition-colors ${location === '/about' ? 'text-primary' : ''}`}>About</Link>
            <Link href="/support" className={`hover:text-primary transition-colors ${location === '/support' ? 'text-primary' : ''}`}>Contact</Link>
          </div>
          <Link href="/support">
            <KineticButton variant="primary" className="hidden md:inline-flex py-2 px-4 text-xs">
              Get Started
            </KineticButton>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t-2 border-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-black flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary fill-current" />
                </div>
                <span className="font-display font-bold text-xl tracking-tighter uppercase">TurboTask AI</span>
              </div>
              <p className="text-gray-600 max-w-sm mb-6">
                Empowering professionals with simple, fast AI tools that reduce overwhelm and boost productivity.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">in</span>
                </div>
                <div className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">ig</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono font-bold uppercase mb-6 border-b-2 border-black inline-block pb-1">Products</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-600">
                <li><Link href="/#products" className="hover:text-primary">AI Templates</Link></li>
                <li><Link href="/#products" className="hover:text-primary">Professional Toolkits</Link></li>
                <li><Link href="/#products" className="hover:text-primary">Industry Toolkits</Link></li>
                <li><Link href="/#products" className="hover:text-primary">Workflow Bundles</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-mono font-bold uppercase mb-6 border-b-2 border-black inline-block pb-1">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-600">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/resources" className="hover:text-primary">Resources</Link></li>
                <li><Link href="/support" className="hover:text-primary">Contact</Link></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-mono text-gray-500">
              © {new Date().getFullYear()} TurboTask AI. All rights reserved.
            </p>
            <p className="text-sm font-mono text-gray-500">
              Designed by Manus AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
