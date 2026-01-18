import Header from "./components/Header";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Projects from "./pages/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={5}
      sparkRadius={10}
      sparkCount={8}
      duration={400}
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <Home />
          </section>
          <section id="skills" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <Skills />
          </section>
          <section id="projects" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <Projects />
          </section>
          <section id="contact" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
