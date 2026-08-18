import './Skills.css';

interface Skill {
    name: string;
    category: string;
}

const skills: Skill[] = [
    {
        name: 'React',
        category: 'Frontend',
    },
    {
        name: 'TypeScript',
        category: 'Frontend',
    },
    {
        name: 'JavaScript',
        category: 'Frontend',
    },
    {
        name: 'Laravel',
        category: 'Backend',
    },
    {
        name: 'PHP',
        category: 'Backend',
    },
    {
        name: 'Firebase',
        category: 'Backend',
    },
    {
        name: 'Unity',
        category: 'Game Development',
    },
    {
        name: 'C#',
        category: 'Game Development',
    },
    {
        name: 'Git',
        category: 'Tools',
    },
    {
        name: 'GitHub',
        category: 'Tools',
    },
    {
        name: 'Blender',
        category: '3D / Design',
    },
    {
        name: 'Figma',
        category: 'Design',
    },
];

export default function Skills() {
    return (
        <section id="skills" className="skills">
            <p className="section-label">SKILLS</p>

            <h2>Technologies I work with.</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <h3>{skill.name}</h3>
                        <p>{skill.category}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}