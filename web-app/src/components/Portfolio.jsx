import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../utils/projectData';
import './Portfolio.css';

const Portfolio = () => {
    // Get projects from shared utility
    const portfolioItems = useMemo(() => getProjects(), []);

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <h2 className="section-title">Recent Projects in Dhaka</h2>

                <div className="masonry-grid">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="masonry-item">
                            <div className="portfolio-card">
                                <img src={item.src} alt={item.title} loading="lazy" />
                                <div className="overlay">
                                    <div className="text">
                                        <h3>{item.title}</h3>
                                        <p>{item.type}</p>
                                        <Link to={`/project/${item.id}`} className="view-details">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
