import { CheckCircle2, Download, Briefcase, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import './About.css';

const highlights = [
  'Clean, scalable Laravel architecture',
  'REST API design & integration',
  'Production database optimization',
  'Real business problem solving',
];



export default function About() {
  return (
    <section className="about site-section" id="about">
      <div className="about-header site-container">
        <span className="about-label">
          <Sparkles size={14} className="label-icon" />
          About Me
        </span>
        <h2 className="page-heading">Meet the Developer</h2>
      </div>

      <div className="about-layout site-container">
        {/* LEFT: Visual */}
        <div className="about-visual">

          <div className="about-tech-badge">
            <Code2 size={14} />
            <span>Laravel · React · MySQL</span>
          </div>

          <div className="about-photo-card">
            <div className="about-photo-inner">
              <img src="/images/Profile.png" alt="Muhammad Usman" />
            </div>
          </div>

          <div className="about-name-badge">
            <h3 className="about-name">Muhammad Usman</h3>
            <p className="about-role">Full Stack Developer</p>
          </div>

          {/* <div className="about-floating-badge">
            <div className="about-floating-badge-icon">
              <Briefcase size={18} />
            </div>
          
          </div> */}
        </div>

        {/* RIGHT: Content */}
        <div className="about-content">



          <h2 className="about-title">
            Turning ideas into{' '}
            <span className="highlight">reliable software</span>
          </h2>

          <p className="about-desc">
            I'm a Full Stack Developer specializing in Laravel, React, and MySQL, with experience building ERP systems, CRM solutions, MVPs, SaaS platforms, admin dashboards, custom websites, and business applications. I focus on creating clean, secure, scalable, and production-ready solutions tailored to real business needs.
          </p>

          <p className="about-desc">
            Over the years, I've worked across HR platforms, healthcare systems,
            logistics tools, and e-commerce marketplaces. I specialize in solving real problems
            for real businesses, not just writing code. I focus on backend logic,
            secure APIs, and databases that scale, while making sure the frontend
            feels just as polished.
          </p>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div
                className="about-highlight-item"
                key={item}
                style={{ '--item-index': index }}
              >
                <div className="about-highlight-icon">
                  <CheckCircle2 size={14} />
                </div>
                <div className="about-highlight-text">
                  {item}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="about-stats">
            {stats.map((stat, index) => (
              <div className="about-stat" key={stat.label}>
                <div className="about-stat-num">
                  <span>{stat.num}</span>
                </div>
                <div className="about-stat-label">
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div> */}

          <div className="about-actions">

            <a
              href="/resume/Muhammad-Usman-Resume.pdf"
              download="Muhammad-Usman-Resume.pdf"
              className="about-btn"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>


            {/* <button className="about-btn-outline">
              <span>View Projects</span>
              <ArrowUpRight size={18} />
            </button> */}
            <a href="#projects" className="about-btn-outline">
              <ArrowUpRight size={20} />
              View Projects
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
