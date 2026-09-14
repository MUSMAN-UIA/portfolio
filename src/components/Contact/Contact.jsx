import { useState } from 'react';
import {
  Mail,
  Phone,
  Link2,
  Code2,
  Send,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

import './Contact.css';

// Add your Web3Forms Access Key here
const WEB3FORMS_ACCESS_KEY = '59a6572c-0ad8-4e15-be9f-6bc2dd7f2484';
export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setIsSubmitted(false);
    setError('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },

          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,

            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,

            // Email subject you receive
            from_name: 'Muhammad Usman Portfolio',

            // Spam protection
            botcheck: ''
          })
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);

        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      } else {
        setError(
          result.message || 'Something went wrong. Please try again.'
        );
      }

    } catch (error) {
      console.error('Web3Forms Error:', error);

      setError(
        'Sorry, your message could not be sent. Please try again.'
      );

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="contact site-section"
      id="contact"
    >

      {/* Background Ambient Glow */}
      <div
        className="contact-bg-glow"
        aria-hidden="true"
      />

      <div className="contact-container site-container">

        <div className="contact-box">

          {/* Decorative Corner Accent Line */}
          <div
            className="contact-card-border-glow"
            aria-hidden="true"
          />

          {/* LEFT SIDE */}
          <div className="contact-left">

            <span className="contact-label">
              <Sparkles
                size={13}
                className="label-icon"
              />

              Get In Touch
            </span>

            <h2 className="page-heading">
              Let's Work Together
            </h2>

            <p className="contact-sub">
              Have a project in mind? Let's discuss how I can
              help build a scalable system tailored to your
              business needs.
            </p>

            <div className="contact-methods">

              {/* EMAIL */}
              <a
                href="mailto:usmanmustafaofficial@gmail.com"
                className="contact-method"
              >

                <div className="contact-method-icon">
                  <Mail size={18} />
                </div>

                <div className="contact-method-text">

                  <span className="contact-method-label">
                    Email
                  </span>

                  <span className="contact-method-value">
                    usmanmustafaofficial@gmail.com
                  </span>

                </div>

              </a>


              {/* WHATSAPP */}
              <a
                href="https://wa.me/923078345027"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >

                <div className="contact-method-icon">
                  <Phone size={18} />
                </div>

                <div className="contact-method-text">

                  <span className="contact-method-label">
                    WhatsApp
                  </span>

                  <span className="contact-method-value">
                    +92 307 8345027
                  </span>

                </div>

              </a>


              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/muhammad-usman-03b3a4390"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >

                <div className="contact-method-icon">
                  <Link2 size={18} />
                </div>

                <div className="contact-method-text">

                  <span className="contact-method-label">
                    LinkedIn
                  </span>

                  <span className="contact-method-value">
                    linkedin.com/in/muhammad-usman-03b3a4390
                  </span>

                </div>

              </a>


              {/* GITHUB */}
              <a
                href="https://github.com/MUSMAN-UIA"
                target="_blank"
                rel="noreferrer"
                className="contact-method"
              >

                <div className="contact-method-icon">
                  <Code2 size={18} />
                </div>

                <div className="contact-method-text">

                  <span className="contact-method-label">
                    GitHub
                  </span>

                  <span className="contact-method-value">
                    github.com/MUSMAN-UIA
                  </span>

                </div>

              </a>

            </div>

          </div>


          {/* RIGHT SIDE FORM */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* Honeypot spam field */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-row">

              {/* NAME */}
              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <div className="input-wrapper">

                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="email">
                  Your Email
                </label>

                <div className="input-wrapper">

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />

                </div>

              </div>

            </div>


            {/* SUBJECT */}
            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <div className="input-wrapper">

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                />

              </div>

            </div>


            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <div className="input-wrapper">

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />

              </div>

            </div>


            {/* ERROR */}
            {error && (
              <div className="form-error">
                {error}
              </div>
            )}


            {/* BUTTON */}
            <button
              type="submit"
              className={`form-submit ${
                isSubmitting ? 'loading' : ''
              } ${
                isSubmitted ? 'success' : ''
              }`}
              disabled={isSubmitting}
            >

              {isSubmitted ? (

                <>
                  <CheckCircle2 size={18} />
                  Sent Successfully!
                </>

              ) : isSubmitting ? (

                <>
                  <span className="spinner" />
                  Sending...
                </>

              ) : (

                <>
                  <Send
                    size={18}
                    className="send-icon"
                  />

                  Send Message
                </>

              )}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}