import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import { useRoute } from "wouter";
import { articles } from "@/data/articles";
import { useEffect } from "react";

export default function ArticleDetail() {
  const [match, params] = useRoute("/resources/:id");
  const articleId = params ? parseInt(params.id) : 0;
  const article = articles.find(a => a.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
          <h1 className="font-display font-bold text-4xl mb-4">Article Not Found</h1>
          <KineticButton variant="primary" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
          </KineticButton>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="bg-white min-h-screen pb-20">
        {/* Hero Section */}
        <div className="bg-gray-50 border-b-2 border-black py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <KineticButton variant="outline" className="px-4 py-2 text-xs h-auto" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 w-3 h-3" /> Back to Resources
              </KineticButton>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center text-sm font-mono font-bold uppercase text-primary mb-6">
              <span className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1">
                <Tag className="w-3 h-3" /> {article.category}
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
              <span className="flex items-center gap-2 text-gray-500">
                <Calendar className="w-3 h-3" /> {article.date}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tighter leading-tight mb-8">
              {article.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium border-l-4 border-primary pl-6">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl -mt-12 mb-16 relative z-10">
          <div className="border-2 border-black p-2 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-[400px] md:h-[500px] object-contain bg-gray-50"
            />
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div 
            className="prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary prose-img:border-2 prose-img:border-black prose-img:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share / Footer */}
          <div className="mt-16 pt-8 border-t-2 border-gray-100 flex justify-between items-center">
            <div className="font-mono text-sm text-gray-500 uppercase font-bold">
              Share this article
            </div>
            <div className="flex gap-4">
              <button className="p-2 border-2 border-black hover:bg-primary hover:text-white hover:border-primary transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Signup */}
      <div className="bg-primary/5 border-t-2 border-black py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="font-display font-bold text-2xl uppercase mb-4">
            Get AI Tips in Your Inbox
          </h3>
          <p className="text-gray-600 mb-6">
            Join 10,000+ professionals receiving weekly guides on AI workflow automation.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border-2 border-black font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              required
            />
            <KineticButton variant="primary" type="submit" className="whitespace-nowrap">
              Subscribe Free
            </KineticButton>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <KineticSection className="bg-black text-white border-t-2 border-black">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-4xl uppercase mb-6">
            Ready to implement this?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get the templates and toolkits mentioned in this article and start automating your workflow today.
          </p>
          <KineticButton variant="primary" className="px-8 py-4 text-lg border-white" onClick={() => window.location.href = '/#products'}>
            Explore Toolkits
          </KineticButton>
        </div>
      </KineticSection>
    </Layout>
  );
}
