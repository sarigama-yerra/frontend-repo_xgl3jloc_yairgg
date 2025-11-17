import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#060914] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(99,102,241,0.15),rgba(2,6,23,0.95)_70%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Showcase />
        <About />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} Matteo Metelli — All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
