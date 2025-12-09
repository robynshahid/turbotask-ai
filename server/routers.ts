import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { z } from "zod";
import { getArticleSummariesForAI, helpArticles } from "@shared/helpArticles";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  support: router({
    askAgent: publicProcedure
      .input(z.object({ question: z.string().min(1).max(1000) }))
      .mutation(async ({ input }) => {
        const { question } = input;

        // Build context from help articles
        const articleSummaries = getArticleSummariesForAI();
        
        // Find relevant articles based on keyword matching
        const relevantArticles = helpArticles
          .filter(article => !article.externalLink)
          .filter(article => {
            const searchText = `${article.title} ${article.excerpt} ${article.content}`.toLowerCase();
            const queryWords = question.toLowerCase().split(/\s+/);
            return queryWords.some(word => word.length > 2 && searchText.includes(word));
          })
          .slice(0, 3);

        const relevantContext = relevantArticles.length > 0
          ? `\n\nRelevant articles from our knowledge base:\n${relevantArticles.map(a => 
              `### ${a.title}\n${a.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 500)}...`
            ).join('\n\n')}`
          : '';

        const systemPrompt = `You are a helpful support agent for TurboTask AI, a company that sells AI productivity templates, toolkits, and workflow bundles.

Your role is to:
1. Answer customer questions about TurboTask products and services
2. Help troubleshoot issues with templates and integrations
3. Explain licensing, billing, and usage rights
4. Guide users on how to get started with AI templates

Available help articles in our knowledge base:
${articleSummaries}
${relevantContext}

Guidelines:
- Be friendly, professional, and concise
- If the question is about a specific article topic, reference the relevant information
- If you don't know the answer, suggest contacting support at support@turbotaskai.com
- Keep responses under 300 words
- Use markdown formatting for better readability
- Do not make up information about pricing or features that isn't in the context`;

        try {
          const response = await invokeLLM({
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: question }
            ]
          });

          const answer = response.choices[0]?.message?.content;
          
          if (!answer || typeof answer !== 'string') {
            return {
              success: false,
              answer: "I apologize, but I couldn't generate a response. Please try again or contact support@turbotaskai.com for assistance.",
              relatedArticles: []
            };
          }

          return {
            success: true,
            answer,
            relatedArticles: relevantArticles.map(a => ({
              id: a.id,
              title: a.title,
              excerpt: a.excerpt
            }))
          };
        } catch (error) {
          console.error("[Support Agent Error]", error);
          return {
            success: false,
            answer: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment or contact support@turbotaskai.com for immediate assistance.",
            relatedArticles: []
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
