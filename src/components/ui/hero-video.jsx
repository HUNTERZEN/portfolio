import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export function HeroVideo({ src, fallbackSrc, className }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported() && src) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(src);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.error("Auto-play failed:", e));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.error("Auto-play failed:", e));
      });
    } else if (fallbackSrc) {
      // Fallback
      video.src = fallbackSrc;
      video.play().catch(e => console.error("Auto-play failed:", e));
    }
  }, [src, fallbackSrc]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      crossOrigin="anonymous"
    />
  );
}
