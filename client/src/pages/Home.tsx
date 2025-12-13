import { Layout } from "@/components/Layout";
import { KineticButton, KineticCard, KineticGrid, KineticSection } from "@/components/ui/kinetic-card";
import { ArrowRight, Check, Cpu, Layers, Layout as LayoutIcon, Zap } from "lucide-react";
import { Link } from "wouter";
import { FAQ } from "@/components/FAQ";

export default function Home() {

  return (
    <Layout>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                AI Operating Systems
              </div>
              <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
                Work <span className="text-primary">Faster.</span><br/>
                Smarter.<br/>
                Instantly.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-lg font-medium leading-relaxed">
                End-to-end AI Operating Systems that manage entire business functions. From $47 starter kits to enterprise solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#products">
                  <KineticButton variant="primary" className="text-lg px-8 py-4">
                    View Product Ladder <ArrowRight className="ml-2 w-5 h-5" />
                  </KineticButton>
                </Link>
                <Link href="/membership">
                  <KineticButton variant="outline" className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-black">
                    Try Pro Membership
                  </KineticButton>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white p-2">
                <img 
                  src="/images/hero-banner-new.png" 
                  srcSet="/images/hero-banner-new.png 640w, /images/hero-banner-new.png 1200w"
                  sizes="(max-width: 640px) 100vw, 600px"
                  alt="Turbotask AI Workflow" 
                  className="w-full h-auto object-cover transition-all duration-500" style={{backgroundColor: '#e47207'}}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary border-2 border-black z-0"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-200 border-2 border-black z-0" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Marquee style */}
      <div className="bg-black text-white py-4 border-b-2 border-black overflow-hidden whitespace-nowrap relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> Speed <span className="text-gray-500">///</span> Simplicity <span className="text-gray-500">///</span> Results
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> Speed <span className="text-gray-500">///</span> Simplicity <span className="text-gray-500">///</span> Results
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <KineticSection id="products" className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              Product <span className="text-primary">Value Ladder</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              From free starter resources to enterprise solutions. Choose your level and upgrade as you grow.
            </p>
          </div>
          <KineticButton variant="outline">View All Products</KineticButton>
        </div>

        <KineticGrid>
          <KineticCard className="group">
            <div className="mb-6 overflow-hidden border-2 border-black h-48 bg-gray-100 relative">
              <img src="/images/feature-templates-clean.png" alt="AI Templates" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-mono px-2 py-1 font-bold">
                $47 - $97
              </div>
            </div>
            <div className="mb-2 text-xs font-mono font-bold text-gray-500 uppercase">Tier 2: Starter Kits</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2 group-hover:text-primary transition-colors">
              AI Agent Templates
            </h3>
            <p className="text-gray-600 mb-6">
              Individual AI agents for email triage, content creation, meeting notes, and more. Ready to deploy.
            </p>
            <ul className="space-y-2 mb-6 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Instant Download</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> No-Code Setup</li>
            </ul>
            <Link href="/products/templates">
              <KineticButton variant="outline" className="w-full">Get Templates</KineticButton>
            </Link>
          </KineticCard>

          <KineticCard className="group bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,122,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,122,0,1)]">
            <div className="mb-6 overflow-hidden border-2 border-white h-48 bg-gray-800 relative">
              <img 
                src="/images/feature-toolkits-clean.png" 
                srcSet="/images/feature-toolkits-clean.png 640w, /images/feature-toolkits-clean.png 1200w"
                sizes="(max-width: 640px) 100vw, 400px"
                alt="Professional Toolkits" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-2 right-2 bg-primary text-white text-xs font-mono px-2 py-1 font-bold">
                $149 - $249
              </div>
            </div>
            <div className="mb-2 text-xs font-mono font-bold text-gray-400 uppercase">Tier 3: Professional Systems</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2 text-primary">
              Industry-Specific Toolkits
            </h3>
            <p className="text-gray-300 mb-6">
              Complete AI systems for marketing agencies, consultants, and creative professionals.
            </p>
            <ul className="space-y-2 mb-6 font-mono text-sm text-gray-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Industry Specific</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Multiple Agents</li>
            </ul>
            <Link href="/products/toolkits">
              <KineticButton variant="primary" className="w-full border-white">Get Toolkits</KineticButton>
            </Link>
          </KineticCard>

          <KineticCard className="group">
            <div className="mb-6 overflow-hidden border-2 border-black h-48 bg-gray-100 relative">
              <img 
                src="/images/feature-bundles-clean.png" 
                srcSet="/images/feature-bundles-clean.png 640w, /images/feature-bundles-clean.png 1200w"
                sizes="(max-width: 640px) 100vw, 400px"
                alt="Workflow Bundles" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-mono px-2 py-1 font-bold">
                $397 - $597
              </div>
            </div>
            <div className="mb-2 text-xs font-mono font-bold text-gray-500 uppercase">Tier 4: Complete OS</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2 group-hover:text-primary transition-colors">
              AI Operating Systems
            </h3>
            <p className="text-gray-600 mb-6">
              Full business AI Operating Systems. Manage entire functions from client onboarding to content marketing.
            </p>
            <ul className="space-y-2 mb-6 font-mono text-sm text-gray-500">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Complete Integration</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Video Training</li>
            </ul>
            <Link href="/products/bundles">
              <KineticButton variant="outline" className="w-full">Get Bundles</KineticButton>
            </Link>
          </KineticCard>

          <KineticCard className="group bg-gradient-to-br from-black to-gray-900 text-white border-black shadow-[6px_6px_0px_0px_rgba(255,122,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,122,0,1)]">
            <div className="mb-6 overflow-hidden border-2 border-primary h-48 bg-gradient-to-br from-primary to-orange-600 relative">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <div className="font-mono font-bold text-black text-sm">ALL-ACCESS</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-black text-primary text-xs font-mono px-2 py-1 font-bold">
                BEST VALUE
              </div>
            </div>
            <div className="mb-2 text-xs font-mono font-bold text-primary uppercase">Tier 5: Pro Membership</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2 text-primary">
              TurboTask Pro
            </h3>
            <p className="text-gray-300 mb-4">
              All-access subscription + private community. Get every template, toolkit, and system. Plus exclusive updates.
            </p>
            <div className="mb-6 p-4 bg-primary/10 border-2 border-primary rounded">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold text-primary">$19</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>
              <div className="text-xs text-gray-400">or $199/year (save $29)</div>
            </div>
            <ul className="space-y-2 mb-6 font-mono text-sm text-gray-400">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> All Products Included</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Private Community</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Monthly Updates</li>
            </ul>
            <Link href="/membership">
              <KineticButton variant="primary" className="w-full border-primary bg-primary text-black hover:bg-white">Join Pro</KineticButton>
            </Link>
          </KineticCard>

          <KineticCard className="group bg-primary text-black border-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="mb-6 overflow-hidden border-2 border-black h-48 bg-black relative">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🤖</div>
                  <div className="font-mono font-bold text-white text-sm">CUSTOM BUILT</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 bg-black text-primary text-xs font-mono px-2 py-1 font-bold">
                $1,497+
              </div>
            </div>
            <div className="mb-2 text-xs font-mono font-bold text-black uppercase">Tier 6: Done-For-You</div>
            <h3 className="font-display font-bold text-2xl uppercase mb-2 text-black">
              Custom Implementation
            </h3>
            <p className="text-gray-900 mb-6">
              Done-for-you custom AI workflows, agents, and automated systems built specifically for your business.
            </p>
            <ul className="space-y-2 mb-6 font-mono text-sm text-gray-900">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> Custom Built</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-black" /> White Glove Service</li>
            </ul>
            <Link href="/products/automation">
              <KineticButton variant="outline" className="w-full border-black text-black hover:bg-black hover:text-primary">Get Started</KineticButton>
            </Link>
          </KineticCard>
        </KineticGrid>
      </KineticSection>

      {/* About / Mission Section */}
      <KineticSection id="about" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -inset-4 bg-primary/20 border-2 border-black z-0 transform rotate-2"></div>
             <div className="relative z-10 border-2 border-black bg-white p-2">
                <img src="/images/footer-image.png" alt="Our Mission" className="w-full h-auto" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter">
              We Build <span className="bg-primary text-white px-2">Speed</span>
            </h2>
            <p className="text-xl font-medium text-gray-800">
              TurboTask AI is a digital productivity company that helps you work faster, smarter, and more efficiently.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We solve a growing workforce challenge: professionals lack time, systems, and knowledge to implement AI effectively. We deliver ready-to-use solutions that require no technical experience and produce immediate results.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-display font-bold text-xl uppercase mb-1">Mission</h4>
                <p className="text-sm text-gray-600">Empower professionals with simple, fast AI tools.</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <h4 className="font-display font-bold text-xl uppercase mb-1">Vision</h4>
                <p className="text-sm text-gray-600">Global leader in AI workflow solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* Features Grid */}
      <KineticSection className="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Why <span className="text-primary">TurboTask?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlike complex AI apps or training programs, we provide instant, actionable tools with no learning curve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Zap, title: "Speed", desc: "Immediate impact on your daily workflow." },
            { icon: LayoutIcon, title: "Simplicity", desc: "No technical experience required." },
            { icon: Layers, title: "Accessibility", desc: "Tools that work where you work." },
            { icon: Cpu, title: "Innovation", desc: "Cutting-edge AI implementation." }
          ].map((feature, idx) => (
            <div key={idx} className="border-2 border-white/20 p-6 hover:bg-white/5 transition-colors">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl uppercase mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* FAQ Section */}
      <KineticSection id="faq" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          
          <FAQ />

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link href="/support" className="inline-flex items-center font-bold text-black hover:text-primary transition-colors border-b-2 border-black hover:border-primary pb-1">
              Contact Support <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </KineticSection>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary border-b-2 border-black text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Ready to Accelerate?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto text-black">
            Get the "TurboTask Starter Kit" today. 10 AI Templates that save 5 hours a week.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="px-6 py-4 text-lg font-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all w-full sm:w-96"
            />
            <KineticButton variant="inverse" className="text-lg px-8 py-4 bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
              Get Starter Kit
            </KineticButton>
          </div>
        </div>
      </section>

    </Layout>
  );
}
