import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Sparkles,
    Code2,
    Database,
    LayoutDashboard,
    ServerCog,
    ShoppingCart,
    Rocket,
    Users,
} from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: Code2,
        title: 'Web App Development',
        desc: 'Building fast, scalable web applications using Laravel and React with clean, maintainable code.',
    },
    {
        icon: ServerCog,
        title: 'REST API Development',
        desc: 'Designing secure, well-documented REST APIs that connect your frontend, mobile apps, and third-party services.',
    },
    {
        icon: Database,
        title: 'Database Design & Optimization',
        desc: 'Structuring and optimizing MySQL databases for performance, scalability, and long-term reliability.',
    },
    {
        icon: LayoutDashboard,
        title: 'Admin Dashboards',
        desc: 'Custom admin panels with role-based access, analytics, and full control over business operations.',
    },
    {
        icon: Rocket,
        title: 'SaaS Platform Development',
        desc: 'End-to-end SaaS product development, from architecture to deployment, built to scale with your users.',
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Solutions',
        desc: 'Custom e-commerce platforms with secure payments, inventory management, and smooth checkout flows.',
    },
    {
        icon: LayoutDashboard,
        title: 'ERP Development',
        desc: 'Custom ERP platforms designed to unify operations, automate workflows, and improve business efficiency.',
    },
    {
        icon: Rocket,
        title: 'MVP Development',
        desc: 'Build, validate, and launch scalable MVPs that transform your ideas into market-ready digital products.',
    },
    {
        icon: Users,
        title: 'CRM Development',
        desc: 'Powerful CRM solutions built to manage leads, customers, sales pipelines, and business relationships.',
    },
];

const CURSOR_ICON_OFFSET = 20;

export default function Services() {
    const sectionRef = useRef(null);
    const cursorRef = useRef(null);
    const serviceIconRefs = useRef([]);
    const [cursorIconIndex, setCursorIconIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const cursor = cursorRef.current;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        let inside = false;
        let hasPointer = false;
        let direction = 'down';
        let lastScrollY = window.scrollY;
        let target = { x: 0, y: 0 };
        let current = { x: 0, y: 0 };
        let frame;
        let previousTime;
        let iconTimer;
        let entrances = [];

        const positionCursor = () => {
            cursor.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
        };
        const updateVisibility = () => {
            cursor.classList.toggle('cursor-layer-visible', hasPointer && !inside);
        };
        const startCycle = () => {
            clearInterval(iconTimer);
            iconTimer = setInterval(() => {
                setCursorIconIndex(index => (index + 1) % services.length);
            }, 2000);
        };
        const checkSection = () => {
            const scrollY = window.scrollY;
            if (scrollY !== lastScrollY) direction = scrollY > lastScrollY ? 'down' : 'up';
            lastScrollY = scrollY;
            const bounds = section.getBoundingClientRect();
            // Any visible part counts, including sections taller than the viewport.
            const nextInside = bounds.top < window.innerHeight && bounds.bottom > 0;
            if (nextInside === inside) return;
            inside = nextInside;
            entrances.forEach(animation => animation.cancel());
            entrances = [];
            if (inside) {
                clearInterval(iconTimer);
                if (!reducedMotion.matches) {
                    entrances = serviceIconRefs.current.map(icon => {
                        const slot = icon.getBoundingClientRect();
                        const offset = direction === 'down'
                            ? bounds.top - slot.top
                            : bounds.bottom - slot.bottom;
                        return icon.animate([
                            { transform: `translateY(${offset}px)` },
                            { transform: 'translateY(0)' },
                        ], {
                            duration: 1000,
                            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                        });
                    });
                }
            } else {
                // Resume at the latest pointer position, even if it moved while docked.
                current = { ...target };
                positionCursor();
                startCycle();
            }
            updateVisibility();
        };
        const handlePointerMove = event => {
            if (event.pointerType === 'touch') return;
            target = {
                x: Math.max(0, Math.min(event.clientX + CURSOR_ICON_OFFSET, window.innerWidth - 24)),
                y: Math.max(0, Math.min(event.clientY + CURSOR_ICON_OFFSET, window.innerHeight - 24)),
            };
            if (!hasPointer) {
                current = { ...target };
                positionCursor();
            }
            hasPointer = true;
            updateVisibility();
        };
        const hidePointer = () => {
            hasPointer = false;
            updateVisibility();
        };
        const animate = time => {
            const delta = previousTime === undefined ? 16.67 : time - previousTime;
            previousTime = time;
            if (!inside && hasPointer) {
                const blend = reducedMotion.matches ? 1 : 1 - Math.exp(-delta / 85);
                current.x += (target.x - current.x) * blend;
                current.y += (target.y - current.y) * blend;
                positionCursor();
            }
            frame = requestAnimationFrame(animate);
        };
        startCycle();
        checkSection();
        const observer = new IntersectionObserver(checkSection);
        observer.observe(section);
        const resizeObserver = new ResizeObserver(checkSection);
        resizeObserver.observe(section);
        window.addEventListener('scroll', checkSection, { passive: true });
        window.addEventListener('resize', checkSection);
        window.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('blur', hidePointer);
        document.documentElement.addEventListener('pointerleave', hidePointer);
        frame = requestAnimationFrame(animate);
        return () => {
            clearInterval(iconTimer);
            cancelAnimationFrame(frame);
            entrances.forEach(animation => animation.cancel());
            observer.disconnect();
            resizeObserver.disconnect();
            window.removeEventListener('scroll', checkSection);
            window.removeEventListener('resize', checkSection);
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('blur', hidePointer);
            document.documentElement.removeEventListener('pointerleave', hidePointer);
        };
    }, []);
    return (
        <section
            className="services site-section"
            id="services"
            ref={sectionRef}
        >
            {/* Background glow */}
            <div className="services-bg-glow" />
            {/* ========================================================
          CURSOR-FOLLOWING ICON (hidden while inside Services)
          ======================================================== */}
            {typeof document !== 'undefined' &&
                createPortal(
                    <div
                        className="cursor-icons-layer"
                        ref={cursorRef}
                        aria-hidden="true"
                    >
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={`cursor-${service.title}`}
                                    className={`cursor-floating-icon ${cursorIconIndex === i ? 'cursor-icon-active' : ''
                                        }`}
                                >
                                    <Icon size={22} />
                                </div>
                            );
                        })}
                    </div>,
                    document.body
                )}
            {/* ========================================================
          SERVICES CONTENT
          ======================================================== */}
            <div className="services-container">
                {/* Header */}
                <div className="services-header">
                    <span className="services-label">
                        <Sparkles
                            size={14}
                            className="label-icon"
                        />
                        What I Offer
                    </span>
                    <h2 className="page-heading">
                        Services
                    </h2>
                    <p className="services-sub">
                        From backend logic to polished frontends,
                        here's how I can help bring your product
                        to life clean, scalable, and
                        production-ready.
                    </p>
                </div>
                {/* Services Grid */}
                <div className="services-grid">

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                className="service-card"
                                key={service.title}
                                style={{
                                    '--item-index': index,
                                }}
                            >

                                <div className="service-card-glow" />

                                <div
                                    className="service-icon"
                                    ref={element => { serviceIconRefs.current[index] = element; }}
                                >
                                    <Icon size={22} />
                                </div>


                                <h3 className="service-title">
                                    {service.title}
                                </h3>


                                <p className="service-desc">
                                    {service.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}