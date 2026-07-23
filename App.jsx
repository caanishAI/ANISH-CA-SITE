import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Menu, X, ShieldCheck, FileCheck2, Receipt, Building2, Landmark, Calculator, Lightbulb, ArrowRight, Globe, Send, MessageCircle } from "lucide-react";

/* =========================================================================
   NIHAR & ASSOCIATES — Chartered Accountants
   High-craft, dynamic, and ICAI-compliant. [BRACKET] items = apni detail.
   Copy is factual & non-solicitous (no "best/guaranteed/free consult/clients count").
   Verify final content against latest ICAI guidance before publishing.
   ========================================================================= */

const FIRM = {
  name: "CA Anish Choudhary", tagline: "Chartered Accountant", estYear: "2017",
  city: "Ujjain, Madhya Pradesh",
  phone: "+91 88392 22753", email: "anishagrawal533@gmail.com",
  availability: "Available online — serving clients across India", hours: "Mon–Sat · 10:00 AM – 6:00 PM",
};

// Contact delivery — WhatsApp works immediately. For direct-to-inbox email, get a free
// access key at https://web3forms.com and paste it below (messages arrive at your Gmail).
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";
const WA_NUMBER = "918839222753"; // WhatsApp number with country code

const CATS = [
  { id: "audit", label: "Audit & Assurance", icon: ShieldCheck },
  { id: "dtax", label: "Direct Tax", icon: FileCheck2 },
  { id: "gst", label: "GST & Indirect Tax", icon: Receipt },
  { id: "corp", label: "Company Law", icon: Building2 },
  { id: "reg", label: "Registrations", icon: Landmark },
  { id: "acc", label: "Accounting", icon: Calculator },
  { id: "adv", label: "Advisory", icon: Lightbulb },
];

const SERVICES = [
  { c: "audit", t: "Statutory Audit", d: "Audit of companies under the Companies Act." },
  { c: "audit", t: "Tax Audit", d: "Audit under section 44AB of the Income-tax Act." },
  { c: "audit", t: "Internal Audit", d: "Review of internal controls and processes." },
  { c: "audit", t: "Bank & Concurrent Audit", d: "Statutory and concurrent audit of bank branches." },
  { c: "audit", t: "Stock Audit", d: "Verification of inventory and receivables." },
  { c: "audit", t: "GST Audit & Reconciliation", d: "Reconciliation and audit support under GST." },
  { c: "dtax", t: "Income Tax Return Filing", d: "Returns for individuals, firms, and companies." },
  { c: "dtax", t: "Tax Planning", d: "Compliance-based planning within the Act." },
  { c: "dtax", t: "TDS / TCS Compliance", d: "Deduction, deposit, and quarterly returns." },
  { c: "dtax", t: "Assessments & Scrutiny", d: "Representation before income-tax authorities." },
  { c: "dtax", t: "Appeals (CIT-A / ITAT)", d: "Preparation and representation in appeals." },
  { c: "dtax", t: "Capital Gains Advisory", d: "Computation and compliance on capital gains." },
  { c: "dtax", t: "NRI Taxation", d: "Residential status, returns, and remittances." },
  { c: "gst", t: "GST Registration", d: "New registration and amendments." },
  { c: "gst", t: "GST Return Filing", d: "GSTR-1, GSTR-3B, and annual returns." },
  { c: "gst", t: "GSTR-9 / 9C", d: "Annual return and reconciliation statement." },
  { c: "gst", t: "GST Refunds", d: "Preparation and filing of refund applications." },
  { c: "gst", t: "E-way Bill Compliance", d: "Support with e-way bill requirements." },
  { c: "gst", t: "GST Advisory", d: "Classification, ITC, and compliance queries." },
  { c: "corp", t: "Company Incorporation", d: "Private Limited, OPC, and Public companies." },
  { c: "corp", t: "LLP Registration", d: "Formation and agreement filing." },
  { c: "corp", t: "Annual ROC Filings", d: "AOC-4, MGT-7, and related forms." },
  { c: "corp", t: "Director KYC (DIR-3)", d: "Annual director KYC compliance." },
  { c: "corp", t: "Secretarial Compliance", d: "Statutory registers and event-based filings." },
  { c: "corp", t: "Strike Off / Closure", d: "Company and LLP closure procedures." },
  { c: "reg", t: "MSME / Udyam", d: "Registration for micro and small enterprises." },
  { c: "reg", t: "Startup India", d: "DPIIT recognition support." },
  { c: "reg", t: "Import Export Code (IEC)", d: "Application for IEC." },
  { c: "reg", t: "12A / 80G", d: "Registration for trusts and NGOs." },
  { c: "reg", t: "PF / ESIC / PT", d: "Employer registrations and compliance." },
  { c: "reg", t: "PAN / TAN / DSC", d: "Application for PAN, TAN, and digital signatures." },
  { c: "acc", t: "Bookkeeping & Accounting", d: "Maintenance of books of account." },
  { c: "acc", t: "Financial Statements", d: "Preparation of statements as per applicable norms." },
  { c: "acc", t: "MIS Reporting", d: "Periodic management information reports." },
  { c: "acc", t: "Payroll Processing", d: "Salary computation and statutory deductions." },
  { c: "acc", t: "Virtual CFO Support", d: "Finance function support for businesses." },
  { c: "acc", t: "Account Reconciliation", d: "Bank, vendor, and ledger reconciliation." },
  { c: "adv", t: "Project Report & CMA", d: "Reports and CMA data for bank finance." },
  { c: "adv", t: "Due Diligence", d: "Financial and tax due diligence." },
  { c: "adv", t: "Certifications", d: "Net worth, turnover, and other certificates." },
  { c: "adv", t: "FEMA / RBI Matters", d: "Compliance support under FEMA." },
  { c: "adv", t: "Business Advisory", d: "Financial and regulatory advisory." },
];

const V = {
  bg: "#080D14", card: "rgba(255,255,255,0.035)", gold: "#E0AE5A", mint: "#67E8D0",
  indigo: "#7C6BF0", text: "#ECEAE1", mute: "#8B98A2", line: "rgba(236,234,225,0.11)",
};

/* Scroll-reveal wrapper */
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null); const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`rev ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

/* Count-up number */
function CountUp({ value }) {
  const ref = useRef(null); const [txt, setTxt] = useState("0");
  const num = parseInt(String(value).replace(/\D/g, ""), 10);
  const suffix = String(value).replace(/[0-9]/g, "");
  useEffect(() => {
    const el = ref.current; if (!el || isNaN(num)) { setTxt(value); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        io.disconnect(); const start = performance.now(); const dur = 1100;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur); const eased = 1 - Math.pow(1 - p, 3);
          setTxt(Math.round(num * eased) + suffix); if (p < 1) requestAnimationFrame(tick);
        }; requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el); return () => io.disconnect();
  }, [num, suffix, value]);
  return <span ref={ref}>{txt}</span>;
}

/* Tilt + glow card */
function TiltCard({ children, style }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return; const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5; const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg) translateY(-4px)`;
    el.style.setProperty("--gx", `${(px + 0.5) * 100}%`); el.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = ""; };
  return <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="tilt" style={style}>{children}</div>;
}

/* Magnetic button */
function Magnetic({ children, onClick, style, className }) {
  const ref = useRef(null);
  const onMove = (e) => { const el = ref.current; if (!el) return; const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`; };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = ""; };
  return <button ref={ref} onClick={onClick} onMouseMove={onMove} onMouseLeave={onLeave} className={`mag ${className || ""}`} style={style}>{children}</button>;
}

export default function CAFirmSite() {
  const [menu, setMenu] = useState(false);
  const [cat, setCat] = useState("audit");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorDot = useRef(null); const cursorRing = useRef(null);
  const [intro, setIntro] = useState(true);
  const gridCanvas = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // custom cursor
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = 0, ry = 0, dx = 0, dy = 0; let raf;
    const move = (e) => {
      dx = e.clientX; dy = e.clientY;
      if (cursorDot.current) cursorDot.current.style.transform = `translate(${dx}px, ${dy}px)`;
    };
    const loop = () => { rx += (dx - rx) * 0.15; ry += (dy - ry) * 0.15;
      if (cursorRing.current) cursorRing.current.style.transform = `translate(${rx}px, ${ry}px)`; raf = requestAnimationFrame(loop); };
    window.addEventListener("mousemove", move); loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  // intro loader
  useEffect(() => { const t = setTimeout(() => setIntro(false), 1700); return () => clearTimeout(t); }, []);

  // interactive generative dot-grid (canvas) — signature moment
  useEffect(() => {
    const canvas = gridCanvas.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf, dots = [], mouse = { x: -9999, y: -9999 };
    const spacing = 42;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let x = spacing / 2; x < w; x += spacing) for (let y = spacing / 2; y < h; y += spacing) dots.push({ x, y, bx: x, by: y });
    };
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const R = 130;
      for (const d of dots) {
        const dx = d.bx - mouse.x, dy = d.by - mouse.y; const dist = Math.hypot(dx, dy) || 0.001;
        let ox = 0, oy = 0, alpha = 0.10, size = 1.1;
        if (dist < R) { const f = 1 - dist / R; ox = (dx / dist) * f * 12; oy = (dy / dist) * f * 12; alpha = 0.10 + f * 0.55; size = 1.1 + f * 2.1; }
        d.x += (d.bx + ox - d.x) * 0.12; d.y += (d.by + oy - d.y) * 0.12;
        ctx.beginPath(); ctx.arc(d.x, d.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224,174,90,${alpha})`; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    if (reduce) { draw(); cancelAnimationFrame(raf); }
    else { draw(); window.addEventListener("mousemove", onMove); canvas.addEventListener("mouseleave", onLeave); }
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, []);

  const nav = [["Services", "services"], ["About", "about"], ["Approach", "approach"], ["AI", "ai"], ["Contact", "contact"]];
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenu(false); };
  const shown = SERVICES.filter((s) => s.c === cat);
  const stats = [["Est.", FIRM.estYear], ["Service categories", "7"], ["Compliance services", "40+"], ["Based", "Ujjain"]];
  const glyphs = ["₹", "%", "§", "44AB", "GST", "∑", "9C", "TDS"];
  const setF = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const sendEmail = async () => {
    if (!form.name.trim() || !form.message.trim()) { setStatus("error"); return; }
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: "New enquiry from your website", name: form.name, email: form.email, message: form.message }),
      });
      const data = await res.json();
      if (data.success) { setStatus("ok"); setForm({ name: "", email: "", message: "" }); } else setStatus("error");
    } catch { setStatus("error"); }
  };
  const sendWhatsApp = () => {
    const msg = `Hello Anish,\n\nName: ${form.name || "-"}\nEmail: ${form.email || "-"}\n\n${form.message || "I would like to get in touch."}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const inputStyle = { width: "100%", background: "rgba(255,255,255,0.04)", border: `1px solid ${V.line}`, color: V.text, padding: "12px 14px", borderRadius: 10, outline: "none", fontFamily: "inherit", fontSize: 14, marginBottom: 12 };

  return (
    <div style={{ backgroundColor: V.bg, color: V.text, fontFamily: "'Archivo', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { cursor: none; }
        @media (pointer: coarse){ * { cursor: auto; } .cursor-el { display:none !important; } }
        .disp { font-family:'Archivo',sans-serif; } .name { font-family:'Anton',sans-serif; letter-spacing:-0.01em; line-height:0.9; } .mono { font-family:'IBM Plex Mono',monospace; }
        .cursor-el { position: fixed; top:0; left:0; z-index:9999; pointer-events:none; border-radius:50%; margin-left:-4px; margin-top:-4px; }
        .rev { opacity:0; transform: translateY(24px); transition: opacity .8s cubic-bezier(.2,.7,.3,1), transform .8s cubic-bezier(.2,.7,.3,1); }
        .rev.in { opacity:1; transform:none; }
        @keyframes aurora1 { 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(8%,-6%) scale(1.25);} }
        @keyframes aurora2 { 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(-7%,7%) scale(1.15);} }
        @keyframes aurora3 { 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(6%,8%) scale(1.2);} }
        .au1 { animation: aurora1 20s ease-in-out infinite; } .au2 { animation: aurora2 26s ease-in-out infinite; } .au3 { animation: aurora3 23s ease-in-out infinite; }
        @keyframes floatG { 0%,100%{ transform: translateY(0) rotate(0);} 50%{ transform: translateY(-16px) rotate(4deg);} }
        @keyframes wordUp { from{ opacity:0; transform: translateY(120%) rotate(3deg);} to{ opacity:1; transform:none;} }
        .wrap-mask { overflow: hidden; display: inline-block; padding-bottom: .08em; }
        .word { display:inline-block; animation: wordUp .9s cubic-bezier(.2,.8,.2,1) both; }
        .grid-bg { background-image: linear-gradient(rgba(236,234,225,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,234,225,0.035) 1px, transparent 1px); background-size: 48px 48px; }
        .tilt { transition: transform .3s cubic-bezier(.2,.7,.3,1); position: relative; }
        .tilt::after { content:""; position:absolute; inset:0; border-radius:16px; background: radial-gradient(240px circle at var(--gx,50%) var(--gy,50%), rgba(224,174,90,0.14), transparent 60%); opacity:0; transition: opacity .3s; pointer-events:none; }
        .tilt:hover::after { opacity:1; }
        .svc-arrow { opacity:0; transform: translate(-4px,4px); transition: all .25s ease; }
        .tilt:hover .svc-arrow { opacity:1; transform:none; }
        .mag { transition: transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s ease, background .25s ease; }
        .tab { transition: all .22s ease; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${V.gold}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce){ .rev,.au1,.au2,.au3,.word,.tilt,.mag{ transition:none!important; animation:none!important; opacity:1!important; transform:none!important; } }
      `}</style>

      {/* Custom cursor */}
      <div ref={cursorDot} className="cursor-el" style={{ width: 8, height: 8, background: V.gold }} />
      <div ref={cursorRing} className="cursor-el" style={{ width: 34, height: 34, marginLeft: -17, marginTop: -17, border: `1px solid rgba(224,174,90,0.5)` }} />

      {/* Intro loader */}
      <div className="cursor-el-none" style={{ position: "fixed", inset: 0, zIndex: 9998, background: V.bg, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: intro ? "auto" : "none", opacity: intro ? 1 : 0, transition: "opacity .7s ease" }}>
        <div style={{ overflow: "hidden", paddingBottom: ".1em" }}>
          <div className="disp" style={{ fontSize: "clamp(1.6rem,5vw,3rem)", fontWeight: 600, letterSpacing: "-0.01em", animation: "wordUp 1s cubic-bezier(.2,.8,.2,1) both" }}>
            {FIRM.name}<span style={{ color: V.gold }}>.</span>
          </div>
        </div>
      </div>

      {/* Scroll progress spine */}
      <div style={{ position: "fixed", top: 0, left: 0, height: "100vh", width: 2, zIndex: 60, background: V.line }}>
        <div style={{ width: "100%", height: `${progress * 100}%`, background: `linear-gradient(${V.gold}, ${V.mint})`, transition: "height .1s linear" }} />
      </div>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50" style={{ backgroundColor: scrolled ? "rgba(8,13,20,0.82)" : "transparent", backdropFilter: scrolled ? "blur(14px)" : "none", borderBottom: `1px solid ${scrolled ? V.line : "transparent"}`, transition: "all .3s ease" }}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <button onClick={() => go("top")} className="disp text-lg font-semibold tracking-tight">{FIRM.name}</button>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {nav.map(([l, id]) => <button key={id} onClick={() => go(id)} className="tab" style={{ color: V.mute }} onMouseEnter={(e) => e.currentTarget.style.color = V.text} onMouseLeave={(e) => e.currentTarget.style.color = V.mute}>{l}</button>)}
            <Magnetic onClick={() => go("contact")} className="disp font-medium" style={{ fontSize: 14, padding: "8px 18px", borderRadius: 999, backgroundColor: V.gold, color: "#080D14" }}>Contact</Magnetic>
          </nav>
          <button className="md:hidden" onClick={() => setMenu((v) => !v)} aria-label="Menu">{menu ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menu && (
          <div className="md:hidden px-5 pb-4 flex flex-col gap-3" style={{ backgroundColor: "rgba(8,13,20,0.96)", borderBottom: `1px solid ${V.line}` }}>
            {nav.map(([l, id]) => <button key={id} onClick={() => go(id)} className="text-left py-1.5 text-sm" style={{ color: V.mute }}>{l}</button>)}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative grid-bg overflow-hidden" style={{ minHeight: "100vh" }}>
        <canvas ref={gridCanvas} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />
        {/* aurora mesh */}
        <div className="au1 pointer-events-none" style={{ position: "absolute", top: "-20%", right: "-10%", width: 620, height: 620, borderRadius: "50%", background: `radial-gradient(circle, rgba(224,174,90,0.20), transparent 62%)`, filter: "blur(28px)" }} />
        <div className="au2 pointer-events-none" style={{ position: "absolute", bottom: "-25%", left: "-15%", width: 640, height: 640, borderRadius: "50%", background: `radial-gradient(circle, rgba(124,107,240,0.16), transparent 62%)`, filter: "blur(30px)" }} />
        <div className="au3 pointer-events-none" style={{ position: "absolute", top: "30%", left: "40%", width: 460, height: 460, borderRadius: "50%", background: `radial-gradient(circle, rgba(103,232,208,0.10), transparent 62%)`, filter: "blur(26px)" }} />
        {/* floating theme glyphs */}
        {glyphs.map((g, i) => (
          <span key={i} className="mono pointer-events-none hidden md:block" style={{
            position: "absolute", color: "rgba(236,234,225,0.07)", fontSize: [22, 34, 18, 28, 20, 40, 24, 30][i],
            top: `${[18, 70, 40, 80, 26, 60, 12, 50][i]}%`, left: `${[12, 20, 82, 70, 55, 88, 40, 8][i]}%`,
            animation: `floatG ${7 + i}s ease-in-out ${i * 0.6}s infinite`,
          }}>{g}</span>
        ))}

        <div className="relative max-w-6xl mx-auto px-5 flex flex-col justify-center" style={{ minHeight: "100vh", zIndex: 2 }}>
          <div className="mono text-[12px] tracking-[0.3em] uppercase mb-6 flex items-center gap-3" style={{ color: V.gold, animation: "wordUp .8s ease both" }}>
            <span style={{ width: 28, height: 1, background: V.gold }} /> Est. {FIRM.estYear} · Ujjain, India
          </div>
          <h1 className="name" style={{ fontSize: "clamp(1.9rem, 5.2vw, 3.6rem)", textTransform: "uppercase" }}>
            <span className="wrap-mask"><span className="word" style={{ animationDelay: "0.15s", color: V.text }}>Anish</span></span><br />
            <span className="wrap-mask"><span className="word" style={{ animationDelay: "0.30s", color: V.gold }}>Choudhary</span></span>
          </h1>
          <div className="mono mt-5 text-sm tracking-[0.25em] uppercase" style={{ color: V.mute, animation: "wordUp .8s ease .45s both" }}>Chartered Accountant · Independent Practice</div>
          <p className="mt-7 text-lg max-w-xl leading-relaxed" style={{ color: V.mute, animation: "wordUp .8s ease .7s both" }}>
            An independent Chartered Accountant — not a firm — using AI to work faster and sharper, from audit and tax to building things like this website.
          </p>
          <div className="mt-9 flex flex-wrap gap-3" style={{ animation: "wordUp .8s ease .85s both" }}>
            <Magnetic onClick={() => go("services")} className="disp font-medium" style={{ padding: "13px 26px", borderRadius: 999, backgroundColor: V.gold, color: "#080D14", display: "flex", alignItems: "center", gap: 8 }}>
              View services <ArrowRight size={17} />
            </Magnetic>
            <Magnetic onClick={() => go("contact")} className="disp font-medium" style={{ padding: "13px 26px", borderRadius: 999, border: `1px solid ${V.line}`, color: V.text, background: "transparent" }}>
              Get in touch
            </Magnetic>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: V.line, border: `1px solid ${V.line}`, animation: "wordUp .8s ease 1s both" }}>
            {stats.map(([l, v], i) => (
              <div key={i} className="p-5" style={{ backgroundColor: V.bg }}>
                <div className="disp text-3xl font-semibold" style={{ color: V.gold }}><CountUp value={v} /></div>
                <div className="mono text-[10px] tracking-[0.15em] uppercase mt-2" style={{ color: V.mute }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-5 py-24">
        <Reveal>
          <div className="mono text-[12px] tracking-[0.25em] uppercase mb-3" style={{ color: V.gold }}>What we do</div>
          <h2 className="disp text-3xl md:text-5xl font-semibold max-w-2xl leading-tight">A full range of chartered accountancy services.</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2 mt-10 mb-10">
            {CATS.map((cObj) => {
              const active = cat === cObj.id; const Icon = cObj.icon;
              return (
                <button key={cObj.id} onClick={() => setCat(cObj.id)} className="tab flex items-center gap-2 px-4 py-2.5 rounded-full text-sm disp font-medium"
                  style={{ backgroundColor: active ? V.gold : "transparent", color: active ? "#080D14" : V.mute, border: `1px solid ${active ? V.gold : V.line}` }}>
                  <Icon size={15} /> {cObj.label}
                </button>
              );
            })}
          </div>
        </Reveal>
        <div key={cat} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((s, i) => (
            <div key={s.t} style={{ animation: `wordUp .5s ease ${i * 0.05}s both` }}>
              <TiltCard style={{ borderRadius: 16, backgroundColor: V.card, border: `1px solid ${V.line}`, padding: 24, height: "100%" }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="disp text-lg font-medium">{s.t}</h3>
                  <ArrowUpRight size={18} className="svc-arrow shrink-0" style={{ color: V.gold }} />
                </div>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: V.mute }}>{s.d}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24" style={{ borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}` }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="mono text-[12px] tracking-[0.25em] uppercase mb-4" style={{ color: V.gold }}>About the firm</div>
            <h2 className="disp text-3xl md:text-4xl font-semibold leading-tight mb-6">Precision, independence, and professional care.</h2>
            <p className="text-base leading-relaxed" style={{ color: V.mute }}>
              {FIRM.name} is a Chartered Accountant based in {FIRM.city}, working with individuals, proprietors, partnerships, and companies across India. Services are provided both online and in person, in accordance with the applicable standards and professional guidelines issued by the Institute of Chartered Accountants of India.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: V.line, border: `1px solid ${V.line}` }}>
              {[["Practitioner", "Anish Choudhary"], ["Since", FIRM.estYear], ["Based in", "Ujjain"], ["Mode", "Online"]].map(([l, v], i) => (
                <div key={i} className="p-6" style={{ backgroundColor: V.bg }}>
                  <div className="mono text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: V.mute }}>{l}</div>
                  <div className="disp text-lg" style={{ color: V.text }}>{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="max-w-6xl mx-auto px-5 py-24">
        <Reveal>
          <div className="mono text-[12px] tracking-[0.25em] uppercase mb-3" style={{ color: V.gold }}>How we work</div>
          <h2 className="disp text-3xl md:text-5xl font-semibold max-w-2xl leading-tight mb-14">A clear, structured engagement process.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4">
          {[["01", "Understand", "Review requirements, applicable law, and timelines for the engagement."],
            ["02", "Execute", "Carry out the work as per applicable standards, with documentation."],
            ["03", "Report & Comply", "Deliver deliverables and file the required statutory forms."]].map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 100}>
              <TiltCard style={{ borderRadius: 16, backgroundColor: V.card, border: `1px solid ${V.line}`, padding: 28, height: "100%" }}>
                <div className="disp text-4xl font-bold mb-4" style={{ color: V.gold }}>{n}</div>
                <h3 className="disp text-xl font-medium mb-3">{t}</h3>
                <p className="text-sm leading-relaxed" style={{ color: V.mute }}>{d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology & AI */}
      <section id="ai" className="relative py-24" style={{ borderTop: `1px solid ${V.line}` }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mono text-[12px] tracking-[0.25em] uppercase mb-3" style={{ color: V.gold }}>Technology & AI</div>
            <h2 className="disp text-3xl md:text-5xl font-bold max-w-3xl leading-tight mb-6">A Chartered Accountant who works with AI.</h2>
            <p className="text-base md:text-lg max-w-2xl leading-relaxed mb-14" style={{ color: V.mute }}>
              Compliance work is precise and repetitive — exactly where modern AI tools help. I use them to speed up
              research, drafting, and review, so more time goes into judgement and less into busywork. This website
              itself was designed and built using AI.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["AI-assisted workflows", "Research, drafting, and reconciliation supported by modern AI tools."],
              ["Faster turnaround", "Automating repetitive steps to focus on analysis and judgement."],
              ["Built with AI", "This site was designed and developed using AI — as a working demonstration."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 100}>
                <TiltCard style={{ borderRadius: 16, backgroundColor: V.card, border: `1px solid ${V.line}`, padding: 28, height: "100%" }}>
                  <h3 className="disp text-xl font-semibold mb-3">{t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: V.mute }}>{d}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 grid-bg" style={{ borderTop: `1px solid ${V.line}` }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="mono text-[12px] tracking-[0.25em] uppercase mb-3" style={{ color: V.gold }}>Get in touch</div>
            <h2 className="disp text-3xl md:text-5xl font-semibold mb-12">Contact</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left: details */}
            <div className="grid gap-4">
              {[[Globe, "Availability", FIRM.availability], [Phone, "Phone", FIRM.phone], [Mail, "Email", FIRM.email], [Clock, "Office hours", FIRM.hours]].map(([Icon, l, v], i) => (
                <Reveal key={i} delay={i * 80}>
                  <TiltCard style={{ borderRadius: 16, backgroundColor: V.card, border: `1px solid ${V.line}`, padding: 20, display: "flex", gap: 14 }}>
                    <Icon size={19} style={{ color: V.gold, marginTop: 2, flexShrink: 0 }} />
                    <div>
                      <div className="mono text-[10px] tracking-[0.15em] uppercase mb-1.5" style={{ color: V.mute }}>{l}</div>
                      <div className="text-sm" style={{ color: V.text }}>{v}</div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            {/* Right: message form (no <form> tag) */}
            <Reveal delay={120}>
              <div style={{ borderRadius: 16, background: V.card, border: `1px solid ${V.line}`, padding: 24 }}>
                <div className="mono text-[10px] tracking-[0.15em] uppercase mb-4" style={{ color: V.mute }}>Send a message</div>
                <input aria-label="Your name" placeholder="Your name" value={form.name} onChange={(e) => setF("name", e.target.value)} style={inputStyle} />
                <input aria-label="Your email" placeholder="Your email" value={form.email} onChange={(e) => setF("email", e.target.value)} style={inputStyle} />
                <textarea aria-label="Your message" placeholder="Your message" rows={4} value={form.message} onChange={(e) => setF("message", e.target.value)} style={{ ...inputStyle, resize: "vertical" }} />
                <div className="flex flex-wrap gap-3 mt-1">
                  <Magnetic onClick={sendEmail} className="disp font-medium" style={{ padding: "12px 22px", borderRadius: 999, backgroundColor: V.gold, color: "#080D14", display: "flex", alignItems: "center", gap: 8, opacity: status === "sending" ? 0.7 : 1 }}>
                    <Send size={16} /> {status === "sending" ? "Sending…" : "Send message"}
                  </Magnetic>
                  <Magnetic onClick={sendWhatsApp} className="disp font-medium" style={{ padding: "12px 22px", borderRadius: 999, border: `1px solid ${V.line}`, color: V.text, background: "transparent", display: "flex", alignItems: "center", gap: 8 }}>
                    <MessageCircle size={16} /> WhatsApp
                  </Magnetic>
                </div>
                {status === "ok" && <div className="text-sm mt-4" style={{ color: V.mint }}>Thanks — your message has been sent.</div>}
                {status === "error" && <div className="text-sm mt-4" style={{ color: V.mute }}>Add your name and message, or reach out on WhatsApp.</div>}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: `1px solid ${V.line}` }}>
        <div className="max-w-6xl mx-auto px-5 py-10">
          <div className="disp text-xl font-semibold mb-1">{FIRM.name}</div>
          <div className="mono text-[11px] mb-4" style={{ color: V.gold }}>Designed &amp; built with AI · Anish Choudhary</div>
          <p className="mono text-[11px] leading-relaxed max-w-2xl" style={{ color: V.mute }}>
            This website is intended to provide general information about {FIRM.name} and its services. It is not an advertisement or a solicitation of work. The information provided is not a substitute for professional advice. © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
