import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { ArrowRight, Briefcase, Code, Globe, Heart, Zap } from "lucide-react";

export default function Careers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 border-b-2 border-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            Join the Team
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Build the <span className="text-primary">Future</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We're looking for visionaries, builders, and problem-solvers who want to redefine how the world works.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <KineticSection className="bg-white">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-4">
            Why <span className="text-primary">TurboTask?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just building software; we're building a movement. Here's what it's like to work with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Move Fast",
              desc: "We ship daily. We believe in rapid iteration and learning by doing. Perfection is the enemy of progress."
            },
            {
              icon: Globe,
              title: "Work Anywhere",
              desc: "We are a remote-first company. We care about your output, not your desk location or hours logged."
            },
            {
              icon: Heart,
              title: "People First",
              desc: "We build tools to help people. That starts with our team. We support your growth, health, and autonomy."
            }
          ].map((perk, idx) => (
            <div key={idx} className="bg-gray-50 border-2 border-black p-8 hover:bg-white transition-colors">
              <perk.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display font-bold text-xl uppercase mb-2">{perk.title}</h3>
              <p className="text-gray-600 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </KineticSection>

      {/* Open Positions */}
      <KineticSection className="bg-gray-50" id="openings">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-8 text-center">
            Open <span className="text-primary">Positions</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                title: "Senior AI Prompt Engineer",
                dept: "Engineering",
                type: "Remote / Full-time",
                desc: "Lead the development of our next-generation workflow templates and system prompts."
              },
              {
                title: "Growth Marketing Manager",
                dept: "Marketing",
                type: "Remote / Full-time",
                desc: "Drive user acquisition and community growth through creative content strategies."
              },
              {
                title: "Product Designer",
                dept: "Design",
                type: "Remote / Contract",
                desc: "Shape the visual identity and user experience of our digital products."
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl uppercase">{job.title}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs font-mono px-2 py-1 font-bold uppercase">{job.dept}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{job.desc}</p>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase">
                    <Briefcase className="w-3 h-3" /> {job.type}
                  </div>
                </div>
                <KineticButton variant="outline" className="shrink-0">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </KineticButton>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Don't see the right role?</p>
            <KineticButton variant="primary">
              Join Talent Network
            </KineticButton>
          </div>
        </div>
      </KineticSection>
    </Layout>
  );
}
