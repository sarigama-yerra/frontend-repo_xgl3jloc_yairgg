import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designer with a pulse for neon</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I design visual identities that glow — blending bold typography,
            neon gradients, and motion to create brands that feel alive.
            I’ve collaborated with festivals, startups, and artists to build
            sharp, timeless visuals with a futuristic edge.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-slate-200/90">
            {['Identity Systems', 'Poster Design', 'Album Art', 'Motion Graphics'].map((s) => (
              <li key={s} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">{s}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <img
              src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1400&auto=format&fit=crop"
              alt="Matteo working"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-fuchsia-500/10 to-sky-400/10 mix-blend-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
