import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { Layers, Video, Rocket, CheckCircle2, ArrowRight, Crown, Zap } from "lucide-react";

export default function Bundles() {
  const bundles = [
    {
      name: "Startup Accelerator Bundle",
      price: "$97",
      description: "Complete AI workflow system for startups and entrepreneurs. Everything you need to launch and scale faster.",
      features: [
        "Business planning templates",
        "Marketing automation system",
        "Customer communication toolkit",
        "Financial tracking templates",
        "Pitch deck framework",
        "10+ video tutorials"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Corporate Professional Bundle",
      price: "$147",
      description: "Enterprise-grade workflow system for corporate professionals. Master meetings, presentations, and reporting.",
      features: [
        "Executive communication suite",
        "Project management system",
        "Report automation toolkit",
        "Meeting facilitation framework",
        "Stakeholder management tools",
        "15+ video tutorials"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link",
      popular: true
    },
    {
      name: "Content Empire Bundle",
      price: "$127",
      description: "Complete content creation and marketing system. Build your content empire with AI-powered workflows.",
      features: [
        "Content strategy framework",
        "Multi-platform publishing system",
        "SEO optimization toolkit",
        "Social media automation",
        "Analytics and reporting",
        "12+ video tutorials"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Agency Growth Bundle",
      price: "$197",
      description: "Complete agency operations system. Client management, project delivery, and business development workflows.",
      features: [
        "Client onboarding system",
        "Project delivery framework",
        "Proposal and contract templates",
        "Team collaboration tools",
        "Business development toolkit",
        "20+ video tutorials"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Executive Mastery Bundle",
      price: "$247",
      description: "Premium workflow system for executives and senior leaders. Strategic planning, team management, and leadership tools.",
      features: [
        "Strategic planning framework",
        "Leadership communication system",
        "Team performance toolkit",
        "Decision-making frameworks",
        "Executive reporting templates",
        "25+ video tutorials",
        "1-on-1 implementation call"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Ultimate Pro Bundle",
      price: "$297",
      description: "Everything we offer in one comprehensive package. The complete AI-powered operating system for your business.",
      features: [
        "All templates included",
        "All toolkits included",
        "All workflow systems",
        "50+ video tutorials",
        "Priority support",
        "Lifetime updates",
        "2 implementation calls",
        "Private community access"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link",
      premium: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <KineticSection className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-primary text-black px-4 py-1 font-bold uppercase text-sm mb-6">
            $97 - $297
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Workflow <span className="text-primary">Bundles</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            End-to-end AI-powered workflow systems. The complete operating system for your business. 
            Full system access with video training and implementation support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="flex items-start gap-3">
              <Layers className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Full System Access</h3>
                <p className="text-gray-400 text-sm">Complete workflow ecosystem</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Video className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Video Training</h3>
                <p className="text-gray-400 text-sm">Step-by-step implementation guides</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Rocket className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Transform Your Business</h3>
                <p className="text-gray-400 text-sm">Complete operational upgrade</p>
              </div>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* Scrolling Banner */}
      <div className="bg-black text-white py-4 border-y-2 border-primary overflow-hidden whitespace-nowrap relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <span className="text-primary">⚡</span> SPEED <span className="text-gray-500">///</span> SIMPLICITY <span className="text-gray-500">///</span> RESULTS
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <span className="text-primary">⚡</span> SPEED <span className="text-gray-500">///</span> SIMPLICITY <span className="text-gray-500">///</span> RESULTS
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <KineticSection className="bg-white">
        <h2 className="font-display font-bold text-4xl uppercase mb-4 text-center">
          Choose Your <span className="text-primary">Bundle</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Each bundle is a complete workflow system designed for specific business needs. Includes templates, toolkits, video training, and support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bundles.map((bundle, idx) => (
            <div 
              key={idx} 
              className={`border-2 p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group relative ${
                bundle.premium 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary' 
                  : bundle.popular 
                    ? 'bg-black text-white border-black' 
                    : 'bg-white border-black'
              }`}
            >
              {bundle.premium && (
                <div className="absolute -top-3 -right-3 bg-primary text-black px-4 py-1 font-bold uppercase text-xs flex items-center gap-1">
                  <Crown className="w-3 h-3 fill-current" />
                  BEST VALUE
                </div>
              )}
              {bundle.popular && !bundle.premium && (
                <div className="absolute -top-3 -right-3 bg-primary text-black px-4 py-1 font-bold uppercase text-xs flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-2xl uppercase pr-4">{bundle.name}</h3>
                <span className="text-primary font-bold text-xl shrink-0">{bundle.price}</span>
              </div>
              
              <p className={`mb-6 ${
                bundle.popular && !bundle.premium ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {bundle.description}
              </p>
              
              <div className="space-y-2 mb-8">
                {bundle.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className={`text-sm ${
                      bundle.popular && !bundle.premium ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <a 
                href={bundle.gumroadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <KineticButton className={`w-full font-bold uppercase flex items-center justify-center gap-2 ${
                  bundle.premium || bundle.popular
                    ? 'bg-primary text-black hover:bg-primary/80' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </KineticButton>
              </a>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* What Makes Bundles Different */}
      <KineticSection className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-12 text-center">
            Why Choose a <span className="text-primary">Bundle?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Complete Systems</h3>
              <p className="text-gray-600">
                Not just templates—complete workflow systems that cover every aspect of your business operations from start to finish.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Video Training</h3>
              <p className="text-gray-600">
                Step-by-step video tutorials showing exactly how to implement each system. Watch, learn, and apply immediately.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Implementation Support</h3>
              <p className="text-gray-600">
                Premium bundles include 1-on-1 implementation calls to ensure you get maximum value and results from your investment.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Massive Savings</h3>
              <p className="text-gray-600">
                Save 40-60% compared to buying individual templates and toolkits separately. Get everything you need in one package.
              </p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* ROI Section */}
      <KineticSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-12 text-center">
            The <span className="text-primary">ROI</span> is Clear
          </h2>
          
          <div className="bg-black text-white border-2 border-black p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10-20</div>
                <div className="text-sm uppercase text-gray-400">Hours Saved Per Week</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">3-5x</div>
                <div className="text-sm uppercase text-gray-400">Productivity Increase</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-sm uppercase text-gray-400">To See Results</div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p className="text-lg text-gray-300">
                Most customers report that bundles pay for themselves within the first month through time savings and productivity gains.
              </p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
            Transform Your <span className="text-primary">Entire Workflow</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the Ultimate Pro Bundle and access everything we offer. The complete AI-powered operating system for your business.
          </p>
          <a 
            href="https://gumroad.com/l/your-ultimate-bundle-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KineticButton className="bg-primary text-black hover:bg-primary/80 font-bold uppercase text-lg px-12 py-4">
              Get Ultimate Bundle - $297
            </KineticButton>
          </a>
          <p className="text-sm text-gray-500 mt-4">
            30-day money-back guarantee • Lifetime access • Free updates
          </p>
        </div>
      </KineticSection>
    </Layout>
  );
}
