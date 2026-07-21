"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Radio } from "lucide-react"
import type { ReactNode } from "react"

interface ActivityGroup {
  icon: ReactNode
  title: string
  ko: string
  items: string[]
}

export default function Activities() {
  const groups: ActivityGroup[] = [
    {
      icon: <Users size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Student Leadership",
      ko: "학생 자치",
      items: [
        "미래융합대학 4반 부대표",
        "미래융합대학 제1대 학생회 서기부 부원",
        "차의과학대학교 제28대 총학생회 활동집행국 국원",
        "2024-1학기 심리학전공 대표단",
        "학생참여교육위원회 학생위원",
      ],
    },
    {
      icon: <Radio size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Media & Communication",
      ko: "미디어 · 커뮤니케이션",
      items: [
        "차의과학대학교 제11회 CUIF 공동사회자",
        "차의과학대학교 CUIF 동두천시 홍보 서포터즈",
        "개인 음악 콘텐츠 계정 MIN_s_ing 운영",
        "YouTube / TikTok 음악 콘텐츠 제작",
      ],
    },
    {
      icon: <BookOpen size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Learning & Experience",
      ko: "학습 지원 · 확장 경험",
      items: [
        "차오름 튜터링 데이터분석기초 담당 튜터",
        "차오름교양대학 제2기 차오름 멘토단 사무팀 팀원",
        "필리핀 LSLC 어학연수 1개월 참여",
        "2024-1, 2학기 미래설계 과목 선배 특강 강연자 (대학생활 꿀팁 및 전공생활 소개)",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="activities" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-balance">활동</h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-3">
            {groups.map((group) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className="p-7 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-lg font-bold text-foreground leading-tight">{group.title}</h3>
                    <p className="text-sm text-primary font-medium">{group.ko}</p>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
