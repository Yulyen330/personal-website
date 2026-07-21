"use client"

import { motion } from "framer-motion"
import { Youtube, Music2, ArrowUpRight, Mic2, BarChart3, Sparkles } from "lucide-react"
import type { ReactNode } from "react"

export default function Creator() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const cards: { icon: ReactNode; title: string; description: string }[] = [
    {
      icon: <Mic2 size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Music Cover",
      description: "커버곡을 중심으로 음악 콘텐츠를 제작합니다.",
    },
    {
      icon: <BarChart3 size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Content Strategy",
      description: "알고리즘 흐름과 시청자 반응을 고려해 곡과 구간을 선정합니다.",
    },
    {
      icon: <Sparkles size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Short-form Test",
      description: "YouTube와 TikTok에서 짧은 영상 표현 방식을 실험합니다.",
    },
  ]

  return (
    <section id="creator" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-balance mb-3">
              YouTube / TikTok Music Content
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              음악과 감성을 담은 콘텐츠를 직접 만들어보는 개인 채널, MIN_s_ing.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3 mb-6">
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="p-7 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-sans text-xl font-bold mb-3 text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://youtube.com/@min_s_ing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="YouTube 채널 열기"
            >
              <div className="flex items-center gap-4">
                <Youtube className="w-7 h-7 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">YouTube</p>
                  <p className="text-sm text-muted-foreground">@min_s_ing</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.tiktok.com/@min_s_ing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="TikTok 계정 열기"
            >
              <div className="flex items-center gap-4">
                <Music2 className="w-7 h-7 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground">TikTok</p>
                  <p className="text-sm text-muted-foreground">@min_s_ing</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
