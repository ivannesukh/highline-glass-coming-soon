/**
 * HGG brand mark — v2.
 *
 * The mark IS the wordmark: H-G-G built as blocky, segmented "channel
 * letters" — the same construction as real dimensional storefront
 * signage — finished in a brushed-metal bronze gradient with a cast
 * shadow for depth and a diagonal glass-reflection sweep across the
 * face. A short bar beneath stands in for the signage raceway (and
 * doubles as the brand's original "highline" horizon motif).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 50"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="hgg-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6E5230" />
          <stop offset="0.24" stopColor="#B8874C" />
          <stop offset="0.46" stopColor="#EFD09A" />
          <stop offset="0.6" stopColor="#C89A5C" />
          <stop offset="0.8" stopColor="#7C5D38" />
          <stop offset="1" stopColor="#B8874C" />
        </linearGradient>
      </defs>

      {/* cast shadow (dimensional / channel-letter depth) */}
      <g fill="#12161B" opacity="0.18" transform="translate(1.6 2.2)">
        <rect x="0" y="0" width="7" height="40" />
        <rect x="19" y="0" width="7" height="40" />
        <rect x="7" y="16.5" width="12" height="7" />

        <rect x="32" y="0" width="26" height="7" />
        <rect x="32" y="0" width="7" height="40" />
        <rect x="32" y="33" width="26" height="7" />
        <rect x="45" y="16.5" width="13" height="7" />
        <rect x="51" y="16.5" width="7" height="16.5" />

        <rect x="64" y="0" width="26" height="7" />
        <rect x="64" y="0" width="7" height="40" />
        <rect x="64" y="33" width="26" height="7" />
        <rect x="77" y="16.5" width="13" height="7" />
        <rect x="83" y="16.5" width="7" height="16.5" />
      </g>

      {/* H */}
      <g fill="url(#hgg-metal)">
        <rect x="0" y="0" width="7" height="40" />
        <rect x="19" y="0" width="7" height="40" />
        <rect x="7" y="16.5" width="12" height="7" />

        {/* G */}
        <rect x="32" y="0" width="26" height="7" />
        <rect x="32" y="0" width="7" height="40" />
        <rect x="32" y="33" width="26" height="7" />
        <rect x="45" y="16.5" width="13" height="7" />
        <rect x="51" y="16.5" width="7" height="16.5" />

        {/* G */}
        <rect x="64" y="0" width="26" height="7" />
        <rect x="64" y="0" width="7" height="40" />
        <rect x="64" y="33" width="26" height="7" />
        <rect x="77" y="16.5" width="13" height="7" />
        <rect x="83" y="16.5" width="7" height="16.5" />
      </g>

      {/* glass-reflection sweep */}
      <g stroke="#FFF6E7" strokeWidth="1.1" strokeLinecap="round" opacity="0.45">
        <path d="M4 32 L22 4" />
        <path d="M36 30 L52 4" />
        <path d="M68 30 L84 4" />
      </g>

      {/* signage raceway / highline bar */}
      <rect x="21" y="46" width="48" height="2.6" rx="1.3" fill="url(#hgg-metal)" opacity="0.9" />
    </svg>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={`lockup ${className ?? ""}`}>
      <LogoMark className="lockup-mark" />
      <span className="lockup-full">Highline Glass Group</span>
    </div>
  );
}
