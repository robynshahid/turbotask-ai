import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { ArrowRight, Check, Target, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b-2 border-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            Our Story
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Building the Future of <span className="text-primary">Work</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We believe that AI shouldn't be complicated. It should be a tool that empowers you to do your best work, faster than ever before.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <KineticSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="border-2 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
              <img src="/images/about-mission-clean.png" alt="Our Mission" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hidden md:block">
              <p className="font-display font-bold text-2xl uppercase leading-none">
                Speed.<br/>Simplicity.<br/>Results.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
              Why We Started <span className="text-primary">TurboTask AI</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In a world where technology is advancing at breakneck speed, many professionals feel left behind. We saw a growing gap: powerful AI tools existed, but they were often too complex, too technical, or too expensive for the average person to implement effectively.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We created TurboTask AI to bridge that gap. Our mission is simple: to empower professionals, entrepreneurs, and small businesses with plug-and-play AI solutions that require zero technical expertise. We don't just sell templates; we sell time, clarity, and the ability to focus on what truly matters.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-600">To democratize AI productivity for every professional.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase mb-1">Our Vision</h4>
                  <p className="text-sm text-gray-600">A world where manual busywork is a thing of the past.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* Core Values */}
      <KineticSection className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            These principles guide everything we build and every interaction we have with our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Speed Over Perfection",
              desc: "We believe in momentum. Our tools are designed to get you 80% of the way there instantly, so you can finish the job in record time."
            },
            {
              title: "Radical Simplicity",
              desc: "If it requires a manual to use, we've failed. Our products are intuitive, accessible, and ready to use from day one."
            },
            {
              title: "Real-World Impact",
              desc: "We don't care about hype. We care about results. Every tool we create is tested in real business scenarios to ensure it delivers value."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-white border-2 border-black p-8 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <div className="text-6xl font-display font-bold text-gray-100 mb-4">0{idx + 1}</div>
              <h3 className="font-display font-bold text-2xl uppercase mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* Timeline Section */}
      <KineticSection className="bg-black text-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-4">
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From a simple idea to a global productivity platform. Here's where we've been and where we're going.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>

          <div className="space-y-12">
            {[
              {
                year: "2023",
                title: "The Inception",
                desc: "TurboTask AI was founded with a single mission: to make AI accessible. We launched our first set of email templates.",
                side: "left"
              },
              {
                year: "2024",
                title: "Expansion & Growth",
                desc: "We expanded into industry-specific toolkits and launched our flagship 'Executive Communication Kit'.",
                side: "right"
              },
              {
                year: "2025",
                title: "Platform Launch",
                desc: "The launch of our full digital platform, enabling instant access to a comprehensive library of AI workflows.",
                side: "left",
                current: true
              },
              {
                year: "Future",
                title: "Global Ecosystem",
                desc: "Building a community-driven ecosystem where professionals can share and monetize their own AI workflows.",
                side: "right",
                link: "/careers",
                linkText: "Join Our Team"
              }
            ].map((item, idx) => (
              <div key={idx} className={`relative flex items-center justify-between ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-4 border-primary rounded-full z-10 flex items-center justify-center">
                  {item.current && <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>}
                </div>
                <div className={`w-5/12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                  <div className={`border-2 ${item.current ? 'border-primary bg-gray-900' : 'border-gray-700 bg-black'} p-6 hover:border-white transition-colors duration-300`}>
                    <span className={`font-mono font-bold text-xl mb-2 block ${item.current ? 'text-primary' : 'text-gray-500'}`}>{item.year}</span>
                    <h3 className="font-display font-bold text-xl uppercase mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                    {/* @ts-ignore */}
                    {item.link && (
                      <Link href={item.link}>
                        <span className="inline-flex items-center text-primary font-bold text-sm uppercase hover:underline cursor-pointer">
                          {/* @ts-ignore */}
                          {item.linkText} <ArrowRight className="ml-1 w-4 h-4" />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </KineticSection>

      {/* Team / Founder Note */}
      <KineticSection className="bg-white">
        <div className="max-w-4xl mx-auto border-2 border-black p-8 md:p-12 bg-gray-50 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 font-mono font-bold uppercase tracking-widest border-2 border-white shadow-lg">
            A Note from the Founder
          </div>
          
          <div className="text-center space-y-6 pt-6">
            <Users className="w-16 h-16 mx-auto text-primary" />
            <h3 className="font-display font-bold text-3xl uppercase">
              "We're here to help you reclaim your time."
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "I started TurboTask AI because I saw too many brilliant people getting bogged down by administrative tasks. The technology to automate this work exists, but it hasn't been accessible to everyone. We're changing that. We're building the tools I wish I had when I started my career—tools that act as a force multiplier for your talent and creativity."
            </p>
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-display font-bold text-xl uppercase">The TurboTask Team</p>
            </div>
          </div>
        </div>
      </KineticSection>

      {/* CTA */}
      <section className="py-24 bg-primary border-t-2 border-black text-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display font-extrabold text-5xl md:text-6xl uppercase tracking-tighter text-white mb-8 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Join the Revolution
          </h2>
          <p className="text-xl font-bold mb-12 max-w-2xl mx-auto text-black">
            Ready to stop working harder and start working smarter? Explore our toolkits and see the difference today.
          </p>
          <Link href="/products/toolkits">
            <KineticButton variant="inverse" className="text-lg px-12 py-4 bg-black text-white border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
              Explore Our Products <ArrowRight className="ml-2 w-5 h-5" />
            </KineticButton>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
