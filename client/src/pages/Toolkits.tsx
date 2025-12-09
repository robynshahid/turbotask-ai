import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { Briefcase, Target, Sparkles, CheckCircle2, ArrowRight, Star } from "lucide-react";

export default function Toolkits() {
  const toolkits = [
    {
      name: "Executive Communication Kit",
      price: "$79",
      description: "Professional communication system for executives and managers. Master presentations, emails, and reports.",
      features: [
        "Executive email templates",
        "Presentation frameworks",
        "Report writing prompts",
        "Meeting facilitation guides"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link",
      popular: true
    },
    {
      name: "Sales & Marketing Toolkit",
      price: "$89",
      description: "Complete AI-powered system for sales professionals. Generate proposals, follow-ups, and marketing content.",
      features: [
        "Sales proposal generator",
        "Cold outreach templates",
        "Social media content calendar",
        "Marketing copy frameworks"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Research & Analysis Kit",
      price: "$74",
      description: "Advanced research toolkit for analysts, consultants, and researchers. Streamline data analysis and reporting.",
      features: [
        "Research methodology templates",
        "Data analysis prompts",
        "Report generation system",
        "Citation management tools"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Content Creator's Toolkit",
      price: "$84",
      description: "Everything content creators need to produce high-quality content faster. Blogs, videos, podcasts, and more.",
      features: [
        "Content ideation system",
        "Script writing templates",
        "SEO optimization prompts",
        "Content calendar planner"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Project Management Suite",
      price: "$92",
      description: "Complete project management system with AI-powered planning, tracking, and reporting capabilities.",
      features: [
        "Project planning templates",
        "Risk assessment tools",
        "Status report generators",
        "Stakeholder communication"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Consultant's Master Kit",
      price: "$97",
      description: "Premium toolkit for consultants. Client proposals, frameworks, deliverables, and presentation materials.",
      features: [
        "Proposal templates",
        "Strategic frameworks",
        "Client deliverable templates",
        "Presentation decks"
      ],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <KineticSection className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-primary text-black px-4 py-1 font-bold uppercase text-sm mb-6">
            PROFESSIONAL GRADE
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Professional <span className="text-primary">Toolkits</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Industry-specific communication systems, workflow organizers, and research kits designed for serious professionals. 
            Advanced AI prompts and frameworks that deliver results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="flex items-start gap-3">
              <Briefcase className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Industry Specific</h3>
                <p className="text-gray-400 text-sm">Tailored for your profession</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Advanced Prompts</h3>
                <p className="text-gray-400 text-sm">Professional-grade AI frameworks</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Complete Systems</h3>
                <p className="text-gray-400 text-sm">Everything you need in one kit</p>
              </div>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* Scrolling Banner */}
      <div className="bg-black text-white py-4 border-y-2 border-primary overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee hover:pause">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-4">
              <span className="text-2xl font-bold">⚡ SPEED</span>
              <span className="text-gray-500">///</span>
              <span className="text-2xl font-bold">SIMPLICITY</span>
              <span className="text-gray-500">///</span>
              <span className="text-2xl font-bold">RESULTS</span>
              <span className="text-gray-500">///</span>
            </div>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <KineticSection className="bg-white">
        <h2 className="font-display font-bold text-4xl uppercase mb-4 text-center">
          Choose Your <span className="text-primary">Toolkit</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Each toolkit is a complete system designed for specific professional needs. Includes advanced prompts, templates, and frameworks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolkits.map((toolkit, idx) => (
            <div 
              key={idx} 
              className={`border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group relative ${
                toolkit.popular ? 'bg-black text-white' : 'bg-white'
              }`}
            >
              {toolkit.popular && (
                <div className="absolute -top-3 -right-3 bg-primary text-black px-4 py-1 font-bold uppercase text-xs flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-2xl uppercase pr-4">{toolkit.name}</h3>
                <span className="text-primary font-bold text-xl shrink-0">{toolkit.price}</span>
              </div>
              
              <p className={`mb-6 ${toolkit.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {toolkit.description}
              </p>
              
              <div className="space-y-2 mb-8">
                {toolkit.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className={`text-sm ${toolkit.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              <a 
                href={toolkit.gumroadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <KineticButton className={`w-full font-bold uppercase flex items-center justify-center gap-2 ${
                  toolkit.popular 
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

      {/* What's Included Section */}
      <KineticSection className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-12 text-center">
            What's <span className="text-primary">Included</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Advanced AI Prompts</h3>
              <p className="text-gray-600">
                Professional-grade prompts engineered for maximum output quality. Each prompt is tested and refined for your industry.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Complete Frameworks</h3>
              <p className="text-gray-600">
                Strategic frameworks and methodologies used by top professionals. Apply proven systems to your work immediately.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Implementation Guides</h3>
              <p className="text-gray-600">
                Step-by-step guides showing exactly how to use each tool. Real examples and use cases included.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Lifetime Updates</h3>
              <p className="text-gray-600">
                As AI evolves, so do our toolkits. Get free updates and new prompts as we continuously improve each system.
              </p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* Testimonial Section */}
      <KineticSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-12 text-center">
            Trusted by <span className="text-primary">Professionals</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The Executive Communication Kit transformed how I handle client presentations. Saved me 10+ hours per week."
              </p>
              <p className="font-bold uppercase text-sm">— Sarah M., VP of Sales</p>
            </div>
            
            <div className="border-2 border-black p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "As a consultant, the Master Kit pays for itself after one client project. Incredible value and quality."
              </p>
              <p className="font-bold uppercase text-sm">— James T., Strategy Consultant</p>
            </div>
            
            <div className="border-2 border-black p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Finally, AI tools built for actual professionals. The Research Kit is exactly what I needed."
              </p>
              <p className="font-bold uppercase text-sm">— Dr. Lisa K., Research Analyst</p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
            Elevate Your <span className="text-primary">Professional Game</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Choose the toolkit designed for your profession and start working smarter today.
          </p>
          <a href="#products">
            <KineticButton className="bg-primary text-black hover:bg-primary/80 font-bold uppercase text-lg px-12 py-4">
              View All Toolkits
            </KineticButton>
          </a>
        </div>
      </KineticSection>
    </Layout>
  );
}
