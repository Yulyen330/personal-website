"use client"

import { motion } from "framer-motion"
import { Brain, Radio, HeartPulse } from "lucide-react"

export default function Focus() {
  const cards = [
    {
      icon: <Brain size={28} strokeWidth={1.5} className="text-primary" />,
      title: "Psychology",
      ko: "심리학",
      description: "사람의 마음과 행동을 이해하는 데 관심이 있습니다.",
    },
    {
      icon: <Radio size={28} strokeWidth={1.5} className="text-primary" />,
      title: "Media Communication",
      ko: "미디어 커뮤니케이션",
      description: "메시지를 더 쉽고 매력적으로 전달하는 방식을 고민합니다.",
    },
    {
      icon: <HeartPulse size={28} strokeWidth={1.5} className="text-primary" />,
      title: "AI Healthcare",
      ko: "AI 헬스케어",
      description: "기술이 사람의 삶과 건강을 돕는 방식에 관심이 있습니다.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="focus" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <p className="font-eyebrow text-xl text-primary mb-1">관심사예요</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">관심 분야</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <motion.div
                key={card.title}
                variants={itemVariants}
                className="p-7 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-serif text-xl font-bold mb-1 text-foreground">{card.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{card.ko}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
