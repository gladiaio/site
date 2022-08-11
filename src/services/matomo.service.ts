import { useCallback, useEffect } from "react";

type PushArgs =
  // ["trackEvent", category, action, name, value]
  | ["trackEvent", string, string | undefined, string | undefined, any]
  // ["setCustomUrl", url]
  | ["setCustomUrl", string]
  // ["setDocumentTitle", category, action, name, value]
  | ["setDocumentTitle", string]
  // ["trackPageView"]
  | ["trackPageView"];

declare global {
  interface Window {
    _paq: {
      push(arg: PushArgs): void;
    };
  }
}

export const Matomo = {
  trackEvent(
    category: string,
    action: string | undefined,
    name: string | undefined,
    value: any
  ) {
    window._paq.push(["trackEvent", category, action, name, value]);
  },
  setNewPage(url: string, documentTitle: string) {
    window._paq.push(["setCustomUrl", url]);
    window._paq.push(["setDocumentTitle", documentTitle]);
    window._paq.push(["trackPageView"]);
  },
};

export function useMatomo() {
  const setNewPage = (url: string, documentTitle: string) => {
    useEffect(() => {
      Matomo.setNewPage(url, documentTitle);
    });
  };
  const trackEvent = useCallback(
    (
      category: string,
      action?: string | undefined,
      name?: string | undefined,
      value?: any
    ) => {
      Matomo.trackEvent(category, action, name, value);
    },
    []
  );
  return {
    setNewPage,
    trackEvent,
  } as const;
}
