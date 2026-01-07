import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../utils/projectData';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = getProjectById(id);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="project-not-found section">
                <div className="container">
                    <h2>Project Not Found</h2>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <div className="project-header">
                <div className="container">
                    <Link to="/" className="back-link">&larr; Back to Projects</Link>
                    <h1>{project.title}</h1>
                    <p className="project-type">{project.type} | {project.location}</p>
                </div>
            </div>

            <div className="container section">
                <div className="project-content">
                    <div className="project-image">
                        <img src={project.src} alt={project.title} />
                    </div>
                    <div className="project-info">
                        <h3>Project Overview</h3>
                        <p>{project.description}</p>

                        <div className="project-meta">
                            <div className="meta-item">
                                <strong>Category:</strong>
                                <span>{project.type}</span>
                            </div>
                            <div className="meta-item">
                                <strong>Location:</strong>
                                <span>{project.location}</span>
                            </div>
                        </div>

                        <div className="project-cta">
                            <h3>Interested in a similar project?</h3>
                            <Link to="/#contact" className="btn btn-primary">Get a Quote</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
