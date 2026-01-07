import { Link } from 'react-router-dom';
import './Hero.css';
// Importing a specific site photo for background - ensure this path is correct based on copy operations
import heroBg from '../assets/projects/site-finished.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Premier Steel & Civil Construction <br /> in Bangladesh</h1>
                <p className="hero-subtitle">
                    From Structural Design to Final Build. We turn your vision into reality in Uttara, Dhaka, and beyond.
                </p>
                <div className="hero-buttons">
                    <a href="https://wa.me/8801739411586" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Talk to an Engineer
                    </a>
                    <Link to="/#portfolio" className="btn btn-secondary">
                        View Our Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
