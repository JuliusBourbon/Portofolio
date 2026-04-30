import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Projects from './components/Project';
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomScrollbar from './components/CustomScrollbar';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 text-textGray dark:text-gray-300 font-sans selection:bg-lavender/30 selection:text-textDark dark:selection:text-white transition-colors duration-300">
      <Toaster position="bottom-right" />
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
