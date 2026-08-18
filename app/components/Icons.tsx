type IconProps = { className?: string };

const shared = {
  viewBox: "0 0 32 32",
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Residential window — new construction & replacement */
export function WindowIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="5" y="4" width="22" height="24" rx="1" stroke="currentColor" />
      <path d="M16 4v24M5 16h22" stroke="currentColor" />
      <path d="M5 28h22" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 9 12 9" stroke="currentColor" opacity="0.5" />
    </svg>
  );
}

/** Shower enclosure & glass bath */
export function ShowerIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M9 4h14" stroke="currentColor" />
      <path d="M11 4v3M21 4v3" stroke="currentColor" />
      <rect x="6" y="9" width="20" height="19" rx="1" stroke="currentColor" />
      <path d="M17 9v19" stroke="currentColor" />
      <path
        d="M11 14c1 1 1 2 0 3s-1 2 0 3s1 2 0 3"
        stroke="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

/** Commercial glass paneling / curtain wall */
export function PanelingIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="4" y="3" width="24" height="26" rx="1" stroke="currentColor" />
      <path
        d="M11 3v26M21 3v26M4 11h24M4 20h24"
        stroke="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

/** Glass partitions & room separations */
export function PartitionIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M4 27V9l8-4v22" stroke="currentColor" />
      <path d="M12 27V5l8 4v18" stroke="currentColor" />
      <path d="M20 27V9l8-4v22" stroke="currentColor" />
      <path d="M4 27h24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/** Storefront systems & entry glazing */
export function StorefrontIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M3 12 5 4h22l2 8" stroke="currentColor" />
      <path d="M3 12v16h26V12" stroke="currentColor" />
      <rect x="6" y="15" width="7" height="9" stroke="currentColor" opacity="0.7" />
      <rect x="19" y="15" width="7" height="9" stroke="currentColor" opacity="0.7" />
      <rect x="14" y="15" width="4" height="13" stroke="currentColor" />
    </svg>
  );
}

/** Simple check for value-prop lists */
export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true" fill="none">
      <path
        d="M4 10.5 8 14.5 16 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
