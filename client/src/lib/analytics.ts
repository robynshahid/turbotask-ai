/**
 * Simple analytics utility to track user interactions.
 * In a production environment, this would send data to a backend service like Google Analytics, Mixpanel, or PostHog.
 */

type EventName = 'search_query' | 'article_view' | 'external_link_click' | 'support_ticket_submit' | 'ai_agent_response' | 'ai_agent_error';

interface EventProperties {
  [key: string]: any;
}

export const trackEvent = (eventName: EventName, properties?: EventProperties) => {
  // Get current timestamp
  const timestamp = new Date().toISOString();
  
  // Create event object
  const eventData = {
    event: eventName,
    timestamp,
    url: window.location.pathname,
    ...properties
  };

  // Log to console for development visibility
  console.groupCollapsed(`📊 Analytics: ${eventName}`);
  console.log(eventData);
  console.groupEnd();

  // TODO: Replace with actual analytics provider call
  // Example: window.gtag('event', eventName, properties);
  // Example: mixpanel.track(eventName, properties);
};
