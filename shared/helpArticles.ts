export interface HelpArticle {
  id: string;
  category: "Getting Started" | "Billing & Licenses" | "Troubleshooting" | "External Resource";
  title: string;
  excerpt: string;
  content: string;
  externalLink?: string;
}

export const helpArticles: HelpArticle[] = [
  {
    id: "install-templates-chatgpt",
    category: "Getting Started",
    title: "How to install templates in ChatGPT",
    excerpt: "A step-by-step guide to importing TurboTask templates into your ChatGPT workspace.",
    content: `
      <p>Installing TurboTask templates into ChatGPT is a straightforward process that allows you to access powerful workflows instantly. Follow these steps to get started.</p>

      <h3>Prerequisites</h3>
      <ul>
        <li>An active ChatGPT account (Free or Plus)</li>
        <li>Your TurboTask template file (usually a .txt or .md file)</li>
      </ul>

      <h3>Step 1: Open Your Template File</h3>
      <p>Locate the template file you downloaded from TurboTask. Open it in any text editor (Notepad, TextEdit, etc.). You will see a block of text that serves as the "System Prompt."</p>

      <h3>Step 2: Copy the Prompt</h3>
      <p>Select the entire text within the file and copy it to your clipboard (Ctrl+C or Cmd+C).</p>

      <h3>Step 3: Create a New Chat</h3>
      <p>Log in to ChatGPT and start a new chat session. It is recommended to use GPT-4 for the best results, but GPT-3.5 works for most basic templates.</p>

      <h3>Step 4: Paste and Activate</h3>
      <p>Paste the copied text into the message box and hit Enter. The AI will acknowledge the instructions and confirm that it is ready to operate in the specific role defined by the template.</p>

      <h3>Pro Tip: Custom Instructions</h3>
      <p>For frequent use, you can add the template text to your "Custom Instructions" in ChatGPT settings. This ensures the AI always behaves according to the template without needing to paste it every time.</p>
    `
  },
  {
    id: "commercial-usage-rights",
    category: "Billing & Licenses",
    title: "Understanding commercial usage rights",
    excerpt: "What you can and cannot do with TurboTask assets in your commercial projects.",
    content: `
      <p>At TurboTask AI, we believe in empowering you to build your business. Our licensing is designed to be simple and generous.</p>

      <h3>What is Allowed</h3>
      <ul>
        <li><strong>Client Work:</strong> You can use our templates and toolkits to create deliverables for your clients.</li>
        <li><strong>Internal Business Use:</strong> You can use our assets to streamline your own company's operations.</li>
        <li><strong>Marketing Materials:</strong> You can use generated content in your social media, emails, and website copy.</li>
      </ul>

      <h3>What is NOT Allowed</h3>
      <ul>
        <li><strong>Resale:</strong> You cannot resell, redistribute, or sub-license the raw templates or toolkits themselves.</li>
        <li><strong>Competitor Products:</strong> You cannot use our assets to build a competing template library or productivity tool.</li>
      </ul>

      <h3>License Types</h3>
      <p><strong>Standard License:</strong> Covers usage for one individual or business entity.</p>
      <p><strong>Enterprise License:</strong> Required for organizations with more than 10 users accessing the assets. Contact support for pricing.</p>
    `
  },
  {
    id: "troubleshooting-api-errors",
    category: "Troubleshooting",
    title: "Troubleshooting API connection errors",
    excerpt: "Common solutions for when your integrations aren't connecting properly.",
    content: `
      <p>Encountering API errors can be frustrating. Here are the most common reasons for connection failures and how to fix them.</p>

      <h3>Error 401: Unauthorized</h3>
      <p>This usually means your API key is missing or incorrect.</p>
      <ul>
        <li>Check that you have copied the entire key string.</li>
        <li>Ensure there are no extra spaces at the beginning or end.</li>
        <li>Verify that your subscription for that specific API service is active.</li>
      </ul>

      <h3>Error 429: Too Many Requests</h3>
      <p>You have hit the rate limit for the API.</p>
      <ul>
        <li>Wait a few minutes before trying again.</li>
        <li>Check your usage limits in the provider's dashboard.</li>
        <li>If you are running a bulk operation, add a delay between requests.</li>
      </ul>

      <h3>Error 500: Internal Server Error</h3>
      <p>This is an issue on the provider's end (e.g., OpenAI or Anthropic).</p>
      <ul>
        <li>Check the status page of the service provider.</li>
        <li>Retry the request after a few minutes.</li>
      </ul>

      <p>If issues persist, please contact our support team with a screenshot of the error message.</p>
    `
  },
  {
    id: "upgrade-license-key",
    category: "Billing & Licenses",
    title: "How to upgrade your license key",
    excerpt: "Instructions for upgrading from a Standard to a Pro or Enterprise license.",
    content: `
      <p>As your team grows, you may need to upgrade your TurboTask license to unlock more seats or advanced features.</p>

      <h3>Step 1: Go to the Billing Portal</h3>
      <p>Log in to your TurboTask account and navigate to the "Settings" > "Billing" section.</p>

      <h3>Step 2: Select "Change Plan"</h3>
      <p>You will see your current plan highlighted. Click "Change Plan" or "Upgrade" next to the tier you wish to move to.</p>

      <h3>Step 3: Confirm Payment</h3>
      <p>Review the prorated amount due. We will only charge you the difference for the remainder of your billing cycle. Confirm the payment method on file.</p>

      <h3>Step 4: Receive New Key</h3>
      <p>Once the transaction is complete, your new license key will be emailed to you immediately. You can also find it in your dashboard.</p>

      <p><strong>Note:</strong> You do not need to reinstall any templates. Simply update the license key in your settings if you are using our software integrations.</p>
    `
  },
  {
    id: "export-workflows",
    category: "Getting Started",
    title: "Exporting workflows to other platforms",
    excerpt: "How to move your TurboTask workflows into Notion, Asana, or Monday.com.",
    content: `
      <p>TurboTask workflows are designed to be platform-agnostic. Here is how to move them into your project management tool of choice.</p>

      <h3>Export to Notion</h3>
      <p>Our "Notion Pack" templates come as .CSV files.</p>
      <ol>
        <li>Open Notion and create a new database page.</li>
        <li>Click the "..." menu in the top right corner.</li>
        <li>Select "Merge with CSV" and upload your TurboTask file.</li>
      </ol>

      <h3>Export to Asana</h3>
      <p>1. Create a new project in Asana.</p>
      <p>2. Click the drop-down arrow next to the project name.</p>
      <p>3. Select "Import" > "CSV" and choose your file.</p>
      <p>4. Map the columns (Task Name, Description, Due Date) to Asana's fields.</p>

      <h3>Manual Copy-Paste</h3>
      <p>For text-based prompts and SOPs, we recommend simply copying the content from our library and pasting it into a dedicated "AI Resources" document in your team's workspace.</p>
    `
  },
  {
    id: "chatgpt-resource",
    category: "External Resource",
    title: "ChatGPT",
    excerpt: "Access the official ChatGPT interface to run your TurboTask templates.",
    content: "",
    externalLink: "https://manus.im/app/Am1UrDyRZu4zIl9lJG8u9e?planKey=2"
  },
  {
    id: "what-are-ai-templates",
    category: "Getting Started",
    title: "What are AI Templates?",
    excerpt: "An introduction to AI templates and how they can accelerate your workflow.",
    content: `
      <p>AI Templates are pre-engineered prompts and structures designed to get the best possible output from AI models like ChatGPT, Claude, and Gemini.</p>

      <h3>Why use templates?</h3>
      <p>Most users struggle with "blank page syndrome" or write simple prompts that yield generic results. TurboTask templates are:</p>
      <ul>
        <li><strong>Context-Rich:</strong> They provide the AI with the necessary background information.</li>
        <li><strong>Role-Specific:</strong> They instruct the AI to act as an expert in a specific field (e.g., "Senior Copywriter" or "Data Analyst").</li>
        <li><strong>Format-Oriented:</strong> They ensure the output is delivered in a usable format, such as a table, code block, or structured report.</li>
      </ul>

      <h3>Types of Templates</h3>
      <p>We offer templates for various use cases:</p>
      <ul>
        <li><strong>Marketing:</strong> SEO blog posts, ad copy, email sequences.</li>
        <li><strong>Productivity:</strong> Meeting summaries, project plans, email replies.</li>
        <li><strong>Development:</strong> Code refactoring, bug fixing, documentation generation.</li>
      </ul>

      <p>Start exploring our library to find the templates that fit your needs.</p>
    `
  }
];

// Helper to get article summaries for AI context
export function getArticleSummariesForAI(): string {
  return helpArticles
    .filter(article => !article.externalLink)
    .map(article => `- "${article.title}" (${article.category}): ${article.excerpt}`)
    .join("\n");
}
