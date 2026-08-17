import ComingSoonForm from "./ComingSoonForm";

export default function Home() {
  return (
    <main className="page">
      <div className="grid-bg" aria-hidden="true" />
      <div className="highline" aria-hidden="true">
        <svg preserveAspectRatio="none" viewBox="0 0 1000 2">
          <line
            className="highline-path"
            x1="0"
            y1="1"
            x2="1000"
            y2="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="wrap">
        <header className="top-row">
          <div className="mark">
            <svg
              className="mark-glyph"
              viewBox="0 0 26 26"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 20 L11 8 L15 13 L24 4"
                stroke="#B8905B"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <line x1="2" y1="23" x2="24" y2="23" stroke="#EAF2F4" strokeWidth="1.5" />
            </svg>
            Highline Glass Group
          </div>
          <span className="badge">Coming Soon</span>
        </header>

        <section className="hero">
          <p className="eyebrow">
            Architectural Glass <span>&amp;</span> Glazing
          </p>
          <h1>Setting the line in architectural glass.</h1>
          <div className="divider" aria-hidden="true" />
          <p className="lede">
            Storefronts, curtain walls, railings, and custom glazing — Highline
            Glass Group is a new glass company built for clean lines and clear
            results. We&rsquo;re finishing the details behind the scenes.
            Leave your email and we&rsquo;ll let you know the moment we&rsquo;re live.
          </p>
          <ComingSoonForm />
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} Highline Glass Group. All rights reserved.</span>
          <a href="https://highlineglassgroup.com">highlineglassgroup.com</a>
        </footer>
      </div>
    </main>
  );
}
