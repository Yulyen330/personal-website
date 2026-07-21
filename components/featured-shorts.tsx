"use client"

import { motion } from "framer-motion"
import { Youtube, Music2, ExternalLink } from "lucide-react"

interface Short {
  platform: "youtube" | "tiktok"
  title: string
  description: string
  badges: string[]
  url: string
  embedUrl?: string
  videoId?: string
}

export default function FeaturedShorts() {
  const shorts: Short[] = [
    {
      platform: "tiktok",
      title: "갑자기 - 아이오아이(I.O.I) Cover",
      description: "최신곡 중 알고리즘을 탈 가능성이 있는 곡을 선택해 라이브 커버 형식으로 제작한 콘텐츠",
      badges: ["4만+ 조회", "Algorithm Pick"],
      url: "https://www.tiktok.com/@min_s_ing/video/7643415094465973511",
      videoId: "7643415094465973511",
    },
    {
      platform: "tiktok",
      title: "HER - 블락비(Block B) Cover",
      description: "인기 아이돌 그룹 블락비의 곡을 감성 보컬 커버로 재해석한 콘텐츠",
      badges: ["9,966 조회", "TikTok"],
      url: "https://www.tiktok.com/@min_s_ing/video/7663920200571440392",
      videoId: "7663920200571440392",
    },
    {
      platform: "youtube",
      title: "BLACKHOLE - IVE Cover",
      description: "인기 아이돌 그룹 IVE의 곡을 커버한 숏폼 보컬 콘텐츠",
      badges: ["9,720 조회", "YouTube Shorts"],
      url: "https://www.youtube.com/shorts/3OgwApG1WSc",
      embedUrl: "https://www.youtube.com/embed/3OgwApG1WSc",
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
    <section id="featured-shorts" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-balance mb-3">
              대표 콘텐츠
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              곡 선정과 구간 구성, 플랫폼 반응을 고려해 제작한 음악 콘텐츠입니다.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shorts.map((short) => (
              <motion.article
                key={short.title}
                variants={itemVariants}
                className="flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
              >
                <div className="relative w-full aspect-[9/16] bg-secondary overflow-hidden">
                  {short.platform === "youtube" && short.embedUrl ? (
                    <iframe
                      src={short.embedUrl}
                      title={short.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      loading="lazy"
                    />
                  ) : short.platform === "tiktok" && short.videoId ? (
                    <iframe
                      src={`https://www.tiktok.com/embed/v2/${short.videoId}`}
                      title={short.title}
                      allow="encrypted-media; picture-in-picture"
                      scrolling="no"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                    />
                  ) : null}
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {short.platform === "youtube" ? (
                      <Youtube className="w-4 h-4 text-primary" aria-hidden="true" />
                    ) : (
                      <Music2 className="w-4 h-4 text-primary" aria-hidden="true" />
                    )}
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {short.platform === "youtube" ? "YouTube" : "TikTok"}
                    </span>
                  </div>

                  <h3 className="font-semibold text-base mb-2 text-balance leading-snug">{short.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty mb-4">{short.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {short.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 bg-secondary border border-border rounded-full text-xs font-medium text-foreground"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <a
                    href={short.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    원본 보러가기
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
