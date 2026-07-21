"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export default function Awards() {
  const awards = [
    { year: "2023", title: "제11회 CUIF 대상", org: "차의과학대학교" },
    { year: "2024", title: "심리학전공 로고공모전 1등", org: "차의과학대학교" },
    { year: "2025", title: "실감미디어 콘텐츠 기획 최종발표회 최우수상", org: "차의과학대학교" },
    { year: "2025", title: "제6회 Contest Spark Awards 우수상", org: "실감미디어 콘텐츠 프로젝트" },
    { year: "2026", title: "CRMMP 2.0 우수성과 발표회 1등", org: "차의과학대학교" },
    { year: "2026", title: "비즈니스모델개발 경진대회 1등", org: "차의과학대학교" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section id="awards" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-balance">수상 경력</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {awards.map((award) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                variants={itemVariants}
                className="flex items-start gap-3 p-5 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-medium text-primary mb-1">{award.year}</p>
                  <p className="font-medium text-foreground leading-snug text-pretty mb-0.5">{award.title}</p>
                  <p className="text-sm text-muted-foreground">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
