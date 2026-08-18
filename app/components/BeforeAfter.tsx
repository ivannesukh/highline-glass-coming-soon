/**
 * Illustrative before/after concept renderings.
 *
 * These are stylized vector illustrations built to communicate the shape
 * of a Highline transformation — not photographs of a real project. Swap
 * in real project photography as jobs are completed.
 */

export function ResidentialBeforeAfter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 380" className={className} role="img" aria-label="Illustrated before and after of a residential window replacement">
      <defs>
        <linearGradient id="ra-after-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EAF2F4" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#5FA8AE" stopOpacity="0.22" />
          <stop offset="1" stopColor="#12161B" stopOpacity="0.35" />
        </linearGradient>
        <pattern id="ra-hatch" width="6" height="6" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#0f1216" strokeWidth="1.4" />
        </pattern>
      </defs>

      {/* ---------- BEFORE (left) ---------- */}
      <g>
        <rect x="0" y="0" width="320" height="380" fill="#2b2723" />
        {/* worn siding lines */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1="0" y1={40 + i * 36} x2="320" y2={40 + i * 36} stroke="#231f1c" strokeWidth="2" />
        ))}
        {/* old window frame, slightly warped */}
        <path d="M88 96 L236 92 L240 292 L84 298 Z" fill="#171b1f" stroke="#8a7350" strokeWidth="5" />
        <path d="M88 96 L236 92 L240 292 L84 298 Z" fill="url(#ra-hatch)" opacity="0.5" />
        <line x1="162" y1="94" x2="162" y2="295" stroke="#8a7350" strokeWidth="3" opacity="0.8" />
        <line x1="86" y1="194" x2="238" y2="192" stroke="#8a7350" strokeWidth="3" opacity="0.8" />
        {/* haze / fog on glass */}
        <ellipse cx="140" cy="150" rx="34" ry="20" fill="#d9d3c4" opacity="0.10" />
        <ellipse cx="195" cy="230" rx="30" ry="26" fill="#d9d3c4" opacity="0.08" />
        {/* peeling paint chips */}
        <path d="M84 150 l-4 3 3 4 -5 2" fill="none" stroke="#a68b5f" strokeWidth="1.4" opacity="0.7" />
        <path d="M238 220 l5 2 -3 5 5 1" fill="none" stroke="#a68b5f" strokeWidth="1.4" opacity="0.7" />
        <rect x="18" y="336" width="118" height="26" rx="3" fill="#171b1f" stroke="#3a3530" />
        <text x="77" y="353" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#c9b28c">BEFORE</text>
      </g>

      {/* ---------- AFTER (right) ---------- */}
      <g>
        <rect x="320" y="0" width="320" height="380" fill="#181d23" />
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1="320" y1={40 + i * 36} x2="640" y2={40 + i * 36} stroke="#1f252c" strokeWidth="2" />
        ))}
        {/* new window: crisp bronze frame, single clean pane */}
        <rect x="404" y="86" width="152" height="210" rx="2" fill="#0d1014" stroke="#C89D68" strokeWidth="5" />
        <rect x="410" y="92" width="140" height="198" fill="url(#ra-after-glass)" />
        <line x1="410" y1="92" x2="550" y2="290" stroke="#EAF2F4" strokeWidth="1" opacity="0.35" />
        <line x1="480" y1="86" x2="480" y2="296" stroke="#C89D68" strokeWidth="1.5" opacity="0.35" />
        <rect x="398" y="298" width="164" height="6" rx="2" fill="#C89D68" />
        <rect x="486" y="336" width="94" height="26" rx="3" fill="#0d1014" stroke="#C89D68" />
        <text x="533" y="353" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#F0D5AC">AFTER</text>
      </g>

      {/* divider + transform mark */}
      <line x1="320" y1="0" x2="320" y2="380" stroke="#C89D68" strokeWidth="2" />
      <circle cx="320" cy="190" r="20" fill="#12161B" stroke="#C89D68" strokeWidth="2" />
      <path d="M312 190h16M322 184l6 6-6 6" stroke="#F0D5AC" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StorefrontBeforeAfter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 380" className={className} role="img" aria-label="Illustrated before and after of a storefront glazing upgrade">
      <defs>
        <linearGradient id="sa-after-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#EAF2F4" stopOpacity="0.45" />
          <stop offset="0.5" stopColor="#5FA8AE" stopOpacity="0.2" />
          <stop offset="1" stopColor="#12161B" stopOpacity="0.4" />
        </linearGradient>
        <pattern id="sa-brick" width="18" height="9" patternUnits="userSpaceOnUse">
          <rect width="18" height="9" fill="#2c241d" />
          <rect width="17" height="8" x="0.5" y="0.5" fill="none" stroke="#241d17" strokeWidth="0.6" />
        </pattern>
      </defs>

      {/* ---------- BEFORE ---------- */}
      <g>
        <rect x="0" y="0" width="320" height="380" fill="#211c17" />
        <rect x="0" y="40" width="320" height="270" fill="url(#sa-brick)" />
        {/* dated awning */}
        <path d="M20 92 L300 92 L286 128 L34 128 Z" fill="#5b3a2c" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={34 + i * 34} y1="128" x2={20 + i * 35} y2="92" stroke="#3c2519" strokeWidth="2" />
        ))}
        {/* small punched windows */}
        <rect x="44" y="150" width="60" height="70" fill="#14181c" stroke="#5b4c39" strokeWidth="4" />
        <line x1="74" y1="150" x2="74" y2="220" stroke="#5b4c39" strokeWidth="2" />
        <rect x="130" y="150" width="60" height="70" fill="#14181c" stroke="#5b4c39" strokeWidth="4" />
        <line x1="160" y1="150" x2="160" y2="220" stroke="#5b4c39" strokeWidth="2" />
        {/* narrow door */}
        <rect x="216" y="150" width="46" height="140" fill="#14181c" stroke="#5b4c39" strokeWidth="4" />
        <circle cx="252" cy="222" r="2" fill="#8a7350" />
        <rect x="0" y="310" width="320" height="70" fill="#171310" />
        <rect x="18" y="336" width="118" height="26" rx="3" fill="#171b1f" stroke="#3a3530" />
        <text x="77" y="353" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#c9b28c">BEFORE</text>
      </g>

      {/* ---------- AFTER ---------- */}
      <g>
        <rect x="320" y="0" width="320" height="380" fill="#12161B" />
        <rect x="320" y="34" width="320" height="12" fill="#0d1014" />
        {/* full-height storefront glazing system */}
        <rect x="340" y="52" width="280" height="238" fill="#0d1014" stroke="#C89D68" strokeWidth="5" />
        <rect x="346" y="58" width="268" height="226" fill="url(#sa-after-glass)" />
        <line x1="404" y1="52" x2="404" y2="290" stroke="#C89D68" strokeWidth="3" />
        <line x1="466" y1="52" x2="466" y2="290" stroke="#C89D68" strokeWidth="3" />
        <line x1="528" y1="52" x2="528" y2="290" stroke="#C89D68" strokeWidth="3" />
        <rect x="404" y="52" width="62" height="238" fill="none" stroke="#F0D5AC" strokeWidth="1" opacity="0.4" />
        <line x1="346" y1="58" x2="612" y2="200" stroke="#EAF2F4" strokeWidth="1" opacity="0.3" />
        {/* slim signage band */}
        <rect x="340" y="20" width="280" height="16" rx="2" fill="#0d1014" stroke="#C89D68" strokeWidth="1.5" />
        <text x="480" y="32" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="10" fontWeight="700" letterSpacing="3" fill="#F0D5AC">HGG</text>
        <rect x="486" y="336" width="94" height="26" rx="3" fill="#0d1014" stroke="#C89D68" />
        <text x="533" y="353" textAnchor="middle" fontFamily="Archivo, sans-serif" fontSize="12" fontWeight="700" letterSpacing="2" fill="#F0D5AC">AFTER</text>
      </g>

      <line x1="320" y1="0" x2="320" y2="380" stroke="#C89D68" strokeWidth="2" />
      <circle cx="320" cy="190" r="20" fill="#12161B" stroke="#C89D68" strokeWidth="2" />
      <path d="M312 190h16M322 184l6 6-6 6" stroke="#F0D5AC" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
