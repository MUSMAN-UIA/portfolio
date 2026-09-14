import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Code2,
  LayoutDashboard,
  Database,
  Rocket,
  Users,
  FolderKanban,
  Smile,
  ChevronRight,
  Braces,
  Cloud,
} from 'lucide-react';

import './Hero.css';

export default function Hero() {
  const codeLines = [
    'class FullStackDeveloper',
    '{',
    '    public function build()',
    '    {',
    '        return [',
    "            'Web Apps',",
    "            'APIs',",
    "            'Scalable Systems'",
    '        ];',
    '    }',
    '}',
  ];

  const [displayedLines, setDisplayedLines] = useState(
    codeLines.map(() => '')
  );
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const restart = setTimeout(() => {
        setDisplayedLines(codeLines.map(() => ''));
        setLineIndex(0);
        setCharIndex(0);
      }, 3000);

      return () => clearTimeout(restart);
    }

    const currentLine = codeLines[lineIndex];

    if (charIndex < currentLine.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });

        setCharIndex((prev) => prev + 1);
      }, 35);

      return () => clearTimeout(typingTimeout);
    }

    const nextLineTimeout = setTimeout(() => {
      setLineIndex((prev) => prev + 1);
      setCharIndex(0);
    }, 180);

    return () => clearTimeout(nextLineTimeout);
  }, [charIndex, lineIndex]);

  const features = [
    {
      icon: <Code2 size={22} />,
      title: 'Backend Logic',
      subtitle: 'Laravel, APIs & Auth',
    },
    {
      icon: <LayoutDashboard size={22} />,
      title: 'Dashboards',
      subtitle: 'Admin & Business Tools',
    },
    {
      icon: <Database size={22} />,
      title: 'Databases',
      subtitle: 'MySQL Optimization',
    },
    {
      icon: <Rocket size={22} />,
      title: 'Deployment',
      subtitle: 'Servers & Production',
    },
  ];

  const skills = [
    { icon: <Braces size={23} />, name: 'Laravel' },
    { icon: <Code2 size={23} />, name: 'React' },
    { icon: <Database size={23} />, name: 'MySQL' },
    { icon: <Cloud size={23} />, name: 'REST APIs' },
    { icon: <Rocket size={23} />, name: 'SaaS Apps' },
  ];

  return (
    <section className="hero site-section" id="hero">
      {/* Background Effects */}
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
      <div className="hero-grid-bg"></div>

      <div className="hero-container site-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for new projects
            <ArrowUpRight size={15} />
          </div>

          <h1 className="hero-title">
            I build web <br />
            systems that are <br />

            <span className="gradient-text">
              clean, secure
            </span>

            <br />

            and scalable.
          </h1>

          <p className="hero-description">
            From SaaS platforms and admin dashboards to REST APIs and
            multi-tenant systems. I turn complex business requirements
            into reliable, production-ready applications.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              <ArrowUpRight size={20} />
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              <MessageCircle size={20} />
              Let's Talk
            </a>

          </div>

          {/* SKILLS */}
          <div className="skills-row">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div className="stat-item">
              <div className="stat-icon">
                <Users size={30} />
              </div>

              <div>
                <div className="stat-number">1+</div>
                <div className="stat-label">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon">
                <FolderKanban size={30} />
              </div>

              <div>
                <div className="stat-number">2+</div>
                <div className="stat-label">
                  Projects Delivered
                </div>
              </div>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <div className="stat-icon">
                <Smile size={30} />
              </div>

              <div>
                <div className="stat-number">1+</div>
                <div className="stat-label">
                  Happy Clients
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT CONTENT */}
        <div className="hero-right">

          {/* Decorative Circle */}
          <div className="developer-orb"></div>

          {/* OPTIONAL IMAGE AREA */}
          <div className="developer-image">
            <div className="image-overlay"></div>

            <div className="developer-placeholder">
              <span>MU</span>
            </div>
          </div>


          {/* CODE EDITOR */}
          <div className="code-editor">

            <div className="editor-header">

              <div className="editor-dots">
                <span className="red-dot"></span>
                <span className="yellow-dot"></span>
                <span className="green-dot"></span>
              </div>

              <div className="editor-file">
                <Code2 size={17} />
                developer.php
              </div>

            </div>


            <div className="editor-body">

              {codeLines.map((_, index) => (
                <div className="code-line" key={index}>

                  <span className="line-number">
                    {index + 1}
                  </span>

                  <code>
                    {displayedLines[index]}
                    {index === lineIndex &&
                      lineIndex < codeLines.length && (
                        <span className="typing-cursor">|</span>
                      )}
                  </code>

                </div>
              ))}

            </div>
          </div>


          {/* FEATURE CARDS */}
          <div className="feature-grid">

            {features.map((feature, index) => (
              <div
                className="feature-card"
                key={index}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.subtitle}</p>
                </div>

                <div className="feature-arrow">
                  <ChevronRight size={18} />
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
