import type { Project } from '../types/Project';
import './ProjectCard.css';
import {API_URL} from '../api'

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="project-card">

            {/* Project Image */}
            {project.image && (
                <img
                    className="project-image"
                    src={`${API_URL}/storage/${project.image}`}
                    alt={project.title}
                />
            )}

            <div className="project-content">

                {/* Title */}
                <h2 className="project-title">
                    {project.title}
                </h2>

                {/* Description */}
                <p className="project-description">
                    {project.description}
                </p>

                {/* Category */}
                <p className="project-category">
                    {project.category}
                </p>

                {/* Technologies */}
                <div className="project-technologies">
                    {project.technologies
                        .split(',')
                        .map((technology) => (
                            <span
                                key={technology.trim()}
                                className="technology-tag"
                            >
                                {technology.trim()}
                            </span>
                        ))}
                </div>

                {/* Links */}
                <div className="project-links">

                    {project.github_url && (
                        <a
                            className="project-link"
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    )}

                    {project.demo_url && (
                        <a
                            className="project-link"
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Demo
                        </a>
                    )}

                </div>

            </div>
        </div>
    );
}