"use client"

import Image from "next/image"
import { ArrowRight, Music2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { SilkBackground } from "./aceternity/silk-background"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const keywords = ["Psychology", "Media Communication", "AI Healthcare", "Creator"]

  return (
    <SilkBackground>
      <section
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative overflow-hidden"
        id="main-content"
      >
        <motion.div
          className="max-w-3xl mx-auto text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative -rotate-3 bg-white p-3 pb-6 rounded-sm shadow-xl">
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-accent/70 rotate-2 rounded-sm"
                aria-hidden="true"
              />
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-sm overflow-hidden bg-secondary">
                <Image
                  src="/images/profile.png"
                  alt="김정민 프로필 사진"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 inline-flex">
            <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
              콘텐츠를 만들어가는 대학생
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance leading-tight"
          >
            김정민
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-primary font-medium mb-6 tracking-wide">
            MIN_s_ing · 민씽
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto"
          >
            사람의 마음과 경험을 이해하고, 이를 콘텐츠와 서비스로 풀어내는 데 관심이 있습니다.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center mb-12">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 bg-card border border-border rounded-full text-xs sm:text-sm font-medium text-foreground"
              >
                {keyword}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              About Me
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border bg-card rounded-full font-medium hover:bg-secondary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href="#creator"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 border border-border bg-card rounded-full font-medium hover:bg-secondary transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <Music2 className="w-4 h-4 text-primary" aria-hidden="true" />
              Creator Channel
            </a>
          </motion.div>
        </motion.div>
      </section>
    </SilkBackground>
  )
}
