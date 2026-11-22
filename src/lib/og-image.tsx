import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Znak Monorise jako statyczny SVG (ten sam kształt co w brand-mark.tsx). */
const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none"><defs><linearGradient id="m" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#6366f1"/><stop offset=".55" stop-color="#c084fc"/><stop offset="1" stop-color="#fbbf24"/></linearGradient><radialGradient id="s" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fde68a"/><stop offset=".6" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b" stop-opacity="0"/></radialGradient></defs><rect x="1" y="1" width="126" height="126" rx="30" fill="#0c0e1d" stroke="url(#m)" stroke-width="1.6"/><circle cx="64" cy="58" r="34" fill="url(#s)" opacity=".35"/><circle cx="64" cy="56" r="13" fill="url(#s)"/><rect x="18" y="74" width="92" height="40" fill="#0c0e1d"/><path d="M22 100V52l42 32 42-32v48" stroke="url(#m)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 108h68" stroke="#2e3350" stroke-width="3" stroke-linecap="round"/></svg>`;

const markDataUri = `data:image/svg+xml;base64,${Buffer.from(markSvg).toString("base64")}`;

/** Obraz do udostępniania linku. Teksty bez polskich znaków, bo domyślna czcionka obrazu ich nie ma. */
export function renderOgImage(eyebrow: string, tagline: string) {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 88px",
        backgroundColor: "#07080f",
        backgroundImage:
          "radial-gradient(circle at 15% 25%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 85% 20%, rgba(192,38,211,0.25), transparent 45%), radial-gradient(circle at 50% 110%, rgba(245,158,11,0.28), transparent 50%)",
        color: "#f1f5f9",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- obraz generowany przez next/og */}
      <img src={markDataUri} width={136} height={136} alt="" />
      <div style={{ display: "flex", marginTop: 44, fontSize: 26, letterSpacing: 7, color: "#c4b5fd" }}>
        {eyebrow.toUpperCase()}
      </div>
      <div style={{ display: "flex", marginTop: 14, fontSize: 104, fontWeight: 800, letterSpacing: -3 }}>Monorise</div>
      <div
        style={{
          display: "flex",
          marginTop: 18,
          width: 220,
          height: 6,
          borderRadius: 3,
          backgroundImage: "linear-gradient(90deg, #6366f1, #c084fc 55%, #fbbf24)",
        }}
      />
      <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "#cbd5e1" }}>{tagline}</div>
    </div>,
    ogSize,
  );
}
