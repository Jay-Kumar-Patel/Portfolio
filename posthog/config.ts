import posthog from "posthog-js";

export const initPostHog = () => {
  if (typeof window !== "undefined") {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
      capture_pageview: false,
      session_recording: {
        recordCrossOriginIframes: true,
      },
      respect_dnt: true,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });
  }
};

export { posthog };
