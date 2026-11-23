import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, BriefcaseBusiness, Building2, Code2, Compass, Download, Linkedin, Mail, Menu, Network, ShieldCheck, Sparkles, Target, Users, X } from 'lucide-react';
import './styles.css';

// Update these values with your preferred public contact details before publishing.
const PROFILE = {
  email: '',
  linkedin: '',
  resumeUrl: '',
};

const expertise = [
  ['Technology & Delivery Leadership', 'Building accountable teams, delivery governance and operating models.'],
  ['Program & Portfolio Management', 'Driving complex programs, stakeholder alignment, risk and execution.'],
  ['Fintech, BFSI & Core Banking', 'Digital lending, transaction banking, CBS modernization and payments.'],
  ['Enterprise Applications', 'ERP, HRMS, integrations, application support and modernization.'],
  ['Digital Government & e-Governance', 'Large-scale citizen, public-sector and institutional technology programs.'],
  ['Business & P&L Management', 'Commercial ownership, client relationships, pre-sales and operational performance.'],
];
const career = [
  { company: 'AnalyticsFox Software', role: 'Director – Operations & Delivery', note: 'Leadership across product delivery, fintech platforms, client outcomes and operational execution.', tag: 'Fintech · SaaS' },
  { company: 'EY', role: 'Technology Consulting', note: 'Technology consulting and transformation programs across public sector, e-Governance and enterprise initiatives.', tag: 'Consulting · e-Governance' },
  { company: 'HCL Technologies', role: 'Technology & Delivery', note: 'Enterprise technology delivery, client engagement and large-program execution.', tag: 'Enterprise IT' },
  { company: 'Tech Mahindra', role: 'Technology & Delivery', note: 'Experience across technology services, delivery coordination and client-focused execution.', tag: 'Technology Services' },
];
const credentials = ['PMP', 'PSM-II', 'MCP', 'OCP', 'CSM', 'ITIL'];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = [['About', '#about'], ['Expertise', '#expertise'], ['Experience', '#experience'], ['Credentials', '#credentials']];
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AT</span><span>ASHUTOSH TRIVEDI<small>TECHNOLOGY LEADER</small></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-glow"></div>
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> OPEN TO LEADERSHIP OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Ashutosh<br/><span>Trivedi.</span></h1>
          <p className="hero-role">Technology Leader <i>·</i> Delivery Head <i>·</i> Digital Transformation</p>
          <p className="hero-intro">I lead technology delivery, enterprise transformation and high-performing teams — connecting business priorities with reliable execution and measurable outcomes.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Let's discuss an opportunity <ArrowUpRight size={17}/></a><a className="text-link" href="#about">Explore my profile <ArrowRight size={16}/></a></div>
          <div className="hero-meta"><span><Compass size={15}/> Navi Mumbai, India</span><span><BriefcaseBusiness size={15}/> 20+ years in technology</span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="profile-card"><div className="profile-monogram">AT</div><div className="profile-card-bottom"><span>LEADERSHIP<br/>THROUGH DELIVERY</span><Sparkles size={19}/></div></div>
          <div className="floating-note note-top"><span className="note-icon"><Target size={17}/></span><span><b>Business aligned</b><small>Technology strategy</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon"><Users size={17}/></span><span><b>People focused</b><small>Teams & outcomes</small></span></div>
          <div className="visual-caption">STRATEGY <span>×</span> EXECUTION <span>×</span> IMPACT</div>
        </div>
        <div className="hero-index">01 <span></span> 04</div>
      </section>

      <section className="stats-strip" aria-label="Career highlights">
        <div><strong>20<span>+</span></strong><small>Years in technology</small></div><div><strong>₹15<span> Cr</span></strong><small>P&L responsibility</small></div><div><strong>40<span>+</span></strong><small>Engineering & QA team</small></div><div><strong>3,000<span>+</span></strong><small>Platform users</small></div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-label">01 / ABOUT ME</div><div className="about-grid"><div><h2>Turning complex<br/>technology into<br/><em>business progress.</em></h2></div><div className="about-copy"><p className="lead">A technology and delivery leader with over two decades of experience spanning consulting, enterprise applications, fintech and digital transformation.</p><p>My work sits at the intersection of business strategy, technology execution and people leadership. I enjoy bringing structure to complexity — aligning stakeholders, strengthening delivery practices and helping teams deliver solutions that create lasting value.</p><p>Across my career, I have contributed to enterprise and public-sector initiatives, led delivery teams, supported client growth and worked across the full lifecycle from discovery and solution shaping to implementation and operational stability.</p><div className="about-pills"><span>Client partnership</span><span>Delivery governance</span><span>Transformation</span></div></div></div>
      </section>

      <section className="section expertise-section" id="expertise"><div className="section-heading"><div><div className="section-label">02 / WHAT I DO</div><h2>Leadership across<br/><em>the technology lifecycle.</em></h2></div><p>Combining strategic perspective with hands-on delivery discipline to move initiatives from ambition to outcomes.</p></div><div className="expertise-grid">{expertise.map(([title, desc], i) => <article className="expertise-card" key={title}><div className="card-top"><span>0{i+1}</span>{[<Network/>,<Target/>,<ShieldCheck/>,<Code2/>,<Building2/>,<BriefcaseBusiness/>][i]}</div><h3>{title}</h3><p>{desc}</p><div className="card-line"></div></article>)}</div></section>

      <section className="section experience-section" id="experience"><div className="section-label">03 / CAREER JOURNEY</div><div className="experience-heading"><h2>Experience that<br/><em>connects the dots.</em></h2><p>A career shaped by technology services, consulting, enterprise delivery and product-led fintech environments.</p></div><div className="timeline">{career.map((item, i) => <article className="timeline-item" key={item.company}><div className="timeline-marker">0{i+1}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{item.company}</h3><h4>{item.role}</h4></div><span className="timeline-tag">{item.tag}</span></div><p>{item.note}</p></div></article>)}</div><p className="career-note">Role descriptions are concise profile summaries. Add exact employment dates and titles before publishing if you want a detailed CV-style timeline.</p></section>

      <section className="credentials-section" id="credentials"><div className="credentials-inner"><div><div className="section-label light">04 / PROFESSIONAL CREDENTIALS</div><h2>Built on discipline.<br/><em>Driven by curiosity.</em></h2><p>Professional certifications supporting a foundation in project management, agile delivery, technology and service management.</p></div><div className="credential-grid">{credentials.map((c, i) => <div className="credential" key={c}><span>0{i+1}</span><strong>{c}</strong><small>{({PMP:'Project Management', 'PSM-II':'Professional Scrum Master', MCP:'Microsoft Certified Professional', OCP:'Oracle Certified Professional', CSM:'Certified ScrumMaster', ITIL:'IT Service Management'})[c]}</small></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-orb"></div><div className="section-label">LET'S BUILD WHAT'S NEXT</div><h2>Good things happen<br/>when <em>people connect.</em></h2><p>Exploring senior opportunities in technology leadership, delivery, program management and enterprise transformation.</p><div className="contact-actions">{PROFILE.email ? <a className="button button-primary" href={`mailto:${PROFILE.email}`}> <Mail size={17}/> Email me <ArrowUpRight size={16}/></a> : <a className="button button-primary" href="mailto:?subject=Professional%20opportunity%20for%20Ashutosh%20Trivedi"><Mail size={17}/> Start an email <ArrowUpRight size={16}/></a>}{PROFILE.linkedin ? <a className="button button-outline" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={16}/></a> : <span className="contact-hint">Add your LinkedIn URL in src/main.jsx</span>}</div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">AT</span><span>ASHUTOSH TRIVEDI<small>TECHNOLOGY LEADER</small></span></a><span>© {new Date().getFullYear()} Ashutosh Trivedi. All rights reserved.</span><a href="#home" className="back-top">Back to top ↑</a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
