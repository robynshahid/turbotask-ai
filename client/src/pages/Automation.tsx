import { KineticSection, KineticCard, KineticButton, KineticGrid } from "@/components/ui/kinetic-card";
import { Layout } from "@/components/Layout";
import { Check, Zap, Bot, Workflow, Clock, DollarSign, Target, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Automation() {
  return (
    <Layout>
      <AutomationContent />
    </Layout>
  );
}

function AutomationContent() {
  const services = [
    {
      name: "AI Customer Service Agents",
      description: "24/7 automated customer support that handles inquiries, provides information, and escalates when needed.",
      price: "From $497/mo",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Automated ticket routing",
        "Knowledge base integration"
      ]
    },
    {
      name: "Email & Communication Workflows",
      description: "Automated email sequences, follow-ups, and communication systems that run on autopilot.",
      price: "From $297",
      features: [
        "Automated email sequences",
        "Smart follow-up systems",
        "Template personalization",
        "Response tracking"
      ]
    },
    {
      name: "Scheduling & Intake Automation",
      description: "Streamline appointment booking, client onboarding, and data collection processes.",
      price: "From $397",
      features: [
        "Automated scheduling",
        "Client intake forms",
        "Calendar integration",
        "Reminder systems"
      ]
    },
    {
      name: "Document Generation Systems",
      description: "Automatically create contracts, proposals, reports, and documents from templates and data.",
      price: "From $497",
      features: [
        "Template-based generation",
        "Data auto-population",
        "Multi-format export",
        "Version control"
      ]
    },
    {
      name: "CRM & Lead Management",
      description: "Automated lead capture, qualification, nurturing, and pipeline management systems.",
      price: "From $597/mo",
      features: [
        "Lead capture automation",
        "Scoring and qualification",
        "Automated nurture sequences",
        "Pipeline tracking"
      ]
    },
    {
      name: "AI Research & Content Assistants",
      description: "Automated research, content generation, and data analysis tools tailored to your needs.",
      price: "From $397",
      features: [
        "Automated research",
        "Content generation",
        "Data analysis",
        "Report creation"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "One-Time Buildout",
      price: "$297 - $3,000",
      description: "Custom automation built and delivered",
      features: [
        "Custom workflow design",
        "Implementation & setup",
        "Testing & optimization",
        "Documentation & training",
        "30-day support included"
      ],
      cta: "Get Quote"
    },
    {
      name: "Monthly Retainer",
      price: "$97 - $497/mo",
      description: "Ongoing automation support & optimization",
      features: [
        "Monthly automation updates",
        "Performance monitoring",
        "Continuous optimization",
        "Priority support",
        "New workflow additions"
      ],
      cta: "Start Retainer",
      popular: true
    },
    {
      name: "Enterprise Projects",
      price: "$5,000 - $25,000",
      description: "Large-scale automation systems",
      features: [
        "Multi-department automation",
        "Complex integrations",
        "Dedicated project manager",
        "Custom AI agent development",
        "Ongoing enterprise support"
      ],
      cta: "Contact Sales"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 10-20 Hours Per Week",
      description: "Automate repetitive tasks and focus on high-value work that grows your business."
    },
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      description: "Cut manual labor costs by 40-60% with intelligent automation systems."
    },
    {
      icon: Target,
      title: "Increase Accuracy",
      description: "Eliminate human error with consistent, reliable automated processes."
    },
    {
      icon: Sparkles,
      title: "Scale Without Hiring",
      description: "Handle 10x more work without adding staff through smart automation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <KineticSection className="bg-black text-white pt-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-primary text-black px-4 py-1 font-mono font-bold text-sm mb-6">
            NEW SERVICE
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            AI Automation
            <br />
            <span className="text-primary">Done For You</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Custom AI workflows, agents, and automated systems built specifically for your business. 
            Stop doing repetitive tasks. Start scaling effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <KineticButton variant="primary" size="lg">
                <Bot className="w-5 h-5" />
                Get Started
              </KineticButton>
            </Link>
            <Link href="#services">
              <KineticButton variant="outline" size="lg" className="border-white text-white">
                View Services
              </KineticButton>
            </Link>
          </div>
        </div>
      </KineticSection>

      {/* Value Proposition - Marquee style */}
      <div className="bg-black text-white py-4 border-b-2 border-black overflow-hidden whitespace-nowrap relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> Custom Built <span className="text-gray-500">///</span> Fully Automated <span className="text-gray-500">///</span> Scalable
              </span>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> Custom Built <span className="text-gray-500">///</span> Fully Automated <span className="text-gray-500">///</span> Scalable
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <KineticSection className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Why <span className="text-primary">Automate</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business operations with intelligent automation that works 24/7.
          </p>
        </div>

        <KineticGrid>
          {benefits.map((benefit, index) => (
            <KineticCard key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary border-2 border-black mb-4">
                <benefit.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </KineticCard>
          ))}
        </KineticGrid>
      </KineticSection>

      {/* Services Section */}
      <KineticSection id="services" className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Automation <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Custom-built AI systems designed to eliminate manual work and scale your operations.
          </p>
        </div>

        <KineticGrid>
          {services.map((service, index) => (
            <KineticCard key={index} className="group">
              <div className="flex items-start justify-between mb-4">
                <Workflow className="w-8 h-8 text-primary" />
                <span className="font-mono text-sm font-bold text-gray-500">{service.price}</span>
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 font-mono text-sm text-gray-500">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" /> {feature}
                  </li>
                ))}
              </ul>
            </KineticCard>
          ))}
        </KineticGrid>

        <div className="text-center mt-12">
          <Link href="#contact">
            <KineticButton variant="primary" size="lg">
              Request Custom Quote
            </KineticButton>
          </Link>
        </div>
      </KineticSection>

      {/* Pricing Section */}
      <KineticSection className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            Flexible <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the engagement model that works best for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <KineticCard 
              key={index} 
              className={`relative ${tier.popular ? 'bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,122,0,1)]' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 font-mono font-bold text-xs">
                  POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`font-display font-bold text-2xl uppercase mb-2 ${tier.popular ? 'text-primary' : ''}`}>
                  {tier.name}
                </h3>
                <div className={`font-display font-bold text-3xl mb-2 ${tier.popular ? 'text-white' : ''}`}>
                  {tier.price}
                </div>
                <p className={tier.popular ? 'text-gray-300' : 'text-gray-600'}>
                  {tier.description}
                </p>
              </div>
              <ul className={`space-y-3 mb-8 font-mono text-sm ${tier.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className={`w-4 h-4 ${tier.popular ? 'text-primary' : 'text-primary'}`} /> 
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#contact">
                <KineticButton 
                  variant={tier.popular ? "primary" : "outline"} 
                  className={`w-full ${tier.popular ? 'border-white' : ''}`}
                >
                  {tier.cta}
                </KineticButton>
              </Link>
            </KineticCard>
          ))}
        </div>
      </KineticSection>

      {/* Process Section */}
      <KineticSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from consultation to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Discovery Call", description: "We analyze your workflows and identify automation opportunities." },
            { step: "02", title: "Custom Proposal", description: "Receive a detailed plan with timeline, pricing, and expected ROI." },
            { step: "03", title: "Build & Test", description: "We build, test, and refine your custom automation system." },
            { step: "04", title: "Deploy & Support", description: "Launch your automation with full training and ongoing support." }
          ].map((process, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-primary border-2 border-black font-display font-bold text-2xl mb-4">
                {process.step}
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2">
                {process.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            Ready to <span className="text-primary">Automate</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free 30-minute discovery call to explore how AI automation can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact">
              <KineticButton variant="primary" size="lg">
                <Bot className="w-5 h-5" />
                Schedule Discovery Call
              </KineticButton>
            </Link>
            <Link href="/">
              <KineticButton variant="outline" size="lg" className="border-white text-white">
                View All Products
              </KineticButton>
            </Link>
          </div>
        </div>
      </KineticSection>
    </div>
  );
}
