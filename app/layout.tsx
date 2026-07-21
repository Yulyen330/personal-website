import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-kr",
})

export const metadata: Metadata = {
  title: "김정민 (MIN_s_ing) | 심리학·미디어·AI헬스케어 크리에이터 포트폴리오",
  description:
    "심리학과 미디어, AI헬스케어를 바탕으로 사람에게 닿는 콘텐츠와 서비스를 기획하는 대학생 크리에이터 김정민(MIN_s_ing)의 포트폴리오입니다.",
  keywords: [
    "김정민",
    "MIN_s_ing",
    "민씽",
    "심리학",
    "미디어커뮤니케이션",
    "AI헬스케어",
    "콘텐츠 기획",
    "크리에이터",
    "포트폴리오",
    "차의과학대학교",
  ],
  generator: "v0.app",
  openGraph: {
    title: "김정민 (MIN_s_ing) | 크리에이터 포트폴리오",
    description:
      "심리학과 미디어, AI헬스케어를 바탕으로 사람에게 닿는 콘텐츠와 서비스를 기획합니다.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "김정민 (MIN_s_ing) | 크리에이터 포트폴리오",
    description:
      "심리학과 미디어, AI헬스케어를 바탕으로 사람에게 닿는 콘텐츠와 서비스를 기획합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${notoSansKR.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
