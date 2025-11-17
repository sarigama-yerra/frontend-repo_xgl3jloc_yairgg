import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.25),rgba(2,6,23,0.9)_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-slate-900/60 px-3 py-1 text-xs text-white/80 shadow-[0_0_40px_rgba(139,92,246,0.35)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
            Available for freelance in Q1 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
            Matteo Metelli
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200/90">
            Graphic designer crafting bold, neon-infused visual identities, album art, and motion-led brand systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#work" className="pointer-events-auto rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] transition-shadow">View Work</a>
            <a href="#contact" className="pointer-events-auto rounded-full px-6 py-3 text-sm font-medium text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors">Get in touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
