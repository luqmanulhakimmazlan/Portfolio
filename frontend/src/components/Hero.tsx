import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <p className="hero-subtitle">
                Computer Science • Developer • Creative
            </p>

            <h1>
                Hi, I'm Luqmanul Hakim.
            </h1>

            <p className="hero-description">
                I build web applications and interactive experiences
                using modern technologies.
            </p>

            <div className="hero-buttons">
                <a href="#projects" className="hero-button">
                    View Projects
                </a>

                <a
                    href="https://github.com/luqmanulhakimmazlan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-button secondary"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}