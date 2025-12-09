import { Layout } from "@/components/Layout";
import { KineticButton, KineticSection } from "@/components/ui/kinetic-card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Book, FileText, HelpCircle, Mail, MessageSquare, Search, ExternalLink, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { toast } from "sonner";
import { helpArticles } from "@/data/helpArticles";
import { trackEvent } from "@/lib/analytics";
import { trpc } from "@/lib/trpc";

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [aiResponse, setAiResponse] = useState<{ answer: string; relatedArticles: Array<{ id: string; title: string; excerpt: string }> } | null>(null);
  const [isAskingAI, setIsAskingAI] = useState(false);

  const askAgentMutation = trpc.support.askAgent.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setAiResponse({ answer: data.answer, relatedArticles: data.relatedArticles });
        trackEvent('ai_agent_response', { query: searchQuery, success: true });
      } else {
        setAiResponse({ answer: data.answer, relatedArticles: [] });
        trackEvent('ai_agent_response', { query: searchQuery, success: false });
      }
      setIsAskingAI(false);
    },
    onError: (error) => {
      console.error("AI Agent error:", error);
      setAiResponse({ answer: "I'm sorry, I couldn't process your request. Please try again or contact support@turbotaskai.com.", relatedArticles: [] });
      setIsAskingAI(false);
      trackEvent('ai_agent_error', { query: searchQuery, error: error.message });
    }
  });

  // Debounce search analytics
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.length > 2) {
        trackEvent('search_query', { query: searchQuery, results_count: filteredArticles.length });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleAskAI = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a question first.");
      return;
    }
    setIsAskingAI(true);
    setAiResponse(null);
    askAgentMutation.mutate({ question: searchQuery });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAskAI();
    }
  };

  const filteredArticles = useMemo(() => {
    let articles = helpArticles;

    if (selectedCategory) {
      articles = articles.filter(a => a.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      articles = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    } else if (!selectedCategory) {
      articles = articles.filter(a => !a.externalLink);
    }

    return articles;
  }, [searchQuery, selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Support ticket submitted successfully! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <KineticSection className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Support <span className="text-primary">Center</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Find answers, troubleshoot issues, and get the help you need to keep your workflows running at turbo speed.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Ask me anything about TurboTask..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setAiResponse(null);
              }}
              onKeyDown={handleKeyDown}
              className="w-full pl-12 pr-32 py-4 bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              onClick={handleAskAI}
              disabled={isAskingAI || !searchQuery.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-black px-4 py-2 font-bold uppercase text-sm flex items-center gap-2 hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAskingAI ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Thinking...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Ask AI
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">Press Enter or click "Ask AI" to get an instant answer</p>
        </div>
      </KineticSection>

      {/* AI Response Section */}
      {(aiResponse || isAskingAI) && (
        <KineticSection className="bg-gradient-to-b from-primary/10 to-white py-12 border-b-2 border-primary/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-primary p-3 rounded-full shrink-0">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl uppercase mb-4 flex items-center gap-2">
                  AI Support Agent
                  {isAskingAI && <Loader2 className="w-5 h-5 animate-spin text-primary" />}
                </h3>
                
                {isAskingAI ? (
                  <div className="bg-white p-6 border-2 border-black">
                    <div className="flex items-center gap-3 text-gray-500">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing your question and searching our knowledge base...</span>
                    </div>
                  </div>
                ) : aiResponse && (
                  <div className="bg-white p-6 border-2 border-black">
                    <div 
                      className="prose prose-sm max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ 
                        __html: aiResponse.answer
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\n/g, '<br />')
                          .replace(/- (.*?)(?=<br|$)/g, '<li>$1</li>')
                      }}
                    />
                    
                    {aiResponse.relatedArticles.length > 0 && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-bold text-sm uppercase text-gray-500 mb-3">Related Articles</h4>
                        <div className="space-y-2">
                          {aiResponse.relatedArticles.map((article) => (
                            <a 
                              key={article.id}
                              href={`/support/article/${article.id}`}
                              className="block p-3 bg-gray-50 hover:bg-primary/10 border border-gray-200 hover:border-primary transition-colors group"
                            >
                              <span className="font-medium text-gray-800 group-hover:text-primary transition-colors">{article.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </KineticSection>
      )}

      {/* Help Categories */}
      <KineticSection className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Book, title: "Getting Started", desc: "Installation guides and basic setup instructions.", category: "Getting Started" },
            { icon: FileText, title: "Billing & Licenses", desc: "Manage your subscription and invoices.", category: "Billing & Licenses" },
            { icon: MessageSquare, title: "Troubleshooting", desc: "Common issues and quick fixes.", category: "Troubleshooting" }
          ].map((category, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                setSelectedCategory(selectedCategory === category.category ? null : category.category);
                setSearchQuery("");
                setAiResponse(null);
              }}
              className={`border-2 border-black p-8 transition-colors group cursor-pointer ${selectedCategory === category.category ? 'bg-primary/10 border-primary' : 'hover:bg-gray-50'}`}
            >
              <category.icon className={`w-10 h-10 mb-4 group-hover:scale-110 transition-transform ${selectedCategory === category.category ? 'text-black' : 'text-primary'}`} />
              <h3 className="font-display font-bold text-xl uppercase mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" id="search-results">
          {/* Popular Articles / Search Results */}
          <div>
            <h2 className="font-display font-bold text-3xl uppercase mb-8 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" /> 
              {searchQuery ? 'Search Results' : selectedCategory ? `${selectedCategory} Articles` : 'Popular Articles'}
            </h2>
            <div className="space-y-4">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <a 
                    key={article.id} 
                    href={article.externalLink || `/support/article/${article.id}`}
                    target={article.externalLink ? "_blank" : "_self"}
                    rel={article.externalLink ? "noopener noreferrer" : ""}
                    onClick={() => {
                      if (article.externalLink) {
                        trackEvent('external_link_click', { link: article.externalLink, title: article.title });
                      } else {
                        trackEvent('article_view', { article_id: article.id, title: article.title });
                      }
                    }}
                    className="block p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-gray-800 group-hover:text-primary transition-colors block">{article.title}</span>
                        {searchQuery && <span className="text-xs text-gray-500 uppercase mt-1">{article.category}</span>}
                      </div>
                      {article.externalLink ? (
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </a>
                ))
              ) : (
                <div className="text-gray-500 italic">No articles found matching your search. Try asking the AI agent above!</div>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 border-2 border-black">
            <h2 className="font-display font-bold text-3xl uppercase mb-2 flex items-center gap-3">
              <Mail className="w-8 h-8 text-primary" /> Contact Us
            </h2>
            <p className="text-gray-600 mb-8">Can't find what you're looking for? Send us a message.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Name</label>
                  <Input required placeholder="Your name" className="bg-white border-black focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Email</label>
                  <Input required type="email" placeholder="your@email.com" className="bg-white border-black focus-visible:ring-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Subject</label>
                <Input required placeholder="How can we help?" className="bg-white border-black focus-visible:ring-primary" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Message</label>
                <Textarea required placeholder="Describe your issue in detail..." className="min-h-[150px] bg-white border-black focus-visible:ring-primary" />
              </div>

              <KineticButton 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-black text-white hover:bg-primary hover:text-black border-black"
              >
                {isSubmitting ? "Sending..." : "Submit Ticket"}
              </KineticButton>
            </form>
          </div>
        </div>
      </KineticSection>
    </Layout>
  );
}
