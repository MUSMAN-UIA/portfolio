
import { useEffect, useState } from 'react';
import { Menu, X, } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  /* Keep the highlighted link aligned with the section below the fixed navbar. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const updateActiveSection = () => {
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight ?? 0;
      const activationLine = navbarHeight + window.innerHeight * 0.2;
      let currentSection = sections[0]?.id ?? 'hero';

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection
      );
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#hero"
          className="navbar-logo"
          onClick={() => handleNavClick('hero')}
        >
          Muhammad <span>Usman</span>
        </a>

        {/* Navigation */}
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <li
                key={item.label}
                className={isActive ? 'active' : ''}
                style={{ '--item-index': index }}
              >
                <a
                  href={item.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => handleNavClick(sectionId)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}

          {/* Mobile CTA */}
          <li className="mobile-cta-wrapper">
            <button className="navbar-cta">
              <span>Let's Talk</span>
            </button>
          </li>
        </ul>

        {/* Actions */}
        <div className="navbar-actions">

          {/* Desktop CTA */}
          {/* <button className="navbar-cta desktop-cta">
            <span>Let's Talk</span>
          </button> */}
          <a href="#contact" className="navbar-cta desktop-cta">
              Let's Talk
            </a>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggle ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            <span className="icon-wrapper">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>

        </div>
      </div>
    </nav>
  );
}
