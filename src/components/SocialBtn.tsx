import { useCallback } from "react";
import { useMatomo } from "../services/matomo.service";
import "./SocialBtn.scss";

interface SocialBtn {
  socialNetworkName: string;
  url: string;
  icon: string;
}

export function SocialBtn({ socialNetworkName, url, icon }: SocialBtn) {
  const onClick = useTrackOnClick(socialNetworkName);
  return (
    <a href={url} className="social-link" onClick={onClick}>
      <img src={icon} alt={socialNetworkName} />
    </a>
  );
}

function useTrackOnClick(socialNetworkName: string) {
  const { trackEvent } = useMatomo();
  return useCallback(() => {
    trackEvent("Social link", "click", socialNetworkName);
  }, []);
}
