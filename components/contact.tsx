"use client"

import { motion } from "framer-motion"
import { Mail, Youtube, Music2, ExternalLink } from "lucide-react"

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const methods = [
    {
      icon: Mail,
      label: "Email",
      value: "jsggm03@chauniv.ac.kr",
      href: "mailto:jsggm03@chauniv.ac.kr",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@min_s_ing",
      href: "https://youtube.com/@min_s_ing",
      external: true,
    },
    {
      icon: Music2,
      label: "TikTok",
      value: "@min_s_ing",
      href: "https://www.tiktok.com/@min_s_ing",
      external: true,
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-balance">함께해요</h2>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-12 text-pretty">
            함께 배우고, 기획하고, 만들어가는 과정에 관심이 있습니다.
          </motion.p>

          <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-4">
            {methods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={method.external ? `${method.label} 열기 (새 창)` : method.label}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-foreground mb-1">{method.label}</p>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1 break-all">
                    {method.value}
                    {method.external && <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />}
                  </span>
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
