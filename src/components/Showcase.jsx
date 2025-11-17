import { motion, useScroll, useTransform } from 'framer-motion'

const works = [
  {
    title: 'Neon Night Festival',
    tags: ['Branding', 'Poster', 'Motion'],
    img: 'https://images.unsplash.com/photo-1546502203-67a1e03883f8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Chromatic Album Art',
    tags: ['Artwork', 'Music'],
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Pulse UI Kit',
    tags: ['Digital', 'UI', 'Product'],
    img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Vaporwave Identity',
    tags: ['Identity', 'Brand'],
    img: 'https://images.unsplash.com/photo-1542332213-9b6a4b0b40f4?q=80&w=1600&auto=format&fit=crop',
  },
]

function Card({ item, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur shadow-[0_0_40px_rgba(56,189,248,0.12)]"
    >
      <img src={item.img} alt={item.title} className="h-72 w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-300">{item.tags.join(' • ')}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute -inset-24 rounded-full bg-gradient-to-r from-violet-500/25 via-fuchsia-500/25 to-sky-400/25 blur-3xl" />
      </div>
    </motion.article>
  )
}

export default function Showcase() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section id="work" className="relative py-28">
      <motion.div style={{ rotate, scale }} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/20 to-sky-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-fuchsia-600/20 to-purple-400/20 blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-sky-300 hover:text-sky-200">Request full portfolio →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((item, i) => (
            <Card key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
