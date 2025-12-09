import { Layout } from "@/components/Layout";
import { KineticButton, KineticCard, KineticGrid, KineticSection } from "@/components/ui/kinetic-card";
import { ArrowRight, BookOpen, FileText, Search, Zap, Filter, ArrowUpDown } from "lucide-react";
import { useState, useMemo } from "react";
import { articles } from "@/data/articles";

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    let result = [...articles];

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter(article => article.category === activeCategory || (activeCategory === 'Guides' && article.category === 'Guide') || (activeCategory === 'Case Studies' && article.category === 'Case Study'));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [activeCategory, sortOrder, searchQuery]);

  const categories = ['All', 'Guides', 'Strategy', 'Case Studies', 'Tools', 'Productivity'];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gray-50 border-b-2 border-black py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-primary text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-6">
            Knowledge Base
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter mb-6">
            Resources & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Free guides, tutorials, and articles to help you master AI productivity and streamline your business operations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="SEARCH TOPICS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-lg font-mono border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-none transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <KineticSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="border-2 border-black p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img src="/images/hero-banner-clean.png" alt="Featured Guide" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm font-mono font-bold uppercase text-primary">
              <Zap className="w-4 h-4" /> Featured Guide
            </div>
            <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
              The 2025 AI Productivity Report
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We surveyed over 500 professionals to understand how AI is reshaping the modern workplace. Discover the key trends, tools, and strategies that are driving 10x productivity gains this year.
            </p>
            <KineticButton variant="primary" className="mt-4">
              Read The Report <ArrowRight className="ml-2 w-4 h-4" />
            </KineticButton>
          </div>
        </div>
      </KineticSection>

      {/* Articles Grid */}
      <KineticSection className="bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tighter">
            Latest <span className="text-primary">Articles</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-bold uppercase border-2 border-black transition-all ${
                    activeCategory === category 
                      ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(255,122,0,1)] translate-x-[-2px] translate-y-[-2px]' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
                className="px-4 py-2 text-sm font-bold uppercase border-2 border-black bg-white hover:bg-gray-100 flex items-center gap-2 min-w-[140px] justify-between"
              >
                <span>{sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
                <ArrowUpDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <KineticGrid>
            {filteredArticles.map((article) => (
              <KineticCard 
                key={article.id} 
                className="group flex flex-col h-full hover:border-primary transition-colors cursor-pointer"
                onClick={() => window.location.href = `/resources/${article.id}`}
              >
                <div className="mb-6 overflow-hidden border-2 border-black h-48 bg-white relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-white border-2 border-black text-black text-xs font-mono px-2 py-1 font-bold uppercase">
                    {article.category}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-3 uppercase">
                    <FileText className="w-3 h-3" /> {article.readTime} • {article.date}
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t-2 border-gray-100">
                  <span className="text-sm font-bold uppercase flex items-center gap-2 group-hover:text-primary transition-colors">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </KineticCard>
            ))}
          </KineticGrid>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-500 uppercase">No articles found</h3>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-6 text-primary font-bold uppercase hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <KineticButton variant="outline" className="px-8">
            Load More Articles
          </KineticButton>
        </div>
      </KineticSection>

      {/* Newsletter CTA */}
      <section className="py-24 bg-black text-white border-t-2 border-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter mb-6">
            Get Smarter Every Week
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join 10,000+ professionals receiving our weekly "TurboTask Tips" newsletter. No fluff, just actionable AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="px-6 py-4 text-lg font-mono text-black border-2 border-white focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-80"
            />
            <KineticButton variant="primary" className="text-lg px-8 py-4 border-white">
              Subscribe Free
            </KineticButton>
          </div>
          <p className="mt-4 text-xs text-gray-500 font-mono uppercase">
            Unsubscribe at any time. No spam, ever.
          </p>
        </div>
      </section>
    </Layout>
  );
}
