import { Briefcase, Calendar, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Bitlogicx (Currently Working)',
    period: '2025 — Present',
    tech: ['Laravel', 'React', 'MySQL', 'REST APIs', 'SaaS Architecture'],
    points: [
      'Developing and maintaining production SaaS platforms used by clients across USA, Europe and Pakistan.',
      'Built complex admin dashboards, REST APIs, and role-based access systems using Laravel & React.',
      'Collaborated with cross-functional teams to design scalable database structures in MySQL.',
    ],
  },
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2025 — Present',
    tech: ['Laravel', 'Vue.js', 'React', 'PHP', 'Tailwind CSS'],
    points: [
      'Delivered production-ready web systems for international clients on Upwork and direct contracts.',
      'Built custom business websites, admin panels, and management systems for multiple industries.',
      'Handled full project lifecycle — planning, development, deployment, and client support.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience site-section" id="experience">
      {/* Background Ambient Glow */}
      <div className="experience-bg-glow" aria-hidden="true" />

      <div className="experience-container site-container">
        {/* Header Section */}
        <div className="experience-header">
          <span className="experience-label">
            <Sparkles size={14} className="label-icon" />
            My Journey
          </span>
          <h2 className="page-heading">Experience</h2>
          <p className="experience-sub">
            Hands-on experience building production platforms, admin systems, APIs, databases,
            integrations, and deployment workflows for real business operations.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="timeline">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.role + exp.company}>
              {/* Timeline Connector Dot with Pulser */}
              <div className="timeline-dot-container">
                <div className="timeline-dot">
                  <Briefcase size={12} className="dot-icon" />
                </div>
                <div className="timeline-dot-pulse" />
              </div>

              {/* Timeline Card Content */}
              <div className="timeline-card">
                <div className="timeline-card-border-glow" aria-hidden="true" />
                
                <div className="timeline-top">
                  <div className="timeline-role-group">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">
                      <Building2 size={14} className="company-icon" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="timeline-period">
                    <Calendar size={13} className="calendar-icon" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>
                      <CheckCircle2 size={15} className="point-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="timeline-tech-stack">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
