import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

/**
 * Attaches an HLS (.m3u8) stream to a <video> element, using hls.js where
 * needed and falling back to native HLS support (e.g. Safari) otherwise.
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
    };
  }, [src]);

  return videoRef;
}
