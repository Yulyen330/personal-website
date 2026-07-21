"use client"

import { motion } from "framer-motion"
import { GraduationCap, School, BookOpen, Heart, Layers, MessageCircle, Activity, UserCheck } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const education = [
    {
      icon: <School size={22} strokeWidth={1.6} className="text-primary" />,
      title: "한민고등학교",
      meta: "졸업",
    },
    {
      icon: <GraduationCap size={22} strokeWidth={1.6} className="text-primary" />,
      title: "차의과학대학교 미래융합대학",
      meta: "심리학 / 미디어커뮤니케이션전공 재학",
    },
    {
      icon: <BookOpen size={22} strokeWidth={1.6} className="text-primary" />,
      title: "AI헬스케어융합학과 학석사연계과정",
      meta: "차의과학대학교 일반대학원 이수 중",
    },
  ]

  const interests = [
    { icon: <Heart size={18} strokeWidth={1.6} />, label: "심리학" },
    { icon: <Layers size={18} strokeWidth={1.6} />, label: "콘텐츠 기획" },
    { icon: <MessageCircle size={18} strokeWidth={1.6} />, label: "미디어 커뮤니케이션" },
    { icon: <Activity size={18} strokeWidth={1.6} />, label: "AI헬스케어" },
    { icon: <UserCheck size={18} strokeWidth={1.6} />, label: "사용자 경험" },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance">소개</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid gap-4 sm:grid-cols-3 mb-12">
            {education.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-base mb-1 text-balance leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.meta}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 bg-secondary/50 border border-border rounded-2xl text-center"
          >
            <h3 className="font-semibold text-base mb-5 text-foreground">관심 분야</h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {interests.map((interest) => (
                <span
                  key={interest.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
                >
                  <span className="text-primary">{interest.icon}</span>
                  {interest.label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
