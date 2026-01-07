import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">About Sky Build</h2>
                    <p className="section-subtitle">Building the Future of Bangladesh</p>
                </div>

                <div className="about-grid">
                    <div className="about-text">
                        <h3>Who We Are</h3>
                        <p>
                            Sky Build is a leading construction and engineering firm dedicated to transforming visions into reality.
                            Based in Bangladesh, we specialize in steel detailing, BIM engineering, and comprehensive construction solutions.
                        </p>
                        <p>
                            With a commitment to precision, safety, and innovation, we deliver projects that stand the test of time.
                            From complex industrial structures to modern residential designs, our team brings expertise and passion to every job site.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>10+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-card">
                            <h3>50+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-card">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </div>

                <div className="values-grid margin-top-large">
                    <div className="value-card">
                        <div className="icon">🛡️</div>
                        <h3>Safety First</h3>
                        <p>We prioritize the safety of our team and clients above all else, adhering to strict international standards.</p>
                    </div>
                    <div className="value-card">
                        <div className="icon">🏗️</div>
                        <h3>Quality Construction</h3>
                        <p>We use premium materials and advanced techniques to ensure every structure is built to last.</p>
                    </div>
                    <div className="value-card">
                        <div className="icon">💡</div>
                        <h3>Innovation</h3>
                        <p>Leveraging BIM technology and modern engineering practices to solve complex challenges.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
