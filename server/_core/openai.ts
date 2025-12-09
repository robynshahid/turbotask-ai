import OpenAI from 'openai';

// Initialize OpenAI client lazily to avoid crashes during build
let openai: OpenAI | null = null;

function getOpenAIClient() {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

export interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface LLMOptions {
  messages: Message[];
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export async function invokeLLM(options: LLMOptions) {
  const {
    messages,
    model = 'gpt-3.5-turbo', // Default to GPT-3.5 for cost-effectiveness
    temperature = 0.7,
    maxTokens = 500,
  } = options;

  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not configured');
  }

  try {
    const client = getOpenAIClient();
    const response = await client.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    });

    return response;
  } catch (error: any) {
    console.error('[OpenAI Error]', error);
    throw new Error(`OpenAI API error: ${error.message}`);
  }
}
