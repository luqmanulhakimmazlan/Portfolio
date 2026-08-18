import type { Project } from './types/Project';

export const API_URL = import.meta.env.VITE_API_URL;

export async function getProjects(): Promise<Project[]> {
    const response = await fetch(`${API_URL}/api/projects`);

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await response.json();

    return data.data;
}

export interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactMessage(
    contact: ContactData
): Promise<string> {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },

        body: JSON.stringify(contact),
    });

    const data = await response.json();

    if (!response.ok) {
        const error = new Error(
            data.message || 'Failed to send message'
        );

        Object.assign(error, {
            errors: data.errors,
        });

        throw error;
    }

    return data.message;
}