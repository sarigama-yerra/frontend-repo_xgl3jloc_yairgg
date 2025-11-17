import { motion } from 'framer-motion'
import { Mail, Instagram, Dribbble } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-[0_0_40px_rgba(56,189,248,0.12)]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Let’s build something electric</h3>
              <p className="mt-3 text-slate-300">
                For commissions, collaborations, or just to say hello.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:hello@matteometelli.design" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Mail size={16}/> Email</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Instagram size={16}/> Instagram</a>
                <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"><Dribbble size={16}/> Dribbble</a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="Tell me about your project" />
              </div>
              <button type="button" className="rounded-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.55)] transition-shadow">Send message</button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
