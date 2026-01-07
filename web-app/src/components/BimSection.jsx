import React from 'react';
import './BimSection.css';
import bridge from '../assets/bim/project-bridge.png';
import factory from '../assets/bim/project-factory-erl.png';
import warehouse from '../assets/bim/project-warehouse-ksrm.png';
import shed from '../assets/bim/project-rooftopshed.png';

const BimSection = () => {
    return (
        <section id="bim" className="bim-section section">
            <div className="container">
                <h2 className="section-title">Advanced BIM Engineering</h2>
                <div className="section-header-text">
                    <p>
                        Precision is our promise. Utilizing advanced Building Information Modeling (BIM),
                        we visualize every connection, beam, and bolt before fabrication begins.
                        This ensures zero-error assembly, minimizes material waste, and guarantees structural integrity.
                    </p>
                </div>

                <div className="bim-gallery">
                    <div className="bim-card">
                        <img src={bridge} alt="BIM Model - Bridge Structure" loading="lazy" />
                        <div className="bim-caption">Bridge Structure</div>
                    </div>
                    <div className="bim-card">
                        <img src={factory} alt="BIM Model - Factory ERL" loading="lazy" />
                        <div className="bim-caption">Industrial Factory</div>
                    </div>
                    <div className="bim-card">
                        <img src={warehouse} alt="BIM Model - Warehouse KSRM" loading="lazy" />
                        <div className="bim-caption">Mega Warehouse</div>
                    </div>
                    <div className="bim-card">
                        <img src={shed} alt="BIM Model - Rooftop Shed" loading="lazy" />
                        <div className="bim-caption">Rooftop Structure</div>
                    </div>
                </div>

                <div className="bim-cta">
                    <p>Need a precise structural analysis for your next project?</p>
                    <a href="https://wa.me/8801739411586" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Discuss Engineering
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BimSection;
