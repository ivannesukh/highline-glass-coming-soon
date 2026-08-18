import EstimateForm from "./components/EstimateForm";
import { LogoLockup, LogoMark } from "./components/Logo";
import {
  CheckIcon,
  PanelingIcon,
  PartitionIcon,
  ShowerIcon,
  StorefrontIcon,
  WindowIcon,
} from "./components/Icons";
import { ResidentialBeforeAfter, StorefrontBeforeAfter } from "./components/BeforeAfter";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#before-after", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#why-hgg", label: "Why HGG" },
  { href: "#contact", label: "Get an Estimate" },
];

const SERVICES = [
  {
    icon: WindowIcon,
    title: "Residential Windows",
    tag: "New Construction & Replacement",
    copy:
      "Full-frame new construction or clean pocket replacement — energy-rated glass, precise reveals, and finish carpentry that leaves the room looking better than before we arrived.",
  },
  {
    icon: ShowerIcon,
    title: "Shower Enclosures & Glass Bath",
    tag: "Frameless, Semi-Frameless & Framed",
    copy:
      "Custom-measured frameless and semi-frameless enclosures, glass tub doors, and bath panels in clear, low-iron, or textured glass with a hardware finish to match your fixtures.",
  },
  {
    icon: PanelingIcon,
    title: "Commercial Glass Paneling",
    tag: "Curtain Wall & Feature Glazing",
    copy:
      "Curtain wall, spandrel, and feature glass paneling for lobbies, facades, and interior build-outs — engineered for load, wind, and code compliance on every elevation.",
  },
  {
    icon: PartitionIcon,
    title: "Glass Partitions & Separations",
    tag: "Office, Retail & Workplace Interiors",
    copy:
      "Demountable and fixed glass partition systems that divide space without closing it off — acoustic-rated options available for private offices and meeting rooms.",
  },
  {
    icon: StorefrontIcon,
    title: "Storefront Systems",
    tag: "Entry Glazing & Retail Facades",
    copy:
      "Aluminum-framed storefront and entry systems built for daily traffic — narrow sightlines, durable hardware, and glazing options tuned for street-level visibility.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    copy:
      "We walk the space with you, take precise field measurements, and talk through material, performance, and budget so there are no surprises later.",
  },
  {
    step: "02",
    title: "Design & Material Selection",
    copy:
      "You choose glass type, framing finish, and hardware from options suited to your project — we handle the specification and code details.",
  },
  {
    step: "03",
    title: "Precision Fabrication & Install",
    copy:
      "Every opening is built to its own measurements. Our crews protect the space, work clean, and install to tight, consistent tolerances.",
  },
  {
    step: "04",
    title: "Walkthrough & Warranty",
    copy:
      "We walk the finished work with you, confirm operation and finish, and back it with a written workmanship warranty.",
  },
];

const VALUE_PROPS = [
  {
    title: "One Point of Contact",
    copy:
      "From first measurement to final walkthrough, one project lead owns your job — no bouncing between subcontractors.",
  },
  {
    title: "Precision Fabrication",
    copy:
      "Openings are rarely perfectly square. We measure and fabricate to the actual opening, not a catalog size.",
  },
  {
    title: "Occupied-Space Experience",
    copy:
      "Comfortable working in lived-in homes and open businesses — dust control, clean daily wrap-up, and clear scheduling.",
  },
  {
    title: "Written Workmanship Warranty",
    copy:
      "Every install is backed in writing, separate from manufacturer glass and hardware warranties.",
  },
];

const MATERIALS = [
  "Insulated Glass Units (IGUs)",
  "Low-E & Energy-Rated Glass",
  "Tempered & Laminated Safety Glass",
  "Low-Iron / Ultra-Clear Glass",
  "Frosted, Textured & Switchable Glass",
  "Anodized & Painted Aluminum Framing",
];

export default function Home() {
  return (
    <main className="page">
      <div className="grid-bg" aria-hidden="true" />

      <header id="top" className="site-header">
        <div className="wrap header-row">
          <a href="#top" className="header-logo">
            <LogoLockup />
          </a>
          <nav className="site-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="cta-pill">
            Free Estimate
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">
            Residential <span>&amp;</span> Commercial Glass
          </p>
          <h1>Windows, glass, and storefronts built to hold the line.</h1>
          <div className="divider" aria-hidden="true" />
          <p className="lede">
            Highline Glass Group designs, fabricates, and installs
            residential windows, shower enclosures, commercial glass
            paneling, partitions, and storefront systems — precision
            glazing with a finish that reads premium from the street or the
            living room.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="submit hero-cta">
              Request Free Estimate
            </a>
            <a href="#before-after" className="hero-cta-secondary">
              See the Transformation ↓
            </a>
          </div>
          <ul className="hero-tags">
            <li>Free on-site consultation</li>
            <li>Precision, opening-specific fabrication</li>
            <li>Written workmanship warranty</li>
          </ul>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <p className="section-eyebrow">What We Do</p>
          <h2>Five glass disciplines, one standard of finish.</h2>
          <div className="service-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="service-card">
                <service.icon className="service-icon" />
                <p className="service-tag">{service.tag}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="before-after" className="section section-alt">
        <div className="wrap">
          <p className="section-eyebrow">Our Work</p>
          <h2>See the difference in the opening.</h2>
          <p className="section-lede">
            Concept renderings illustrating the kind of transformation a
            Highline install delivers — real project photography replaces
            these as jobs complete.
          </p>

          <div className="before-after-block">
            <ResidentialBeforeAfter className="before-after-art" />
            <div className="before-after-copy">
              <h3>Residential Windows</h3>
              <p>
                Warped frames, foggy insulated glass, and drafts swapped for
                a clean, energy-rated unit set flush and square — with
                trim and paint lines restored to match.
              </p>
              <ul className="check-list">
                <li>
                  <CheckIcon /> Lower energy bills from properly sealed,
                  Low-E glass
                </li>
                <li>
                  <CheckIcon /> Quieter interiors with laminated or
                  double-pane options
                </li>
                <li>
                  <CheckIcon /> Renewed curb appeal without changing the
                  opening
                </li>
              </ul>
            </div>
          </div>

          <div className="before-after-block reverse">
            <StorefrontBeforeAfter className="before-after-art" />
            <div className="before-after-copy">
              <h3>Storefront Applications</h3>
              <p>
                Dated punched windows and a narrow entry replaced with
                full-height storefront glazing — daylight to the back wall,
                slim bronze-tone mullions, and street-level presence.
              </p>
              <ul className="check-list">
                <li>
                  <CheckIcon /> More daylight reaching deeper into the
                  space
                </li>
                <li>
                  <CheckIcon /> Stronger street visibility and foot-traffic
                  draw
                </li>
                <li>
                  <CheckIcon /> Durable, high-traffic entry hardware
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="wrap">
          <p className="section-eyebrow">Process</p>
          <h2>Four steps from first call to final walkthrough.</h2>
          <div className="process-grid">
            {PROCESS.map((step) => (
              <div key={step.step} className="process-card">
                <span className="process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-hgg" className="section section-alt">
        <div className="wrap">
          <p className="section-eyebrow">Why HGG</p>
          <h2>A boutique glazier, run like a general contractor.</h2>
          <div className="value-grid">
            {VALUE_PROPS.map((value) => (
              <div key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </div>
            ))}
          </div>

          <div className="materials-band">
            <p className="materials-label">Glass &amp; Materials We Work With</p>
            <ul className="materials-list">
              {MATERIALS.map((material) => (
                <li key={material}>{material}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-intro">
              <p className="section-eyebrow">Get Started</p>
              <h2>Request your free estimate.</h2>
              <p>
                Tell us about your project and we&rsquo;ll follow up to
                schedule a free, no-obligation on-site consultation.
              </p>
              <div className="contact-mark">
                <LogoMark className="contact-mark-icon" />
              </div>
            </div>
            <EstimateForm />
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap foot-row">
          <div className="foot-brand">
            <LogoLockup className="foot-lockup" />
            <p>Residential &amp; Commercial Glass, Windows &amp; Storefronts</p>
          </div>
          <nav className="foot-nav" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="wrap foot-legal">
          <span>
            © {new Date().getFullYear()} Highline Glass Group, LLC. All
            rights reserved.
          </span>
          <a href="https://highlineglassgroup.com">highlineglassgroup.com</a>
        </div>
      </footer>
    </main>
  );
}
