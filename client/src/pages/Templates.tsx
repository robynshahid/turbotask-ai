import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { Download, Zap, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function Templates() {
  return (
    <Layout>
      <TemplatesContent />
    </Layout>
  );
}

function TemplatesContent() {
  const templates = [
    {
      name: "Daily AI Planner",
      price: "$19",
      description: "AI-powered daily planning template that organizes your tasks, priorities, and schedule automatically.",
      features: ["Smart task prioritization", "Time blocking automation", "Daily review prompts"],
      gumroadLink: "https://gumroad.com/l/your-product-link" // Replace with actual Gumroad link
    },
    {
      name: "Email Response Generator",
      price: "$24",
      description: "Professional email templates with AI-powered response suggestions for common scenarios.",
      features: ["50+ email templates", "Tone adjustment options", "Quick response snippets"],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Content Creation Suite",
      price: "$29",
      description: "Complete set of AI prompts for creating blog posts, social media content, and marketing copy.",
      features: ["Blog post outlines", "Social media calendars", "SEO optimization prompts"],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Meeting Notes Assistant",
      price: "$22",
      description: "Automated meeting notes template with action item extraction and follow-up reminders.",
      features: ["Meeting agenda builder", "Action item tracker", "Follow-up email generator"],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Task Organizer Pro",
      price: "$27",
      description: "Advanced task management system with AI-powered categorization and deadline optimization.",
      features: ["Smart categorization", "Deadline predictions", "Progress tracking"],
      gumroadLink: "https://gumroad.com/l/your-product-link"
    },
    {
      name: "Complete Template Bundle",
      price: "$47",
      description: "All AI productivity templates in one package. Save $70 when you buy the bundle.",
      features: ["All 5 templates included", "Lifetime updates", "Priority support"],
      gumroadLink: "https://gumroad.com/l/your-product-link",
      popular: true
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <KineticSection className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block bg-primary text-black px-4 py-1 font-bold uppercase text-sm mb-6">
            $19 - $47
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            AI Productivity <span className="text-primary">Templates</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-12">
            Daily planners, task organizers, email templates, and content generators ready to deploy. 
            No setup required—download and start using immediately.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="flex items-start gap-3">
              <Download className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Instant Download</h3>
                <p className="text-gray-400 text-sm">Get immediate access after purchase</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">No Setup Required</h3>
                <p className="text-gray-400 text-sm">Ready to use out of the box</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-bold uppercase mb-1">Save 5+ Hours/Week</h3>
                <p className="text-gray-400 text-sm">Automate repetitive tasks instantly</p>
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
          Choose Your <span className="text-primary">Template</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Each template is designed to save you time and boost productivity. All templates include detailed instructions and examples.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <div 
              key={idx} 
              className={`border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group relative ${
                template.popular ? 'bg-primary/5' : 'bg-white'
              }`}
            >
              {template.popular && (
                <div className="absolute -top-3 left-8 bg-black text-primary px-4 py-1 font-bold uppercase text-xs">
                  POPULAR
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-2xl uppercase">{template.name}</h3>
                <span className="text-primary font-bold text-xl">{template.price}</span>
              </div>
              
              <p className="text-gray-600 mb-6">{template.description}</p>
              
              <div className="space-y-2 mb-8">
                {template.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={template.gumroadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <KineticButton className="w-full bg-primary text-black hover:bg-primary/80 font-bold uppercase flex items-center justify-center gap-2">
                  Buy Now
                  <ArrowRight className="w-4 h-4" />
                </KineticButton>
              </a>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* Why Templates Section */}
      <KineticSection className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-12 text-center">
            Why Choose Our <span className="text-primary">Templates?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Battle-Tested</h3>
              <p className="text-gray-600">
                Each template has been refined through hundreds of hours of real-world use by professionals across industries.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Customizable</h3>
              <p className="text-gray-600">
                Easily adapt templates to your specific needs and workflow. Modify prompts, add your own sections, and make it yours.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Lifetime Access</h3>
              <p className="text-gray-600">
                Buy once, use forever. All templates include lifetime access and free updates as we improve them.
              </p>
            </div>
            
            <div className="bg-white border-2 border-black p-6">
              <h3 className="font-bold uppercase text-xl mb-3">Money-Back Guarantee</h3>
              <p className="text-gray-600">
                Not satisfied? Get a full refund within 30 days, no questions asked. We're confident you'll love these templates.
              </p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6">
            Ready to <span className="text-primary">Accelerate?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the Complete Template Bundle and save $70. All templates included with lifetime updates.
          </p>
          <a 
            href="https://gumroad.com/l/your-bundle-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <KineticButton className="bg-primary text-black hover:bg-primary/80 font-bold uppercase text-lg px-12 py-4">
              Get Complete Bundle - $47
            </KineticButton>
          </a>
        </div>
      </KineticSection>
    </Layout>
  );
}
