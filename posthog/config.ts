import posthog from 'posthog-js'

export const initPostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
      // Disable automatic pageview capture since we'll handle it manually
      capture_pageview: false,
      // Enable session recording for better insights
      session_recording: {
        recordCrossOriginIframes: true,
      },
      // Respect user privacy
      respect_dnt: true,
      // Only load in production
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug()
      }
    })
  }
}

export { posthog }