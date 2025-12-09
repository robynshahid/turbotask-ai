import { Layout } from "@/components/Layout";
import { KineticButton } from "@/components/ui/kinetic-card";
import { ArrowLeft, HelpCircle, Mail } from "lucide-react";
import { useRoute } from "wouter";
import { helpArticles } from "@/data/helpArticles";
import { useEffect } from "react";

export default function HelpArticleDetail() {
  const [match, params] = useRoute("/support/article/:id");
  const articleId = params ? params.id : "";
  const article = helpArticles.find(a => a.id === articleId);

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
        {/* Header */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-2 mb-8">
              <KineticButton variant="outline" className="px-4 py-2 text-xs h-auto border-white text-white hover:bg-white hover:text-black" onClick={() => window.location.href = '/support'}>
                <ArrowLeft className="mr-2 w-3 h-3" /> Back to Support
              </KineticButton>
            </div>
            
            <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              {article.category}
            </div>

            <h1 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tighter leading-tight mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-400 font-medium">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-3xl py-16">
          <div 
            className="prose prose-lg prose-headings:font-display prose-headings:uppercase prose-headings:font-bold prose-p:text-gray-700 prose-a:text-primary prose-strong:text-black max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Feedback / Footer */}
          <div className="mt-16 pt-8 border-t-2 border-gray-100">
            <div className="bg-gray-50 p-8 border-2 border-black flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary" /> Still need help?
                </h3>
                <p className="text-gray-600 text-sm">
                  Our support team is available Mon-Fri, 9am - 5pm EST.
                </p>
              </div>
              <KineticButton variant="primary" onClick={() => window.location.href = '/support'}>
                <Mail className="mr-2 w-4 h-4" /> Contact Support
              </KineticButton>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
