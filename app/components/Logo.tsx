/**
 * HGG brand mark.
 *
 * The icon is a single storefront "bay": two vertical mullions plus a
 * horizontal transom — the exact geometry of a real glazing bay — which
 * doubles as a bold, architectural "H" for Highline. Panes carry a soft
 * glass-reflection sweep so the mark reads as glazing, not just a letter.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect x="1" y="1" width="38" height="38" rx="4" fill="#12161B" stroke="#B8905B" strokeWidth="1.4" />
      <defs>
        <linearGradient id="hgg-pane" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EAF2F4" stopOpacity="0.16" />
          <stop offset="0.55" stopColor="#EAF2F4" stopOpacity="0.04" />
          <stop offset="1" stopColor="#5FA8AE" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      {/* four glazing panes */}
      <rect x="6" y="6" width="11.5" height="12.5" fill="url(#hgg-pane)" />
      <rect x="22.5" y="6" width="11.5" height="12.5" fill="url(#hgg-pane)" />
      <rect x="6" y="21.5" width="11.5" height="12.5" fill="url(#hgg-pane)" />
      <rect x="22.5" y="21.5" width="11.5" height="12.5" fill="url(#hgg-pane)" />
      {/* mullions + transom forming the H */}
      <rect x="10.5" y="5" width="2.6" height="30" fill="#B8905B" />
      <rect x="26.9" y="5" width="2.6" height="30" fill="#B8905B" />
      <rect x="10.5" y="18.7" width="18.9" height="2.6" fill="#B8905B" />
      {/* reflection sweep */}
      <path d="M6 15 L15 6 M22.5 30 L32 21" stroke="#D9B183" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={`lockup ${className ?? ""}`}>
      <LogoMark className="lockup-mark" />
      <div className="lockup-type">
        <span className="lockup-initials">HGG</span>
        <span className="lockup-full">Highline Glass Group</span>
      </div>
    </div>
  );
}
