import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  className?: string;
};

const CLIENT = "ca-pub-4103762102575107";
// Default slot: MarcoPhoto_homepage_responsive (override with VITE_ADSENSE_SLOT in .env).
const SLOT =
  (import.meta.env.VITE_ADSENSE_SLOT as string | undefined)?.trim() || "6310145713";

export function AdSenseBanner({ className }: Props) {
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    pushedRef.current = true;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // If AdSense is blocked, fail silently.
    }
  }, []);

  return (
    <div className={className}>
      <div className="mx-auto max-w-md">
        <ins
          className="adsbygoogle block"
          style={{ display: "block", minHeight: 90 }}
          data-ad-client={CLIENT}
          data-ad-slot={SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

