import { Layout } from "@/components/Layout";
import { KineticSection, KineticCard, KineticButton, KineticGrid } from "@/components/ui/kinetic-card";
import { Check, Zap, Users, TrendingUp, Gift, Crown, Star, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Membership() {
  return (
    <Layout>
      <MembershipContent />
    </Layout>
  );
}

function MembershipContent() {
  const benefits = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "All Products Included",
      description: "Instant access to every AI agent template, toolkit, and operating system. No additional purchases needed."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Monthly New Releases",
      description: "Get brand new AI agents and systems every month. Always stay ahead with the latest automation tools."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Community Access",
      description: "Join our exclusive Discord/Circle community. Network, share wins, and get support from fellow power users."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Priority Support",
      description: "Get your questions answered first. Direct access to our team for implementation help and troubleshooting."
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Early Access",
      description: "Be the first to test new features and products. Shape the future of TurboTask AI with your feedback."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Exclusive Training",
      description: "Members-only workshops, webinars, and case studies. Learn advanced strategies from AI automation experts."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 border-b-2 border-black bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block bg-primary text-black px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
              Tier 5: Pro Membership
            </div>
            <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.9] tracking-tighter uppercase">
              TurboTask <span className="text-primary">Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
              All-access subscription to every AI Operating System, template, and toolkit. Plus exclusive community and monthly updates.
            </p>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
              <div className="bg-white text-black p-8 border-2 border-white">
                <div className="text-sm font-mono font-bold uppercase text-gray-600 mb-2">Monthly</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold">$19</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Flexible, cancel anytime</p>
                <KineticButton variant="outline" className="w-full border-2 border-black">
                  Start Monthly
                </KineticButton>
              </div>
              
              <div className="bg-primary text-black p-8 border-2 border-primary relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-black text-primary text-xs font-mono px-2 py-1 font-bold">
                  SAVE $29
                </div>
                <div className="text-sm font-mono font-bold uppercase mb-2">Annual</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold">$199</span>
                  <span className="text-gray-800">/year</span>
                </div>
                <p className="text-sm text-gray-800 mb-6">Best value, 2 months free</p>
                <KineticButton variant="primary" className="w-full bg-black text-primary border-2 border-black hover:bg-white hover:text-black">
                  Start Annual
                </KineticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <div className="bg-black text-white py-4 border-b-2 border-black overflow-hidden whitespace-nowrap relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> ALL ACCESS <span className="text-gray-500">///</span> UNLIMITED VALUE <span className="text-gray-500">///</span> EXCLUSIVE COMMUNITY
              </span>
            ))}
          </div>
          <div className="flex shrink-0" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="mx-8 font-mono font-bold uppercase tracking-widest flex items-center gap-4 text-xl">
                <Zap className="w-5 h-5 text-primary" /> ALL ACCESS <span className="text-gray-500">///</span> UNLIMITED VALUE <span className="text-gray-500">///</span> EXCLUSIVE COMMUNITY
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <KineticSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
            What's <span className="text-primary">Included</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to build a complete AI Operating System for your business. No limits, no additional costs.
          </p>
        </div>

        <KineticGrid>
          {benefits.map((benefit, index) => (
            <KineticCard key={index} className="group">
              <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="font-display font-bold text-xl uppercase mb-2 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </KineticCard>
          ))}
        </KineticGrid>
      </KineticSection>

      {/* Value Comparison */}
      <KineticSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              The <span className="text-primary">Math</span>
            </h2>
            <p className="text-lg text-gray-600">
              See how much you save with Pro membership vs. buying products individually.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8">
              <div className="text-sm font-mono font-bold uppercase text-gray-600 mb-4">Individual Purchase</div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">5 AI Agent Templates</span>
                  <span className="font-bold">$335</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">3 Professional Toolkits</span>
                  <span className="font-bold">$597</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">2 Complete OS Bundles</span>
                  <span className="font-bold">$994</span>
                </li>
                <li className="border-t-2 border-black pt-3 flex justify-between items-center font-bold text-xl">
                  <span>Total Cost</span>
                  <span className="text-red-600">$1,926</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">One-time purchases, no updates, no community</p>
            </div>

            <div className="border-2 border-primary bg-primary/5 p-8 relative">
              <div className="absolute top-2 right-2 bg-primary text-black text-xs font-mono px-2 py-1 font-bold">
                90% SAVINGS
              </div>
              <div className="text-sm font-mono font-bold uppercase text-primary mb-4">Pro Membership (Annual)</div>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">All Current Products</span>
                  <span className="font-bold text-primary">✓ Included</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">All Future Products</span>
                  <span className="font-bold text-primary">✓ Included</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600">Private Community</span>
                  <span className="font-bold text-primary">✓ Included</span>
                </li>
                <li className="border-t-2 border-primary pt-3 flex justify-between items-center font-bold text-xl">
                  <span>Total Cost</span>
                  <span className="text-primary">$199/year</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">Unlimited access, monthly updates, priority support</p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* FAQ Section */}
      <KineticSection className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
            Common <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="border-2 border-black p-6 bg-white">
              <h3 className="font-display font-bold text-xl uppercase mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">Yes! Cancel your monthly subscription anytime with no penalties. Annual subscriptions are non-refundable but you keep access for the full year.</p>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h3 className="font-display font-bold text-xl uppercase mb-2">Do I keep products if I cancel?</h3>
              <p className="text-gray-600">No, Pro membership is a subscription. When you cancel, you lose access to the products and community. However, you can download and save any templates you've used during your membership.</p>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h3 className="font-display font-bold text-xl uppercase mb-2">How often do you add new products?</h3>
              <p className="text-gray-600">We release at least 1-2 new AI agents or systems every month. Pro members get instant access to everything as soon as it's released.</p>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h3 className="font-display font-bold text-xl uppercase mb-2">Is this better than buying individually?</h3>
              <p className="text-gray-600">If you plan to buy 3+ products, Pro membership is the better deal. Plus you get the community, updates, and priority support which aren't available with individual purchases.</p>
            </div>

            <div className="border-2 border-black p-6 bg-white">
              <h3 className="font-display font-bold text-xl uppercase mb-2">What's included in the community?</h3>
              <p className="text-gray-600">Private Discord/Circle group with fellow Pro members. Share wins, get implementation help, access exclusive workshops, and network with other AI automation enthusiasts.</p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter">
            Ready to <span className="text-primary">Go Pro?</span>
          </h2>
          <p className="text-xl text-gray-300">
            Join hundreds of professionals automating their workflows with TurboTask Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <KineticButton variant="primary" className="text-lg px-8 py-4 bg-primary text-black border-primary hover:bg-white">
              Start Annual ($199/year)
            </KineticButton>
            <KineticButton variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
              Start Monthly ($19/mo)
            </KineticButton>
          </div>
          <p className="text-sm text-gray-400">
            Not ready? <Link href="/#products" className="text-primary underline">Browse individual products</Link>
          </p>
        </div>
      </KineticSection>
    </>
  );
}
