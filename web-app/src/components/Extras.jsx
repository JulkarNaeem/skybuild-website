import React from 'react';
import './Extras.css';

export const CtaStrip = () => (
    <section className="cta-strip">
        <div className="container cta-content">
            <h2>Planning a Factory or Commercial Building?</h2>
            <a href="https://wa.me/8801739411586" className="btn btn-primary cta-btn">
                Get a Free Cost Estimate
            </a>
        </div>
    </section>
);

export const Services = () => {
    const services = [
        { title: "Structural Design", desc: "Complete structural analysis and design ensuring safety and economy." },
        { title: "Steel Fabrication", desc: "High-quality steel fabrication for warehouses, sheds, and bridges." },
        { title: "Civil Construction", desc: "Foundation, RC work, and finishing for industrial and commercial projects." },
        { title: "Consultancy", desc: "Expert advice on project feasibility, costing, and management." }
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card">
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Footer = () => (
    <footer className="footer">
        <div className="container footer-content">
            <div className="footer-info">
                <h3>Sky Build</h3>
                <p>Your Vision, Our Structure.</p>
                <br />
                <p><strong>Address:</strong> Uttara, Dhaka, Bangladesh.</p>
                <p><strong>Phone:</strong> +8801739411586</p>
                <p><strong>Email:</strong> info@skybuildbd.com</p>

                <div className="social-links" style={{ marginTop: '1rem' }}>
                    <a href="https://web.facebook.com/skybuildbd" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '1.5rem', textDecoration: 'none' }} title="Facebook">📘</a>
                    <a href="https://www.linkedin.com/company/skybuildbd" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', fontSize: '1.5rem', textDecoration: 'none' }} title="LinkedIn">💼</a>
                    <a href="https://www.youtube.com/@skybuildbd" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', textDecoration: 'none' }} title="YouTube">▶️</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; 2024 Sky Build. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);
