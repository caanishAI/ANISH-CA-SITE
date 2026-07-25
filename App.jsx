import { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, Check, MessageCircle, Phone, Mail, MapPin, Clock,
  Play, Linkedin, Instagram, Youtube, Send, ShieldCheck, FileCheck2, Receipt,
  Building2, Landmark, Calculator, Briefcase, Store, Factory, Home, Cpu, Layers,
  Users, BadgeCheck, Wallet, Timer, Lock, Headphones,
} from "lucide-react";
import portraitImg from "./portrait.webp";

/* ===========================================================================
   CA ANISH CHOUDHARY

   ⚠️  BEFORE PUBLISHING
   1. STATS — every figure must be true and verifiable. Delete what you cannot
      substantiate. "9+ years" follows from Est. 2017; "500+" and "1000+" are
      yours to confirm against your records or remove.
   2. INSIGHTS + social links — replace "#" with your real URLs.
   3. WEB3FORMS_KEY — free key from web3forms.com so the form reaches your inbox.
   4. Copy is written to stay factual and non-solicitous. If you add claims,
      keep them verifiable — ICAI restricts unverifiable or promissory claims.
   =========================================================================== */

const FIRM = {
  name: "CA Anish Choudhary",
  short: "Anish Choudhary",
  estYear: "2017",
  city: "Ujjain, Madhya Pradesh, India",
  phone: "+91 88392 22753",
  email: "ca.anishchoudhary@outlook.com",
  hours: "Mon – Sat · 10:00 AM – 6:00 PM",
};

const WA_NUMBER = "918839222753";
const WEB3FORMS_KEY = "4a41bfd2-56e1-4c15-bcf9-5a9de76c7ac2";

const STATS = [
  { v: "9+", l: "Years Experience" },
  { v: "500+", l: "Businesses Served" },
  { v: "1000+", l: "Returns Filed" },
  { v: "5+", l: "Industries Served" },
  { v: "30 Min", l: "Avg. Response Time" },
];

const INDUSTRIES = [
  { i: Store, t: "Retail & Trading" },
  { i: Factory, t: "Manufacturing" },
  { i: Home, t: "Real Estate" },
  { i: Cpu, t: "IT & Startups" },
  { i: Users, t: "Professionals" },
];


const HIGHLIGHTS = [
  "Member of the Institute of Chartered Accountants of India",
  "In practice since 2017, across manufacturing, trading, real estate, IT and professional services",
  "Internal audit, internal controls and risk advisory",
  "AI and automation applied to day-to-day compliance work",
  "Speaker, content creator and mentor",
];

const TIMELINE = [
  { y: "2017", t: "Started CA Practice" },
  { y: "2018 – 2020", t: "Focused on Audit & Taxation" },
  { y: "2021 – 2023", t: "Expanded into Business Advisory" },
  { y: "2024 – Present", t: "AI Automation & Process Transformation" },
];

const SERVICES = [
  {
    i: FileCheck2, t: "Income Tax",
    d: "Direct tax work end to end — planning the year ahead, filing on time, and representing you when a notice arrives.",
    items: [
      "Return filing for individuals, firms, LLPs and companies",
      "Advance tax, TDS and TCS compliance",
      "Tax planning within the provisions of the Act",
      "Notices, assessments and scrutiny proceedings",
      "Appeals before CIT(A) and ITAT",
      "Capital gains and non-resident taxation",
    ],
  },
  {
    i: Receipt, t: "GST & Indirect Tax",
    d: "Registration through to litigation, with reconciliations documented well enough to hold up if the department asks.",
    items: [
      "Registration, amendments and cancellation",
      "GSTR-1, GSTR-3B, GSTR-9 and GSTR-9C filing",
      "Input tax credit reconciliation against GSTR-2B",
      "Refund applications and follow-up",
      "E-invoicing and e-way bill compliance",
      "Departmental notices, audits and appeals",
    ],
  },
  {
    i: ShieldCheck, t: "Audit & Assurance",
    d: "Audits carried out under the applicable Standards on Auditing, with working papers that stand up to review.",
    items: [
      "Statutory audit under the Companies Act",
      "Tax audit under section 44AB",
      "Stock, debtor and fixed asset verification",
      "Bank branch and concurrent audit",
      "Certification and other attest work",
      "Management reporting on audit findings",
    ],
  },
  {
    i: Landmark, t: "Internal Audit",
    d: "An independent look at how work actually gets done — where value leaks, and where a process is being trusted more than it deserves.",
    items: [
      "Risk-based internal audit planning",
      "Process walkthroughs and substantive testing",
      "Revenue, procurement and payables cycle review",
      "Inventory, stores and branch audits",
      "Observation reports with practical action plans",
      "Follow-up and closure tracking",
    ],
  },
  {
    i: Layers, t: "Internal Controls",
    d: "Designing and testing the controls that keep reported numbers reliable — and documenting them so the design is evidenced, not assumed.",
    items: [
      "Internal financial controls (IFC) design and documentation",
      "Control testing and gap assessment",
      "Standard operating procedures for key processes",
      "Delegation of authority and approval matrices",
      "Segregation of duties review",
      "Remediation support and re-testing",
    ],
  },
  {
    i: Briefcase, t: "Business Advisory",
    d: "Financial input for decisions you are already weighing — expansion, funding, pricing or restructuring.",
    items: [
      "Business planning and financial projections",
      "Project reports and CMA data for lenders",
      "Financial analysis and ratio review",
      "Costing and pricing support",
      "Financial and tax due diligence",
      "Fund raising documentation",
    ],
  },
  {
    i: Cpu, t: "AI & Automation",
    d: "Applying automation to the repetitive parts of finance, so the time saved goes into judgement instead of data entry.",
    items: [
      "Workflow automation for recurring compliance",
      "Reconciliation and data-matching automation",
      "Analytics and management dashboards",
      "Document processing using AI tools",
      "Tool selection and implementation",
      "Team training on practical AI use",
    ],
  },
  {
    i: Calculator, t: "Virtual CFO",
    d: "An outsourced finance function for businesses that need the discipline of a CFO without a full-time hire.",
    items: [
      "Monthly MIS and management reporting",
      "Cash flow planning and monitoring",
      "Budgeting and variance analysis",
      "Payroll processing and statutory deductions",
      "Vendor, receivable and inventory control",
      "Reporting to boards, lenders and investors",
    ],
  },
  {
    i: Building2, t: "Company Compliance",
    d: "Keeping the entity clean on the ROC side, so a missed filing never turns into a problem years later.",
    items: [
      "Company, OPC and LLP incorporation",
      "Annual filings — AOC-4, MGT-7 and related forms",
      "Director KYC and DIN compliance",
      "Statutory registers, minutes and resolutions",
      "Event-based filings and charge management",
      "Strike-off, closure and winding-up support",
    ],
  },
];


const INSIGHTS = {
  "Instagram Reels": [
    { t: "Taxation on Gift", cta: "Watch on Instagram", url: "https://www.instagram.com/reel/DaHSrPBpwz6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" /* , img: reel1.jpg */ },
    { t: "Tax Planning Under New Tax Regime", cta: "Watch on Instagram", url: "#" },
    { t: "Cash vs Bank Transactions Limit", cta: "Watch on Instagram", url: "#" },
  ],
  YouTube: [
    { t: "Add your video title", cta: "Watch on YouTube", url: "#" },
    { t: "Add your video title", cta: "Watch on YouTube", url: "#" },
    { t: "Add your video title", cta: "Watch on YouTube", url: "#" },
  ],
  Articles: [
    { t: "Add your article title", cta: "Read article", url: "#" },
    { t: "Add your article title", cta: "Read article", url: "#" },
    { t: "Add your article title", cta: "Read article", url: "#" },
  ],
};

const PROMISES = [
  { i: Wallet, t: "Transparent Fees" },
  { i: Timer, t: "Timely Delivery" },
  { i: Lock, t: "100% Confidential" },
  { i: Headphones, t: "Dedicated Support" },
];

const GOLD = "#E5A94E";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rev ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export default function Site() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tab, setTab] = useState("Instagram Reels");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };
  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello Anish, I would like to get in touch.")}`;

  const sendMessage = async () => {
    if (!form.name.trim() || !form.message.trim()) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: "New enquiry from your website", ...form }),
      });
      const data = await res.json();
      if (data.success) { setStatus("ok"); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const nav = [["Home", "top"], ["About", "about"], ["Services", "services"], ["Insights", "insights"], ["Contact", "contact"]];

  return (
    <div className="site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@300;400;450;500;600&family=IBM+Plex+Mono:wght@400;450&display=swap');

        .site{
          --bg:#0A0A0C; --bg-soft:#0C0C0F;
          --surface:rgba(255,255,255,.022); --surface-2:rgba(255,255,255,.034);
          --line:rgba(255,255,255,.068); --line-2:rgba(255,255,255,.105);
          --gold:#E5A94E; --gold-dim:rgba(229,169,78,.30); --gold-ghost:rgba(229,169,78,.10);
          --text:#F4F4F2; --text-2:#C9C9CE; --mute:#96969D;
          --live:#3DD167;
          --r-card:14px; --r-btn:12px;
          --e-out:cubic-bezier(.22,1,.36,1); --e:cubic-bezier(.4,0,.2,1);
          --shadow-card:0 22px 48px -30px rgba(0,0,0,.9);
          --shadow-btn:0 10px 26px -12px rgba(229,169,78,.5);
          background:var(--bg); color:var(--text);
          font-family:'Inter',sans-serif; font-weight:400;
          -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
          min-height:100vh; overflow-x:hidden;
        }
        .site ::selection{ background:rgba(229,169,78,.26); }

        /* ---- type scale ---- */
        .disp{ font-family:'Inter Tight',sans-serif; }
        .mono{ font-family:'IBM Plex Mono',monospace; font-weight:450; }
        .t-h1{ font-family:'Inter Tight',sans-serif; font-weight:700; font-size:clamp(2.25rem,4.3vw,3.5rem); line-height:1.075; letter-spacing:-.032em; }
        .t-h2{ font-family:'Inter Tight',sans-serif; font-weight:700; font-size:clamp(1.8rem,3.1vw,2.6rem); line-height:1.14; letter-spacing:-.028em; }
        .t-h3{ font-family:'Inter Tight',sans-serif; font-weight:600; font-size:1.0625rem; line-height:1.32; letter-spacing:-.012em; }
        .t-stat{ font-family:'Inter Tight',sans-serif; font-weight:700; font-size:clamp(1.6rem,2.3vw,1.95rem); line-height:1; letter-spacing:-.028em; }
        .t-body{ font-size:.9375rem; line-height:1.72; color:var(--text-2); }
        .t-sm{ font-size:.8438rem; line-height:1.62; color:var(--mute); }
        .t-xs{ font-size:.7813rem; line-height:1.55; color:var(--mute); }
        .t-eyebrow{ font-family:'IBM Plex Mono',monospace; font-size:.6563rem; letter-spacing:.30em; text-transform:uppercase; color:var(--gold); }

        /* ---- layout rhythm ---- */
        .wrap{ max-width:1220px; margin:0 auto; padding-left:24px; padding-right:24px; }
        @media (min-width:768px){ .wrap{ padding-left:40px; padding-right:40px; } }
        .sec{ padding-top:96px; padding-bottom:96px; }
        @media (min-width:768px){ .sec{ padding-top:132px; padding-bottom:132px; } }
        .rule-t{ border-top:1px solid var(--line); }
        .rule-b{ border-bottom:1px solid var(--line); }

        /* ---- motion ---- */
        .rev{ opacity:0; transform:translate3d(0,22px,0); transition:opacity .82s var(--e-out), transform .82s var(--e-out); }
        .rev.in{ opacity:1; transform:none; }
        @keyframes riseIn{ from{opacity:0; transform:translate3d(0,24px,0);} to{opacity:1; transform:none;} }
        @keyframes drift{ 0%,100%{ transform:translate3d(0,0,0) scale(1);} 50%{ transform:translate3d(-1.6%,1.6%,0) scale(1.05);} }
        .in-1{ animation:riseIn .9s var(--e-out) .05s both; }
        .in-2{ animation:riseIn .9s var(--e-out) .13s both; }
        .in-3{ animation:riseIn .9s var(--e-out) .21s both; }
        .in-4{ animation:riseIn .9s var(--e-out) .30s both; }
        .in-5{ animation:riseIn .9s var(--e-out) .38s both; }
        .in-6{ animation:riseIn .9s var(--e-out) .46s both; }
        .in-7{ animation:riseIn 1.15s var(--e-out) .18s both; }

        /* ---- surfaces ---- */
        .card{
          position:relative; background:var(--surface); border:1px solid var(--line);
          border-radius:var(--r-card);
          transition:border-color .45s var(--e), background .45s var(--e), transform .45s var(--e-out), box-shadow .45s var(--e);
        }
        .card::before{
          content:""; position:absolute; inset:0; border-radius:inherit; pointer-events:none;
          background:linear-gradient(180deg, rgba(229,169,78,.09), transparent 42%);
          opacity:0; transition:opacity .45s var(--e);
        }
        .card-i:hover{ transform:translate3d(0,-3px,0); border-color:var(--gold-dim); background:var(--surface-2); box-shadow:var(--shadow-card); }
        .card-i:hover::before{ opacity:1; }
        .card-i:hover .go{ color:var(--gold); }
        .card-i:hover .go svg{ transform:translate3d(3px,0,0); }
        .go{ display:inline-flex; align-items:center; gap:7px; color:var(--mute); font-size:.8125rem; transition:color .35s var(--e); }
        .go svg{ transition:transform .35s var(--e-out); }

        .panel{ background:var(--surface); border:1px solid var(--line); border-radius:var(--r-card); }
        .cell{ border-right:1px solid var(--line); }
        .cell:last-child{ border-right:none; }

        /* ---- buttons ---- */
        .btn{
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          height:50px; padding:0 28px; border-radius:var(--r-btn);
          font-family:'Inter Tight',sans-serif; font-weight:600; font-size:.9375rem; letter-spacing:-.008em;
          white-space:nowrap;
          transition:transform .4s var(--e-out), box-shadow .4s var(--e), background .35s var(--e), border-color .35s var(--e), color .35s var(--e);
        }
        .btn svg{ transition:transform .4s var(--e-out); }
        .btn-p{ background:var(--gold); color:#15110A; box-shadow:0 6px 18px -10px rgba(229,169,78,.55); }
        .btn-p:hover{ transform:translate3d(0,-2px,0); box-shadow:var(--shadow-btn); background:#EFB65D; }
        .btn-p:hover svg{ transform:translate3d(3px,0,0); }
        .btn-p:active{ transform:translate3d(0,0,0); }
        .btn-g{ background:transparent; color:var(--text); border:1px solid var(--line-2); font-weight:500; }
        .btn-g:hover{ transform:translate3d(0,-2px,0); border-color:var(--gold-dim); background:rgba(255,255,255,.028); }
        .btn-g:active{ transform:translate3d(0,0,0); }
        .btn-sm{ height:44px; padding:0 22px; font-size:.875rem; }

        /* ---- chips ---- */
        .chip{
          display:inline-flex; align-items:center; gap:8px;
          height:38px; padding:0 14px; border-radius:10px;
          border:1px solid var(--line); color:var(--mute);
          font-family:'IBM Plex Mono',monospace; font-size:.6875rem; letter-spacing:.02em;
          transition:border-color .4s var(--e), color .4s var(--e), background .4s var(--e);
        }
        .chip:hover{ border-color:var(--gold-dim); color:var(--text); background:rgba(255,255,255,.022); }

        /* ---- icon plates ---- */
        .plate{ display:inline-flex; align-items:center; justify-content:center; border-radius:11px;
          background:var(--gold-ghost); border:1px solid rgba(229,169,78,.22); transition:border-color .45s var(--e), background .45s var(--e); }
        .plate-lg{ width:42px; height:42px; }
        .plate-sm{ width:32px; height:32px; }
        .card-i:hover .plate{ border-color:var(--gold-dim); background:rgba(229,169,78,.15); }

        /* ---- forms ---- */
        .field{
          width:100%; height:52px; padding:0 16px; border-radius:var(--r-btn);
          background:rgba(255,255,255,.026); border:1px solid var(--line);
          color:var(--text); font-family:'Inter',sans-serif; font-size:.9063rem; outline:none;
          transition:border-color .35s var(--e), background .35s var(--e), box-shadow .35s var(--e);
        }
        textarea.field{ height:auto; padding:15px 16px; resize:vertical; line-height:1.65; }
        .field::placeholder{ color:#6B6B72; }
        .field:hover{ border-color:var(--line-2); }
        .field:focus{ border-color:var(--gold-dim); background:rgba(255,255,255,.038); box-shadow:0 0 0 3px rgba(229,169,78,.10); }
        select.field{ appearance:none; cursor:pointer;
          background-image:linear-gradient(45deg,transparent 50%,#96969D 50%),linear-gradient(135deg,#96969D 50%,transparent 50%);
          background-position:calc(100% - 19px) 23px, calc(100% - 14px) 23px;
          background-size:5px 5px,5px 5px; background-repeat:no-repeat; }

        /* ---- nav ---- */
        .navlink{ position:relative; color:var(--mute); font-size:.875rem; transition:color .35s var(--e); }
        .navlink:hover{ color:var(--text); }
        .navlink::after{ content:""; position:absolute; left:0; right:0; bottom:-6px; height:1px; background:var(--gold);
          transform:scaleX(0); transform-origin:left; transition:transform .45s var(--e-out); }
        .navlink:hover::after{ transform:scaleX(1); }

        /* ---- hero atmosphere ---- */
        .grid-bg{ background-image:linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px); background-size:68px 68px; }
        .hero-light{ position:absolute; right:-10%; top:-24%; width:70vw; height:70vw; max-width:880px; max-height:880px;
          border-radius:50%; background:radial-gradient(circle, rgba(229,169,78,.115), rgba(229,169,78,.028) 46%, transparent 70%);
          filter:blur(18px); animation:drift 44s ease-in-out infinite; will-change:transform; pointer-events:none; }
        .portrait-frame{ position:relative; width:100%; max-width:640px; margin-left:auto; }
        .portrait-img{ display:block; width:100%; height:auto; }
        @media (min-width:1024px){
          .portrait-col{ margin-top:-74px; }
          .portrait-frame{ max-width:none; height:600px; }
          .portrait-img{ height:100%; object-fit:cover; object-position:50% 20%;
            -webkit-mask-image:radial-gradient(ellipse 84% 94% at 50% 42%, #000 44%, transparent 84%);
            mask-image:radial-gradient(ellipse 84% 94% at 50% 42%, #000 44%, transparent 84%); }
        }
        .arc{ position:absolute; border-radius:50%; border:1px solid rgba(229,169,78,.09); pointer-events:none; }
        .fade-edge{ position:absolute; inset:0; pointer-events:none;
          background:radial-gradient(ellipse 94% 84% at 50% 44%, transparent 42%, rgba(10,10,12,.94) 100%); }

        .social{ display:inline-flex; align-items:center; justify-content:center; width:38px; height:38px;
          border-radius:10px; border:1px solid var(--line); color:var(--mute);
          transition:border-color .4s var(--e), color .4s var(--e), transform .4s var(--e-out); }
        .social:hover{ border-color:var(--gold-dim); color:var(--gold); transform:translate3d(0,-2px,0); }

        .site a:focus-visible,.site button:focus-visible,.site input:focus-visible,.site textarea:focus-visible,.site select:focus-visible{
          outline:2px solid var(--gold); outline-offset:3px; border-radius:6px; }

        @media (prefers-reduced-motion:reduce){
          .site *{ animation:none!important; transition:none!important; }
          .rev{ opacity:1!important; transform:none!important; }
        }
      `}</style>

      {/* ================= NAV ================= */}
      <header className="fixed top-0 inset-x-0 z-50" style={{
        background: scrolled ? "rgba(10,10,12,.82)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
        transition: "background .5s var(--e), border-color .5s var(--e), backdrop-filter .5s var(--e)",
      }}>
        <div className="wrap flex items-center justify-between" style={{ height: 74 }}>
          <button onClick={() => go("top")} className="disp" style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.02em" }}>
            <span style={{ color: GOLD }}>CA</span> {FIRM.short}
          </button>

          <nav className="hidden lg:flex items-center" style={{ gap: 34 }}>
            {nav.map(([l, id]) => <button key={id} onClick={() => go(id)} className="navlink">{l}</button>)}
            <button onClick={() => go("contact")} className="btn btn-p btn-sm" style={{ marginLeft: 8 }}>Book Consultation</button>
          </nav>

          <button className="lg:hidden" onClick={() => setMenu((v) => !v)} aria-label="Menu" aria-expanded={menu}>
            {menu ? <X size={21} strokeWidth={1.75} /> : <Menu size={21} strokeWidth={1.75} />}
          </button>
        </div>
        {menu && (
          <div className="lg:hidden" style={{ background: "rgba(10,10,12,.97)", borderBottom: "1px solid var(--line)" }}>
            <div className="wrap flex flex-col gap-1 pb-6 pt-1">
              {nav.map(([l, id]) => <button key={id} onClick={() => go(id)} className="text-left navlink" style={{ padding: "9px 0" }}>{l}</button>)}
              <button onClick={() => go("contact")} className="btn btn-p btn-sm mt-3">Book Consultation</button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="top" className="relative grid-bg overflow-hidden">
        <div className="hero-light" />
        <div className="arc hidden md:block" style={{ right: "-18%", top: "-32%", width: "64vw", height: "64vw", maxWidth: 860, maxHeight: 860 }} />
        <div className="fade-edge" />

        <div className="wrap relative grid lg:grid-cols-[53%_47%] items-center lg:items-start" style={{ gap: 32, paddingTop: 138, paddingBottom: 88 }}>
          <div>
            <div className="in-1 inline-flex items-center mono" style={{
              height: 32, padding: "0 15px", borderRadius: 999, border: "1px solid rgba(229,169,78,.32)",
              color: GOLD, fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase",
            }}>Chartered Accountant</div>

            <h1 className="t-h1" style={{ marginTop: 26 }}>
              <span className="in-2" style={{ display: "block" }}>Helping Businesses</span>
              <span className="in-3" style={{ display: "block" }}>
                <span style={{ color: GOLD }}>Plan Better</span>, Stay <span style={{ color: GOLD }}>Compliant</span>
              </span>
              <span className="in-4" style={{ display: "block" }}>&amp; Build Stronger Systems.</span>
            </h1>

            <p className="t-body in-4" style={{ marginTop: 24, maxWidth: "33rem" }}>
              Practical advice, careful compliance and AI-assisted systems —<br />
              so the finance side of your business stops being a worry.
            </p>

            <div className="in-5 flex flex-wrap" style={{ gap: 10, marginTop: 28 }}>
              {["Tax & GST", "Audit & Assurance", "Internal Controls", "AI & Automation"].map((c) => (
                <span key={c} className="chip"><BadgeCheck size={13} strokeWidth={1.9} style={{ color: GOLD }} />{c}</span>
              ))}
            </div>

            <div className="in-6 flex flex-wrap" style={{ gap: 12, marginTop: 34 }}>
              <button onClick={() => go("contact")} className="btn btn-p">Book a Consultation <ArrowRight size={16} strokeWidth={2} /></button>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-g">Chat on WhatsApp <MessageCircle size={16} strokeWidth={1.8} /></a>
            </div>

            <div className="in-6 flex items-center t-xs" style={{ gap: 9, marginTop: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--live)", boxShadow: "0 0 0 3px rgba(61,209,103,.15)", display: "inline-block" }} />
              Usually replies within 30 minutes
            </div>
          </div>

          {/* portrait */}
          <div className="portrait-col relative flex justify-center lg:justify-end in-7">
            <div className="portrait-frame">
              <img src={portraitImg} className="portrait-img"
                alt={`${FIRM.name}, Chartered Accountant, at his office in Ujjain`}
                width="1100" height="1312" loading="eager" decoding="async" fetchpriority="high" />
              <div className="absolute" style={{
                right: 0, bottom: 6, padding: "18px 26px", borderRadius: 14, textAlign: "center",
                background: "rgba(14,14,17,.74)", border: "1px solid rgba(229,169,78,.26)",
                backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
                boxShadow: "0 24px 50px -30px rgba(0,0,0,.95)",
              }}>
                <div className="t-stat" style={{ color: GOLD }}>9+</div>
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--mute)", marginTop: 7 }}>Years of Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="wrap relative" style={{ paddingBottom: 110 }}>
          <Reveal>
            <div className="panel overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {STATS.map((s, i) => (
                  <div key={s.l} className="text-center" style={{
                    padding: "30px 18px",
                    borderRight: `1px solid var(--line)`,
                    borderBottom: `1px solid var(--line)`,
                  }}>
                    <div className="t-stat" style={{ color: GOLD }}>{s.v}</div>
                    <div className="t-xs" style={{ marginTop: 9 }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "26px 24px 28px" }}>
                <div className="t-xs text-center" style={{ marginBottom: 20 }}>Trusted by Businesses Across</div>
                <div className="flex flex-wrap items-center justify-center" style={{ gap: "16px 44px" }}>
                  {INDUSTRIES.map(({ i: Icon, t }) => (
                    <span key={t} className="inline-flex items-center t-xs" style={{ gap: 9, color: "var(--text-2)" }}>
                      <Icon size={15} strokeWidth={1.6} style={{ color: GOLD }} />{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="sec">
        <div className="wrap grid lg:grid-cols-2" style={{ gap: 64 }}>
          <div>
            <Reveal><div className="t-eyebrow">About me</div></Reveal>
            <Reveal delay={70}>
              <h2 className="t-h2" style={{ marginTop: 16 }}>
                A CA who combines<br />
                <span style={{ color: GOLD }}>Experience</span> with <span style={{ color: GOLD }}>Technology.</span>
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="t-body" style={{ marginTop: 24, maxWidth: "34rem" }}>
                I'm {FIRM.name}, practising since {FIRM.estYear} in Ujjain. I work with businesses and
                professionals on tax planning, compliance and building financial systems that hold up.
                I use AI and automation to deliver faster, more accurate and insight-driven work.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <ul style={{ marginTop: 30, display: "grid", gap: 15 }}>
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start" style={{ gap: 13 }}>
                    <span className="plate" style={{ width: 20, height: 20, borderRadius: 6, marginTop: 2, flexShrink: 0 }}>
                      <Check size={11} strokeWidth={2.4} style={{ color: GOLD }} />
                    </span>
                    <span style={{ fontSize: ".9063rem", lineHeight: 1.5, color: "var(--text)" }}>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={250}>
              <button onClick={() => go("services")} className="btn btn-p" style={{ marginTop: 38 }}>
                See What I Do <ArrowRight size={16} strokeWidth={2} />
              </button>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="panel h-full" style={{ padding: "42px 38px" }}>
              <div className="relative" style={{ paddingLeft: 30 }}>
                <div style={{ position: "absolute", left: 5, top: 9, bottom: 12, width: 1, background: "linear-gradient(180deg, rgba(229,169,78,.75), rgba(229,169,78,.06))" }} />
                {TIMELINE.map((t, i) => (
                  <div key={t.y} style={{ marginBottom: i < TIMELINE.length - 1 ? 40 : 0 }}>
                    <span style={{ position: "absolute", left: 0, marginTop: 7, width: 11, height: 11, borderRadius: "50%", background: GOLD, boxShadow: "0 0 0 4px rgba(229,169,78,.12)" }} />
                    <div className="t-h3" style={{ fontSize: "1rem" }}>{t.y}</div>
                    <div className="t-sm" style={{ marginTop: 7 }}>{t.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="sec rule-t rule-b">
        <div className="wrap">
          <Reveal><div className="t-eyebrow text-center">What I do</div></Reveal>
          <Reveal delay={70}>
            <h2 className="t-h2 text-center" style={{ marginTop: 16 }}>
              Comprehensive Solutions for<br className="hidden md:block" /> Your Business Needs
            </h2>
          </Reveal>

          <p className="t-body text-center" style={{ maxWidth: "56ch", margin: "20px auto 0" }}>
            Nine areas of work, each with the specific scope it usually involves — so you know what
            is covered before we speak.
          </p>

          <div className="grid lg:grid-cols-2" style={{ gap: 16, marginTop: 60 }}>
            {SERVICES.map(({ i: Icon, t, d, items }, idx) => (
              <Reveal key={t} delay={(idx % 2) * 90}>
                <div className="card card-i h-full flex flex-col" style={{ padding: "30px 30px 28px" }}>
                  <div className="flex items-start" style={{ gap: 16 }}>
                    <span className="plate plate-lg" style={{ flexShrink: 0 }}>
                      <Icon size={19} strokeWidth={1.6} style={{ color: GOLD }} />
                    </span>
                    <div>
                      <h3 className="t-h3" style={{ fontSize: "1.125rem" }}>{t}</h3>
                      <p className="t-sm" style={{ marginTop: 9 }}>{d}</p>
                    </div>
                  </div>

                  <ul style={{ marginTop: 22, paddingTop: 20, borderTop: "1px solid var(--line)", display: "grid", gap: 11, flex: 1 }}>
                    {items.map((it) => (
                      <li key={it} className="flex items-start" style={{ gap: 11 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: GOLD, marginTop: 8, flexShrink: 0, opacity: .8 }} />
                        <span style={{ fontSize: ".8438rem", lineHeight: 1.55, color: "var(--text-2)" }}>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => go("contact")} className="go" style={{ marginTop: 22 }}>
                    Discuss this <ArrowRight size={13} strokeWidth={2} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="text-center" style={{ marginTop: 56 }}>
              <button onClick={() => go("contact")} className="btn btn-p">Discuss Your Requirement <ArrowRight size={16} strokeWidth={2} /></button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= INSIGHTS ================= */}
      <section id="insights" className="sec rule-t">
        <div className="wrap">
          <Reveal><div className="t-eyebrow text-center">Latest insights</div></Reveal>
          <Reveal delay={70}><h2 className="t-h2 text-center" style={{ marginTop: 16 }}>Stay Updated. Stay Ahead.</h2></Reveal>

          <Reveal delay={130}>
            <div className="flex justify-center" style={{ gap: 10, marginTop: 40 }}>
              {Object.keys(INSIGHTS).map((k) => {
                const on = tab === k;
                return (
                  <button key={k} onClick={() => setTab(k)} className="disp" aria-pressed={on}
                    style={{
                      height: 42, padding: "0 22px", borderRadius: 999, fontSize: ".8438rem", fontWeight: 500,
                      background: on ? GOLD : "transparent", color: on ? "#15110A" : "var(--mute)",
                      border: `1px solid ${on ? GOLD : "var(--line)"}`,
                      transition: "all .42s var(--e)",
                    }}>{k}</button>
                );
              })}
            </div>
          </Reveal>

          <div key={tab} className="grid md:grid-cols-3" style={{ gap: 16, marginTop: 44 }}>
            {INSIGHTS[tab].map((p, i) => (
              <Reveal key={p.t + i} delay={i * 80}>
                <a href={p.url} target={p.url === "#" ? undefined : "_blank"} rel="noreferrer" className="card card-i block h-full overflow-hidden">
                  <div className="relative flex items-center" style={{
                    height: 194, padding: "0 26px",
                    background: "linear-gradient(146deg, rgba(229,169,78,.115), rgba(255,255,255,.014) 56%, transparent)",
                    borderBottom: "1px solid var(--line)",
                  }}>
                    <div className="disp" style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.24, letterSpacing: "-.025em", maxWidth: "76%" }}>{p.t}</div>
                    <span className="absolute inline-flex items-center justify-center" style={{
                      right: 22, bottom: 22, width: 38, height: 38, borderRadius: "50%",
                      background: "rgba(10,10,12,.55)", border: "1px solid rgba(229,169,78,.34)",
                    }}>
                      <Play size={13} strokeWidth={1.5} style={{ color: GOLD, marginLeft: 2 }} fill={GOLD} />
                    </span>
                  </div>
                  <div style={{ padding: 22 }}>
                    <div className="t-h3" style={{ fontSize: ".9063rem" }}>{p.t}</div>
                    <div className="go" style={{ marginTop: 13 }}>{p.cta} <ArrowRight size={12} strokeWidth={2} /></div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden grid-bg rule-t rule-b">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 58% 100% at 84% 50%, rgba(229,169,78,.135), transparent 64%)" }} />
        <div className="wrap relative sec">
          <Reveal>
            <h2 className="t-h2" style={{ maxWidth: "19ch" }}>Let's Build a Stronger Financial Future Together.</h2>
            <p className="t-body" style={{ marginTop: 22, maxWidth: "40ch" }}>
              Share what you need and I'll tell you exactly how I can help — and what it will involve.
            </p>
            <div className="flex flex-wrap" style={{ gap: 12, marginTop: 34 }}>
              <button onClick={() => go("contact")} className="btn btn-p">Request a Call <ArrowRight size={16} strokeWidth={2} /></button>
              <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-g">Chat on WhatsApp <MessageCircle size={16} strokeWidth={1.8} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="sec">
        <div className="wrap">
          <Reveal><div className="t-eyebrow">Get in touch</div></Reveal>
          <Reveal delay={70}><h2 className="t-h2" style={{ marginTop: 16 }}>I'm Just a Message Away.</h2></Reveal>

          <div className="grid lg:grid-cols-[36%_64%]" style={{ gap: 16, marginTop: 52 }}>
            <Reveal>
              <div className="panel h-full" style={{ padding: 30 }}>
                <div style={{ display: "grid", gap: 24 }}>
                  {[[MapPin, FIRM.city], [Mail, FIRM.email], [Phone, FIRM.phone], [Clock, FIRM.hours]].map(([Icon, v], i) => (
                    <div key={i} className="flex items-center" style={{ gap: 14 }}>
                      <span className="plate plate-sm" style={{ flexShrink: 0 }}>
                        <Icon size={14} strokeWidth={1.7} style={{ color: GOLD }} />
                      </span>
                      <span style={{ fontSize: ".875rem", lineHeight: 1.5, color: "var(--text-2)" }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="flex" style={{ gap: 10, marginTop: 32, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
                  {[[Linkedin, "#", "LinkedIn"], [Instagram, "#", "Instagram"], [Youtube, "#", "YouTube"], [MessageCircle, waLink, "WhatsApp"]].map(([Icon, href, label], i) => (
                    <a key={i} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social">
                      <Icon size={15} strokeWidth={1.7} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="panel" style={{ padding: 30 }}>
                <div className="grid sm:grid-cols-2" style={{ gap: 14 }}>
                  <input className="field" aria-label="Your name" placeholder="Your Name" value={form.name} onChange={(e) => setF("name", e.target.value)} />
                  <input className="field" aria-label="Your email" type="email" placeholder="Your Email" value={form.email} onChange={(e) => setF("email", e.target.value)} />
                  <input className="field" aria-label="Phone number" type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setF("phone", e.target.value)} />
                  <select className="field" aria-label="Select service" value={form.service} onChange={(e) => setF("service", e.target.value)}
                    style={{ color: form.service ? "var(--text)" : "#6B6B72" }}>
                    <option value="">Select Service</option>
                    {SERVICES.map((s) => <option key={s.t} value={s.t} style={{ color: "#111" }}>{s.t}</option>)}
                  </select>
                </div>
                <textarea className="field" aria-label="Your message" placeholder="Your Message" rows={5}
                  value={form.message} onChange={(e) => setF("message", e.target.value)} style={{ marginTop: 14 }} />

                <button onClick={sendMessage} className="btn btn-p" style={{ width: "100%", marginTop: 16, opacity: status === "sending" ? .72 : 1 }}>
                  {status === "sending" ? "Sending…" : "Send Message"} <Send size={15} strokeWidth={1.9} />
                </button>

                <div className="flex items-center justify-center t-xs" style={{ gap: 9, marginTop: 16 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--live)", boxShadow: "0 0 0 3px rgba(61,209,103,.15)", display: "inline-block" }} />
                  Usually replies within 30 minutes
                </div>
                {status === "ok" && <div className="t-xs text-center" style={{ marginTop: 14, color: GOLD }}>Thanks — your message has been sent.</div>}
                {status === "error" && <div className="t-xs text-center" style={{ marginTop: 14 }}>Add your name and message, or reach out on WhatsApp.</div>}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="panel overflow-hidden grid grid-cols-2 md:grid-cols-4" style={{ marginTop: 16 }}>
              {PROMISES.map(({ i: Icon, t }, i) => (
                <div key={t} className="flex items-center justify-center" style={{ gap: 11, padding: "26px 16px", borderRight: i < PROMISES.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <Icon size={16} strokeWidth={1.6} style={{ color: GOLD }} />
                  <span style={{ fontSize: ".8125rem", color: "var(--text-2)" }}>{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="rule-t">
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 44 }}>
          <div className="grid md:grid-cols-4" style={{ gap: 48 }}>
            <div>
              <div className="disp" style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.02em" }}>
                <span style={{ color: GOLD }}>CA</span> {FIRM.short}
              </div>
              <p className="t-xs" style={{ marginTop: 16, maxWidth: "26ch", lineHeight: 1.75 }}>
                Chartered Accountant helping businesses and professionals with tax, audit,
                compliance, advisory and AI automation.
              </p>
            </div>

            <div>
              <div className="t-eyebrow" style={{ fontSize: ".625rem", letterSpacing: ".2em" }}>Quick Links</div>
              <ul style={{ marginTop: 20, display: "grid", gap: 12 }}>
                {nav.map(([l, id]) => <li key={id}><button onClick={() => go(id)} className="navlink" style={{ fontSize: ".8125rem" }}>{l}</button></li>)}
              </ul>
            </div>

            <div>
              <div className="t-eyebrow" style={{ fontSize: ".625rem", letterSpacing: ".2em" }}>Services</div>
              <ul className="t-xs" style={{ marginTop: 20, display: "grid", gap: 12 }}>
                {SERVICES.map((s) => <li key={s.t}>{s.t}</li>)}
              </ul>
            </div>

            <div>
              <div className="t-eyebrow" style={{ fontSize: ".625rem", letterSpacing: ".2em" }}>Connect</div>
              <ul className="t-xs" style={{ marginTop: 20, display: "grid", gap: 14 }}>
                <li className="flex items-start" style={{ gap: 10 }}><MapPin size={13} strokeWidth={1.7} style={{ color: GOLD, marginTop: 3, flexShrink: 0 }} />{FIRM.city}</li>
                <li className="flex items-start" style={{ gap: 10 }}><Mail size={13} strokeWidth={1.7} style={{ color: GOLD, marginTop: 3, flexShrink: 0 }} />{FIRM.email}</li>
                <li className="flex items-start" style={{ gap: 10 }}><Phone size={13} strokeWidth={1.7} style={{ color: GOLD, marginTop: 3, flexShrink: 0 }} />{FIRM.phone}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: 14, marginTop: 60, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
            <p className="mono text-center md:text-left" style={{ fontSize: ".6875rem", lineHeight: 1.7, color: "var(--mute)", maxWidth: "72ch" }}>
              © {new Date().getFullYear()} {FIRM.name}. This website is for general information only — it is not an
              advertisement or a solicitation of work, and is not a substitute for professional advice.
            </p>
            <div className="mono" style={{ fontSize: ".6875rem", color: "var(--mute)", whiteSpace: "nowrap" }}>Ujjain, Madhya Pradesh</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
