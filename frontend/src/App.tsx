import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectList from './components/ProjectList';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <ProjectList />
                <Skills />
                <Contact />
            </main>
        </>
    );
}

export default App;