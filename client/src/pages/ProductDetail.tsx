import { Layout } from "@/components/Layout";
import { KineticButton, KineticCard, KineticGrid, KineticSection } from "@/components/ui/kinetic-card";
import { PRODUCTS } from "../../../shared/products";
import { ArrowLeft, Check, Download, Star, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";
import { toast } from "sonner";

// Mock data for products - in a real app this would come from an API or database
const products = {
  "templates": {
    title: "AI Productivity Templates",
    subtitle: "Daily planners, task organizers, and content generators.",
    price: "$19 - $47",
    description: "Stop starting from scratch. Our AI Productivity Templates are pre-engineered prompts and structures designed to eliminate the 'blank page' problem. Whether you need to draft a week's worth of emails, plan your daily tasks, or generate social media content, these templates provide the perfect starting point.",
    features: [
      "Instant Digital Download",
      "Compatible with ChatGPT, Claude, and Gemini",
      "Fully Customizable",
      "Lifetime Updates"
    ],
    image: "/images/feature-templates-clean.png",
    items: PRODUCTS.templates.items
  },
  "toolkits": {
    title: "Professional AI Toolkits",
    subtitle: "Complete communication and workflow systems.",
    price: "$47 - $97",
    description: "Level up your professional game. These toolkits are comprehensive systems that combine multiple templates, standard operating procedures (SOPs), and advanced prompt engineering to solve complex business problems. Ideal for managers, consultants, and specialized roles.",
    features: [
      "Industry-Specific Frameworks",
      "Video Walkthroughs Included",
      "Advanced Prompt Chains",
      "Team License Available"
    ],
    image: "/images/feature-toolkits-clean.png",
    items: PRODUCTS.toolkits.items
  },
  "bundles": {
    title: "Workflow Bundles",
    subtitle: "End-to-end AI operating systems for your business.",
    price: "$97 - $297",
    description: "The ultimate productivity upgrade. Workflow Bundles combine our best templates and toolkits into a cohesive operating system for your entire business function. Transform how your department or small business operates with a fully integrated AI strategy.",
    features: [
      "All-Access Pass to Category",
      "1-on-1 Implementation Call",
      "Priority Support",
      "Quarterly Strategy Workshops"
    ],
    image: "/images/feature-bundles-clean.png",
    items: PRODUCTS.bundles.items
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:category");
  const category = params?.category as keyof typeof products;
  const product = products[category];

  const handleCheckout = async (priceId: string) => {
    try {
      toast.loading("Redirecting to checkout...");
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An error occurred during checkout");
    }
  };

  if (!match || !product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="font-display font-bold text-4xl mb-4">Product Not Found</h1>
          <Link href="/#products">
            <KineticButton variant="outline">Back to Products</KineticButton>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb / Back */}
      <div className="bg-gray-50 border-b-2 border-black py-4">
        <div className="container mx-auto px-4">
          <Link href="/#products">
            <button className="flex items-center gap-2 font-mono text-sm font-bold uppercase hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to All Products
            </button>
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <section className="bg-white border-b-2 border-black">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Side */}
            <div className="relative">
              <div className="border-2 border-black p-8 bg-gray-50 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-[400px]" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white font-mono font-bold text-xl px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {product.price}
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                  {category}
                </div>
                <h1 className="font-display font-extrabold text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
                  {product.title}
                </h1>
                <p className="text-xl font-medium text-gray-500">
                  {product.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-black font-mono text-sm font-bold ml-2">(4.9/5.0 from 500+ users)</span>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-mono text-sm font-bold text-gray-700">
                    <div className="w-6 h-6 bg-primary/10 flex items-center justify-center rounded-full">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t-2 border-gray-100">
                <KineticButton 
                  variant="primary" 
                  className="w-full md:w-auto text-lg px-8 py-4"
                  onClick={() => {
                    // For full access, we might want to direct to a specific bundle or the first item
                    // For now, let's just scroll to the items list
                    document.getElementById('product-items')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Options <Zap className="ml-2 w-5 h-5" />
                </KineticButton>
                <p className="text-center md:text-left mt-3 text-xs text-gray-400 font-mono uppercase">
                  30-Day Money Back Guarantee • Secure Checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included Items */}
      <KineticSection className="bg-gray-50" id="product-items">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tighter mb-4">
            What's <span className="text-primary">Included</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Purchase the complete collection or select individual items below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {product.items.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-black p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center border-2 border-black">
                  <span className="font-mono font-bold text-gray-400">0{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-xl uppercase">{item.name}</h3>
              </div>
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <span className="font-mono font-bold text-lg">${(item.price / 100).toFixed(0)}</span>
                <KineticButton 
                  variant="outline" 
                  className="py-2 px-4 text-xs"
                  onClick={() => handleCheckout(item.priceId)}
                >
                  Buy Individual <Download className="ml-2 w-3 h-3" />
                </KineticButton>
              </div>
            </div>
          ))}
        </div>
      </KineticSection>
    </Layout>
  );
}
