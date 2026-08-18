/**
 * HGG brand mark — v4, "Nested Aperture."
 *
 * Four concentric corner brackets in a gold gradient, receding like
 * looking down a deep window reveal, cut by a single diagonal and
 * grounded by a faint horizon line underneath — the same horizon
 * motif the brand launched with, carried into this direction too.
 * Paired with a serif wordmark set in the surrounding gold/navy
 * system rather than the sans-serif system used previously.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 150"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="hgg-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F0D5AC" />
          <stop offset="0.45" stopColor="#C89D68" />
          <stop offset="1" stopColor="#9F7243" />
        </linearGradient>
        <filter id="hgg-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="url(#hgg-gold)" strokeLinecap="square">
        <path d="M5 145V5H145" strokeWidth="7.5" filter="url(#hgg-glow)" />
        <path d="M27 145V27H145" strokeWidth="2.6" opacity="0.95" />
        <path d="M49 145V49H145" strokeWidth="2.6" opacity="0.72" />
        <path d="M71 145V71H145" strokeWidth="2.6" opacity="0.48" />
        <path d="M5 145L145 5" strokeWidth="3.4" />
        <path d="M5 145H145" strokeWidth="1.4" opacity="0.45" />
      </g>
    </svg>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={`lockup ${className ?? ""}`}>
      <LogoMark className="lockup-mark" />
      <span className="lockup-type">
        <span className="lockup-line1">Highline</span>
        <span className="lockup-line2">Glass Group</span>
      </span>
    </div>
  );
}
