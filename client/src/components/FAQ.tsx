import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is AI productivity and how can it help me?",
      answer: "AI productivity refers to using artificial intelligence tools to automate tasks, streamline workflows, and reduce time spent on repetitive work. AI can help with email writing, scheduling, research, content creation, data organization, planning, and much more."
    },
    {
      question: "I’m not tech savvy. Can I still use AI tools effectively?",
      answer: "Yes. Modern AI tools are designed to be simple and user friendly. TurboTask AI templates give you ready to use prompts, workflows, and instructions so you can get immediate results without needing any technical background."
    },
    {
      question: "How can AI save me time in my daily work?",
      answer: "AI can save hours each week by helping you write emails and messages, draft reports or summaries, generate ideas and content, organize and prioritize tasks, take meeting notes, plan your week, and automate recurring tasks. AI’s biggest benefit is reducing mental load while increasing output."
    },
    {
      question: "Will using AI make my work less personal?",
      answer: "No. AI assists with structure and efficiency, but you still guide the tone and intent. Our templates ensure your communication remains personal, professional, and true to your style."
    },
    {
      question: "Are AI templates customizable?",
      answer: "Absolutely. You can customize every template to match your workflow, voice, goals, and industry. Think of them as productivity boosters you can tailor to your work style."
    },
    {
      question: "Will AI replace my job?",
      answer: "AI is not replacing people; it is replacing tasks. Professionals who learn to use AI tools will work faster, make better decisions, and become more valuable in their organizations."
    },
    {
      question: "How do AI powered templates work?",
      answer: "TurboTask AI templates include step by step instructions, ready to use prompts, workflow guides, communication templates, and automation ideas. You simply follow the prompts, plug in your information, and let AI generate the results."
    },
    {
      question: "Can AI help me improve my communication skills?",
      answer: "Yes. AI can help you write clear, confident messages, emails, proposals, and summaries. Our communication toolkits include tested prompts and templates designed to elevate your professional writing."
    },
    {
      question: "Which tasks should I automate first?",
      answer: "Start with tasks that repeat daily or weekly, take too much time, or require a lot of mental energy. Examples include formatting emails, writing follow ups, organizing notes, drafting summaries, and content planning."
    },
    {
      question: "Will AI make me more efficient or just add more steps?",
      answer: "AI reduces steps. It eliminates unnecessary work and gives you shortcuts for writing, planning, research, and communication. Most users begin saving time within the first 24 hours."
    },
    {
      question: "How often should I use AI in my workflow?",
      answer: "You can use AI as much or as little as needed. Most professionals benefit from using AI daily for quick tasks, brainstorming, writing, and task organization."
    },
    {
      question: "Is my information safe when using AI tools?",
      answer: "Always avoid sharing confidential or sensitive information in any AI tool. TurboTask AI templates focus on workflows, not storing or processing personal data. Your usage stays completely within your control."
    },
    {
      question: "Can AI help me with work life balance?",
      answer: "Yes. By reducing unnecessary tasks, AI gives you more time to focus on what matters. It lowers stress by organizing your workload and helping you prioritize effectively."
    },
    {
      question: "What industries benefit most from AI productivity tools?",
      answer: "AI supports every industry, including higher education, real estate, HR, nonprofits, small businesses, corporate teams, and consultants and coaches. TurboTask AI offers both general and industry specific systems."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-2 border-black px-4 data-[state=open]:bg-gray-50">
          <AccordionTrigger className="font-display font-bold text-lg uppercase hover:no-underline hover:text-primary text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
