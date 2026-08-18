/**
 * HGG brand mark — v3, "Glazed Gable Line."
 *
 * One continuous bronze stroke does two jobs: it traces a gable roof
 * in section (an open line, not a filled silhouette), then keeps
 * going straight off the eave as a simple horizon line — the same
 * ascending-line motif the brand launched with. The gable itself is
 * glazed: filled with a pale glass-blue tint rather than solid color,
 * so it reads as an actual glazed gable end, not a pictogram.
 *
 * The mark carries no lettering. Identity comes from the wordmark
 * set underneath it (see LogoLockup).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 214 108"
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
          <stop offset="0.8" stopColor="#6E5230" />
          <stop offset="1" stopColor="#B8874C" />
        </linearGradient>
        <linearGradient id="hgg-glass" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#F1F8F9" />
          <stop offset="1" stopColor="#93C7CC" />
        </linearGradient>
      </defs>

      {/* glazed gable */}
      <path d="M6 100 L66 16 L126 100 Z" fill="url(#hgg-glass)" opacity="0.95" />

      {/* roof section line, continuing as the horizon line */}
      <path
        d="M6 100 L66 16 L126 100"
        stroke="url(#hgg-metal)"
        strokeWidth="9"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M126 100 L206 100" stroke="url(#hgg-metal)" strokeWidth="9" strokeLinecap="round" />

      {/* eave + ridge accents */}
      <circle cx="6" cy="100" r="5" fill="url(#hgg-metal)" />
      <circle cx="66" cy="16" r="4" fill="url(#hgg-metal)" />
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
