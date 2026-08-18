import { useState } from 'react';
import type { FormEvent } from 'react';
import { sendContactMessage } from '../api';
import './Contact.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<
        'success' | 'error' | ''
    >('');
    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        setSubmitting(true);
        setStatus('');
        setStatusType('');

        try {
            const responseMessage = await sendContactMessage({
                name,
                email,
                subject,
                message,
        });

            setStatus(responseMessage);

            // Successful submission
            setStatusType('success');

            // Clear the form
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
        if (error instanceof Error) {
        const typedError = error as Error & {
            status?: number;
            errors?: Record<string, string[]>;
        };

        if (typedError.status === 429) {
            setStatus(
                'Too many attempts. Please try again later.'
            );
        } else if (typedError.errors) {
            const firstError = Object.values(
                typedError.errors
            )[0]?.[0];

            setStatus(
                firstError || typedError.message
            );
        } else {
            setStatus(typedError.message);
        }
    } else {
        setStatus(
            'Failed to connect to the server.'
        );
    }

    setStatusType('error');
} finally {
            setSubmitting(false);
        }

        
    }

    return (
        <section id="contact" className="contact">
            <p className="section-label">CONTACT</p>

            <h2>Let's work together.</h2>

            <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className="form-group">
                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                        placeholder="Your name"
                        required
                    />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        placeholder="your@email.com"
                        required
                    />
                </div>

                {/* Subject */}
                <div className="form-group">
                    <label htmlFor="subject">
                        Subject
                    </label>

                    <input
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(event) =>
                            setSubject(event.target.value)
                        }
                        placeholder="Project Inquiry"
                        required
                    />
                </div>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        value={message}
                        onChange={(event) =>
                            setMessage(event.target.value)
                        }
                        placeholder="Tell me about your project..."
                        rows={6}
                    />
                </div>

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={submitting}
                >
                    {submitting
                        ? 'Sending...'
                        : 'Send Message'}
                </button>

                {/* Status message */}
                {status && (
                    <p
                        className={`form-status ${statusType}`}
                    >
                        {status}
                    </p>
                )}

            </form>
        </section>
    );
}