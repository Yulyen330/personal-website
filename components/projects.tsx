"use client"

import { motion } from "framer-motion"
import { Sparkles, FlaskConical, LineChart, Music2, Trophy, Film, Brain, ExternalLink } from "lucide-react"
import type { ReactNode } from "react"

interface Project {
  icon: ReactNode
  title: string
  points: string[]
  results?: string[]
  tags: string[]
  link?: { href: string; label: string }
}

export default function Projects() {
  const projects: Project[] = [
    {
      icon: <Sparkles size={24} strokeWidth={1.6} className="text-primary" />,
      title: "실감미디어 콘텐츠 기획 프로젝트",
      points: [
        "실감미디어 콘텐츠를 기획하고 발표한 프로젝트",
        "사용자 경험과 몰입을 고려한 콘텐츠 구성 경험",
      ],
      results: ["실감미디어 콘텐츠 기획 최종발표회 최우수상", "제6회 Contest Spark Awards 우수상"],
      tags: ["실감미디어", "콘텐츠 기획", "UX"],
    },
    {
      icon: <FlaskConical size={24} strokeWidth={1.6} className="text-primary" />,
      title: "CRMMP 2.0 연구 프로젝트",
      points: [
        "사람의 심리와 내면을 AI 기술을 활용한 초상화 형태로 표현해보는 융합 연구 프로젝트",
        "심리학, AI헬스케어, 미디어 요소를 연결해 기획하고 발표한 프로젝트",
      ],
      results: ["CRMMP 2.0 우수성과 발표회 1등"],
      tags: ["심리", "AI", "미디어"],
    },
    {
      icon: <LineChart size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Mind-Guard 서비스 기획",
      points: [
        "개인투자자의 감정적 의사결정을 줄이기 위한 AI 기반 금융 심리 케어 서비스 기획안",
        "심리, 금융, AI 서비스를 연결해본 프로젝트",
      ],
      results: ["비즈니스모델개발 경진대회 1등"],
      tags: ["심리", "금융", "AI 서비스"],
    },
    {
      icon: <Music2 size={24} strokeWidth={1.6} className="text-primary" />,
      title: "Personal Creator Channel",
      points: [
        "YouTube와 TikTok에서 음악 커버 및 감성 숏폼 콘텐츠 제작",
        "콘텐츠 기획과 플랫폼 운영을 실험한 개인 프로젝트",
      ],
      tags: ["YouTube", "TikTok", "콘텐츠 운영"],
    },
    {
      icon: <Film size={24} strokeWidth={1.6} className="text-primary" />,
      title: "KATRD 미니다큐 기획",
      points: [
        "대한결핵및호흡기학회(KATRD) 시민 교육 영상 기획에 참여",
        "콘텐츠 스튜디오 MELIES 소속으로 의료 교육 콘텐츠를 기획",
      ],
      tags: ["미니다큐", "의료 교육", "콘텐츠 기획"],
      link: { href: "https://melies-one.vercel.app/ko", label: "MELIES에서 보기" },
    },
    {
      icon: <Brain size={24} strokeWidth={1.6} className="text-primary" />,
      title: "브레인테이블 기획 및 리서치",
      points: [
        "AI 비전 인지훈련 게임 플랫폼 '브레인테이블' 시리즈 기획 및 리서치 담당",
        "심리학 지식을 바탕으로 인지훈련 콘텐츠 설계에 참여 중",
      ],
      tags: ["AI", "인지훈련", "게임 기획"],
      link: { href: "https://melies-one.vercel.app/ko", label: "MELIES에서 보기" },
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
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">프로젝트</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                className="flex flex-col p-7 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  {project.icon}
                </div>
                <h3 className="font-semibold text-lg mb-4 text-balance leading-snug">{project.title}</h3>

                <ul className="space-y-2 mb-5">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                {project.results && (
                  <div className="space-y-2 mb-5">
                    {project.results.map((result) => (
                      <div
                        key={result}
                        className="flex items-start gap-2 text-sm font-medium text-foreground bg-secondary rounded-lg px-3 py-2"
                      >
                        <Trophy className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                        {result}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 border border-border rounded-full text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline"
                  >
                    {project.link.label}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
