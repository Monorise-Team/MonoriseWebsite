/**
 * Znak Monorise: słońce wschodzące nad grzbietem w kształcie litery M.
 * Przeniesiony 1:1 z grafiki profilu organizacji (Monorise-Team/.github, profile/assets/header.svg).
 */
type BrandMarkProps = {
  /** Unikalny przedrostek identyfikatorów gradientów, gdy znak występuje na stronie kilka razy. */
  idPrefix: string;
  className?: string;
  /** Delikatny ruch słońca (wyłączany przy prefers-reduced-motion). */
  animated?: boolean;
  /** Tekst alternatywny; bez niego znak jest dekoracyjny. */
  title?: string;
};

export function BrandMark({ idPrefix, className, animated = false, title }: BrandMarkProps) {
  const mark = `${idPrefix}-mark`;
  const sun = `${idPrefix}-sun`;

  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient id={mark} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset=".55" stopColor="#c084fc" />
          <stop offset="1" stopColor="#fbbf24" />
        </linearGradient>
        <radialGradient id={sun} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#fde68a" />
          <stop offset=".6" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="126" height="126" rx="30" fill="#0c0e1d" stroke={`url(#${mark})`} strokeWidth="1.6" />
      <circle
        cx="64"
        cy="58"
        r="34"
        fill={`url(#${sun})`}
        opacity=".35"
        className={animated ? "mark-halo" : undefined}
      />
      <circle cx="64" cy="56" r="13" fill={`url(#${sun})`} className={animated ? "mark-sun" : undefined} />
      <rect x="18" y="74" width="92" height="40" fill="#0c0e1d" />
      <path
        d="M22 100V52l42 32 42-32v48"
        stroke={`url(#${mark})`}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 108h68" stroke="#2e3350" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
