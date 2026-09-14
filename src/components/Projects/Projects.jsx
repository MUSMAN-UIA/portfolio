import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import './projects.css';

const categories = ['All', 'SaaS', 'HR & Payroll', 'ERP', 'Product Safety'];

const featuredProjects = [
  {
    title: 'dotHRM',
    category: 'HR & Payroll',
    tags: ['HRM', 'SaaS', 'Featured'],
    subtitle: 'AI-Powered HRM & Workforce Management Platform',
    desc: 'Built a complete HR and workforce management platform with employee lifecycle, attendance, leave, payroll, performance tracking, recruitment, role-based administration, and an AI HR chatbot, all in one centralized system.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API'],
    image: '/images/Projects/dotHRM.png',
    link: 'https://dothrm.com/',
  },
  {
    title: 'CareSlot',
    category: 'SaaS',
    tags: ['Healthcare', 'SaaS'],
    subtitle: 'Healthcare Appointment & Patient Management Platform',
    desc: 'Developed a healthcare appointment and patient management system connecting patients, doctors, and admins. Doctor discovery, booking, video consultations, scheduling, payments, and centralized administration.',
    tech: ['Laravel', 'MySQL', 'REST API', 'Payment Integration'],
    image: '/images/Projects/CareSlot.png',
    link: 'https://careslotdev.scriptro.com/',
  },
  {
    title: 'Employee Management System',
    category: 'ERP',
    tags: ['HR Management', 'ERP'],
    subtitle: 'Full-Stack Employee Management Platform',
    desc: 'Built a full-stack, role-based employee management platform featuring real-time task tracking with a live Kanban board, automated leave approval workflows, instant team chat, and interactive analytics dashboards synced via WebSockets.',
    tech: ['Laravel', 'React', 'MySQL', 'REST APIs', 'Pusher/WebSockets'],
    image: '/images/Projects/EMS.png',
    link: '#',
  },
];

const gridProjects = [
  {
    title: 'OKO Test',
    category: 'Product Safety',
    tag: 'Product Safety',
    desc: 'Developed a comprehensive product safety and testing platform for the European market, allowing users to verify product authenticity.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'REST APIs', 'Bootstrap'],
    image: '/images/Projects/OKO-Test.png',
    link: 'https://okotest.scriptro.com/',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Dynamic filter logic for both sections
  const filteredFeatured = featuredProjects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  const filteredGrid = gridProjects.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <section className="projects site-section" id="projects">
      {/* Background Glow Overlay */}
      <div className="projects-bg-glow" aria-hidden="true" />

      <div className="projects-container site-container">
        {/* Header Section */}
        <div className="projects-header">
          <div className="projects-header-info">
            <span className="projects-label">
               <Sparkles size={14} className="label-icon" />
               Portfolio
               </span>
            <h2 className="page-heading">Selected Work</h2>
            <p className="projects-sub">
              Real projects, built to solve real business problems using Laravel, React & MySQL.
            </p>
          </div>

          <div className="projects-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="featured-projects-list">
          {filteredFeatured.map((project, index) => (
            <article
              key={project.title}
              className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              <div className="project-media">
                <div className="media-overlay" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-media-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-media-placeholder">
                    <span>{project.title} Preview</span>
                  </div>
                )}
              </div>

              <div className="project-info">
                <div className="project-top-row">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`project-tag ${tag === 'Featured' ? 'featured' : ''}`}
                      >
                        {tag === 'Featured' && <Sparkles size={12} className="tag-icon" /> }
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="project-live-link" target="_blank" rel="noreferrer">
                    <ExternalLink size={15} />
                    <span>Live Website</span>
                  </a>
                </div>

                <h3 className="project-name">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Grid Section for standard projects */}
        {filteredGrid.length > 0 && (
          <div className="projects-grid-section">
            <div className="projects-grid">
              {filteredGrid.map((project) => (
                <div key={project.title} className="grid-card">
                  <div className="grid-card-media">
                    <div className="media-overlay" />
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="grid-card-img"
                        loading="lazy"
                      />
                    ) : (
                      <div className="grid-card-media-placeholder">
                        {project.title}
                      </div>
                    )}
                  </div>

                  <div className="grid-card-body">
                    <span className="grid-card-tag">{project.tag}</span>
                    <h4 className="grid-card-title">{project.title}</h4>
                    <p className="grid-card-desc">{project.desc}</p>

                    <div className="grid-card-tech">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>

                    <div className="grid-card-footer">
                      <a href={project.link} className="grid-card-link" target="_blank" rel="noreferrer">
                        <ExternalLink size={14} />
                        <span>Live Website</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
