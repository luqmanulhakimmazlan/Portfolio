import { useEffect, useState } from 'react';
import type { Project } from '../types/Project';
import ProjectCard from './ProjectCard';
import './ProjectList.css';
import {getProjects} from '../api'

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = [
        'All',
        'Web Development',
        'Game Development',
    ];

    useEffect(() => {
    async function fetchProjects() {
        try {
            const data = await getProjects();

            setProjects(data);
        } catch {
            setError('Failed to fetch projects');
        } finally {
            setLoading(false);
        }
    }

    fetchProjects();
}, []);

    if (loading) {
    return (
        <div className="projects-status">
            Loading projects...
        </div>
    );
}

if (error) {
    return (
        <div className="projects-status projects-error">
            {error}
        </div>
    );
}

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter(
                project => project.category === selectedCategory
            );

    return (
        <>
            <div className="category-filter">
                {categories.map(category => (
                    <button
                        key={category}
                        className={
                            category === selectedCategory
                                ? 'active'
                                : ''
                        }
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div id="projects" className="project-list">
    {filteredProjects.length > 0 ? (
        filteredProjects.map(project => (
            <ProjectCard
                key={project.id}
                project={project}
            />
        ))
    ) : (
        <div className="projects-status">
            No projects found in this category.
        </div>
    )}
</div>
        </>
    );
}