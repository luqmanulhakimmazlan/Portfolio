export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    technologies: string;
    image: string | null;
    github_url: string | null;
    demo_url: string | null;
}