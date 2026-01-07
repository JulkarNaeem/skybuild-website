import React from 'react';
import './WhyUs.css';
import bimImage from '../assets/bim/project-bridge.png'; // Using a BIM image as requested for the first icon/visual

const WhyUs = () => {
    return (
        <section className="why-us section">
            <div className="container">
                <h2 className="section-title">Engineering Precision Meets On-Site Excellence</h2>

                <div className="features-grid">
                    {/* Feature 1: Advanced BIM Detailing */}
                    <div className="feature-card">
                        <div className="feature-icon-wrapper">
                            <img src={bimImage} alt="BIM Model" className="feature-img" />
                        </div>
                        <h3 className="feature-title">Advanced BIM Detailing</h3>
                        <p className="feature-text">
                            We visualize every beam and bolt before construction begins to ensure zero errors.
                            Our precision engineering minimizes waste and maximizes structural integrity.
                        </p>
                    </div>

                    {/* Feature 2: Steel & Civil Construction */}
                    <div className="feature-card">
                        <div className="feature-icon-wrapper text-icon">
                            <span>🏗️</span>
                        </div>
                        <h3 className="feature-title">Steel & Civil Construction</h3>
                        <p className="feature-text">
                            End-to-end execution for factories, warehouses, and high-rises.
                            We handle complex structural steel fabrication and civil works with seamless integration.
                        </p>
                    </div>

                    {/* Feature 3: On-Time Delivery */}
                    <div className="feature-card">
                        <div className="feature-icon-wrapper text-icon">
                            <span>⏱️</span>
                        </div>
                        <h3 className="feature-title">On-Time Delivery</h3>
                        <p className="feature-text">
                            We strictly adhere to BNBC standards and project timelines.
                            Our efficient project management ensures your facility is ready for operation when promised.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
