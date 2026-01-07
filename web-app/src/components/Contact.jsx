import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section section">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-wrapper">
                    {/* Contact Details (Left) */}
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>Ready to start your project? Contact us for a free quote or consultation.</p>

                        <div className="info-item">
                            <h4>Address</h4>
                            <p>Uttara, Dhaka, Bangladesh</p>
                        </div>

                        <div className="info-item">
                            <h4>Phone</h4>
                            <p>
                                <a href="tel:+8801739411586">+880 1739 411 586</a>
                            </p>
                        </div>

                        <div className="info-item">
                            <h4>Email</h4>
                            <p>
                                <a href="mailto:info@skybuildbd.com">info@skybuildbd.com</a>
                            </p>
                        </div>

                        <div className="whatsapp-cta">
                            <a href="https://wa.me/8801739411586" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form (Right) */}
                    <div className="contact-form-container">
                        <h3>Send us a Message</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Your Email (Optional)" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
