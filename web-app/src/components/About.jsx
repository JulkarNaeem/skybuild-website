import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>About Sky Build</h1>
                    <p className="subtitle">Building the Future of Bangladesh</p>
                </div>
            </div>

            <section className="about-content section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Who We Are</h2>
                            <p>
                                Sky Build is a leading construction and engineering firm dedicated to transforming visions into reality.
                                based in Bangladesh, we specialize in steel detailing, BIM engineering, and comprehensive construction solutions.
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
                </div>
            </section>

            <section className="values-section section-padding bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-grid">
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

            <section className="cta-section section-padding text-center">
                <div className="container">
                    <h2>Ready to Build With Us?</h2>
                    <p>Let's discuss your next project and how we can help.</p>
                    <Link to="/#contact" className="btn btn-primary">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
};

export default About;
