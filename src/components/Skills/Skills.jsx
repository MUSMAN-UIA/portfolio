import React, { useRef } from 'react';
import { Layout, Server, Database, Cloud, Shield, Bot, Sparkles } from 'lucide-react';
import './Skills.css';

const progressSkills = [
  { name: 'Full Stack Development', percent: 92 },
  { name: 'Laravel / PHP', percent: 90 },
  { name: 'React.js', percent: 85 },
  { name: 'REST API Design', percent: 88 },
  { name: 'MySQL / Database Design', percent: 87 },
];

const skillCategories = [
  {
    icon: <Layout size={20} />,
    name: 'Frontend',
    list: 'React.js, Vite, Tailwind CSS, JavaScript, HTML/CSS',
  },
  {
    icon: <Server size={20} />,
    name: 'Backend',
    list: 'Laravel, PHP, REST APIs, Vue, Sanctum, Spatie Permissions',
  },
  {
    icon: <Database size={20} />,
    name: 'Database',
    list: 'MySQL, Query Optimization, Schema Design',
  },
  {
    icon: <Cloud size={20} />,
    name: 'DevOps',
    list: 'Git, GitHub, Server Deployment, CI/CD Basics',
  },
  {
    icon: <Shield size={20} />,
    name: 'Security',
    list: 'Authentication, Role-Based Access, Data Protection',
  },
  {
    icon: <Bot size={20} />,
    name: 'AI Integration',
    list: 'OpenAI API, Chatbots, Workflow Automation',
  },
];

export default function Skills() {
  const cardRef = useRef(null);

  // Dynamic 3D tilt effect on progress card hover
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max tilt deg
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  return (
    <section className="skills site-section" id="skills">
      {/* Background ambient lighting subtle glow */}
      <div className="skills-glow-bg" aria-hidden="true" />
      <div className="skills-grid-pattern" aria-hidden="true" />

      <div className="skills-container site-container">
        <div className="skills-header">
          <span className="skills-label">
            <Sparkles size={14} className="label-icon" />
            Technical Skills
          </span>
          <h2 className="page-heading">What I Work With</h2>
          <p className="skills-sub">
            A full product stack for designing interfaces, building server-side logic,
            connecting APIs, and keeping projects production-ready.
          </p>
        </div>

        <div className="skills-layout">
          {/* LEFT: Progress bars card with Interactive Spotlight & 3D Tilt */}
          <div
            className="skills-progress-card spotlight-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-spotlight" />
            {progressSkills.map((skill, index) => (
              <div
                className="skill-bar-item"
                key={skill.name}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="skill-bar-top">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-percent">{skill.percent}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{
                      '--progress': `${skill.percent}%`,
                      width: `${skill.percent}%`,
                    }}
                  >
                    <span className="skill-bar-shimmer" />
                    <span className="skill-bar-glow-pin" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Category cards with Staggered Entrance & Interactive Hover */}
          <div className="skills-categories">
            {skillCategories.map((cat, index) => (
              <div
                className="skill-category-card"
                key={cat.name}
                style={{ '--card-index': index }}
              >
                <div className="skill-category-icon-wrapper">
                  <div className="skill-category-icon">{cat.icon}</div>
                  <div className="icon-pulse-ring" />
                </div>
                <div className="skill-category-content">
                  <div className="skill-category-name">{cat.name}</div>
                  <div className="skill-category-list">{cat.list}</div>
                </div>
                <span className="card-corner-border" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}