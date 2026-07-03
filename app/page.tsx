"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Creator from "@/components/creator"
import FeaturedShorts from "@/components/featured-shorts"
import Focus from "@/components/focus"
import Projects from "@/components/projects"
import Awards from "@/components/awards"
import Activities from "@/components/activities"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen text-foreground bg-gradient-to-b from-background via-secondary/40 to-background">
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Creator />
        <FeaturedShorts />
        <Focus />
        <Projects />
        <Awards />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
