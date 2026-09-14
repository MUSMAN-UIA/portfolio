import { Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Background Ambient Glow */}
      <div className="footer-bg-glow" aria-hidden="true" />

      <div className="footer-container site-container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-name">
              Muhammad <span>Usman</span>
              <div className="brand-dot" />
            </div>
            <p className="footer-tagline">
              Full Stack Developer building clean, scalable, and production-ready
              web systems using Laravel, React & MySQL.
            </p>
            <div className="footer-socials">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/muhammad-usman-03b3a4390"
                className="footer-social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/MUSMAN-UIA"
                className="footer-social-icon"
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:usmanmustafaofficial@gmail.com"
                className="footer-social-icon"
                aria-label="Email"
              >
                <Mail size={17} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/923078345027"
                className="footer-social-icon"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={18} />
              </a>

              {/* Fiverr */}
              <a
                href="https://www.fiverr.com/s/EmgEk2e"
                className="footer-social-icon"
                aria-label="Fiverr"
                target="_blank"
                rel="noreferrer"
              >
                <SiFiverr size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-links-col">
            <div className="footer-col-title">
              <Sparkles size={12} className="title-icon" />
              Navigation
            </div>
            <ul className="footer-links">
              <li><a href="#hero"><span>Home</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#about"><span>About</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#services"><span>Services</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#projects"><span>Projects</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#skills"><span>Skills</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#experience"><span>Experience</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
              <li><a href="#contact"><span>Contact</span><ArrowUpRight size={13} className="link-arrow" /></a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-links-col">
            <div className="footer-col-title">
              <Sparkles size={12} className="title-icon" />
              Let's Connect
            </div>
            <ul className="footer-links connect-links">
              <li>
                <a href="mailto:usmanmustafaofficial@gmail.com">
                  <span>usmanmustafaofficial@gmail.com</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/923078345027" target="_blank" rel="noreferrer">
                  <span>+92 307 834 5027</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammad-usman-03b3a4390" target="_blank" rel="noreferrer">
                  <span>linkedin.com/in/muhammad-usman-03b3a4390</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>
              </li>
              <li>
                <a href="https://github.com/MUSMAN-UIA" target="_blank" rel="noreferrer">
                  <span>github.com/MUSMAN-UIA</span>
                  <ArrowUpRight size={13} className="link-arrow" />
                </a>

              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-copyright">
            © {year} <strong className="copyright-name">Muhammad Usman</strong>. All rights reserved.
          </span>
          {/* <span className="footer-made-with">
            Built with <Heart size={13} className="heart-icon" /> using <span>Laravel + React + MySQL</span>
          </span> */}
        </div>
      </div>
    </footer>
  );
}
