import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Projects from './components/Project';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomScrollbar from './components/CustomScrollbar';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-textGray font-sans selection:bg-lavender/30 selection:text-textDark">
      <Navbar />
      <CustomScrollbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
