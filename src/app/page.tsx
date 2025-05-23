"use client"

import type React from "react"
// import type { ReactNode } from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Github, Linkedin, Menu, Send, Twitter, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}



export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const headerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const ctaHeadingRef = useRef<HTMLHeadingElement>(null)
  const ctaSubtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {

    if (!headerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } }) 

    tl.fromTo(headerRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(searchContainerRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")

    // Text reveal animation for CTA heading
    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaHeadingRef.current,
        start: "top bottom-=100",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
    })

    // Get all the letters in the headings
    const headingLetters = ctaHeadingRef.current?.querySelectorAll(".reveal-letter")

    // Animate each letter only if they exist
    if (headingLetters && headingLetters.length > 0) {
      ctaTimeline.fromTo(
        headingLetters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.5,
          ease: "power2.out",
        },
      )
    }

    // After heading animation, show subtitle and button
    ctaTimeline.fromTo(ctaSubtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2")

    ctaTimeline.fromTo(ctaButtonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")

    // tidy up
    return () => {
      tl.kill()
      ctaTimeline.kill()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

    

  const handleQueryClick = (query: string) => {
    setSearchQuery(query)
  }

  // Function to split text into individual letters with spans
  const splitTextIntoLetters = (text: string) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="reveal-letter inline-block">
        {letter === " " ? "\u00A0" : letter}
      </span>
    ))
  }

  return (
    <main className="relative flex flex-col items-center">
      {/* Hero Section with Background */}
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Image for Hero */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/background-hero.png)" }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex justify-center py-4">
              <header
                ref={headerRef}
                className="flex justify-between items-center py-2 px-5 w-10/12 max-w-4xl rounded-lg bg-black/30 backdrop-blur-sm border-[1.8px] border-gray-400"
              >
                <div className="flex items-center cursor-pointer">
                  <Link href="/" className="flex items-center cursor-pointer">
                    <Image src="/images/typographic-logo.svg" alt="Logo" width={85} height={85} />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="#features" className="text-white hover:text-purple-200 transition-colors text-sm">
                    Features
                  </Link>
                  <Link href="#pricing" className="text-white hover:text-purple-200 transition-colors text-sm">
                    Pricing
                  </Link>
                  <Link href="#contact" className="text-white hover:text-purple-200 transition-colors text-sm">
                    Contact
                  </Link>
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/login" className="text-white hover:text-purple-200 transition-colors text-xs">
                    Log In
                  </Link>
                  <Button
                    variant="default"
                    className="bg-black text-white hover:bg-black/70 transition-colors rounded-md border-[1.8px] border-gray-700 text-[11px] px-2 py-.5 h-6 cursor-pointer"
                  >
                    Sign Up
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white hover:bg-white/10"
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </header>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-black/80 backdrop-blur-md rounded-lg mt-2 p-4 border border-gray-700 animate-in fade-in slide-in-from-top-5">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#features"
                    className="text-white hover:text-purple-200 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-white hover:text-purple-200 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#contact"
                    className="text-white hover:text-purple-200 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex items-center space-x-4 pt-2">
                    <Link
                      href="/login"
                      className="text-white hover:text-purple-200 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Button
                      variant="default"
                      className="bg-black text-white hover:bg-black/70 transition-colors rounded-md border-[1px] border-gray-700 text-xs px-2 py-0.5 h-6"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Button>
                  </div>
                </nav>
              </div>
            )}

            {/* Hero Section */}
            <section className="mt-16 md:mt-24 text-center pb-24">
              <p className="text-white/80 mb-2" ref={taglineRef}>
                Introducing <span className="font-bold hero-gradient">Krod AI</span>
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4" ref={titleRef}>
                <span className="font-light hero-gradient">The</span>{" "}
                <span className="font-mono hero-gradient">Autonomous</span>{" "}
                <span className="font-normal hero-gradient">Reasoning</span>
                <br />
                <span className="font-bold text-white">Research Assistant</span>
              </h1>
              <p className="text-white/80 text-lg mb-8 md:mb-12" ref={subtitleRef}>
                Not just a Deep Research AI, but an AI made for Deep Research
              </p>

              {/* Search Container with Example Queries */}
              <div
                ref={searchContainerRef}
                className="max-w-4xl mx-auto mb-8 bg-black/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border-[1px] border-gray-700"
              >
                {/* Search Input */}
                <div className="relative mb-4 md:mb-6">
                  <Input
                    type="text"
                    placeholder="Ask Krod your research question..."
                    className="bg-black/30 border-gray-700 text-white h-12 md:h-14 pl-4 md:pl-6 pr-12 rounded-lg w-full placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-white/10"
                    onClick={() => console.log('TODO: Handle search for', searchQuery)}
                  >
                    <Send className="h-5 w-5 text-white" />
                  </Button>
                </div>

                {/* Example Queries */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 cursor-pointer">
                  <ExampleButton
                    onClick={() => handleQueryClick("Compare quantum computing approaches for optimization problems")}
                  >
                    Compare quantum computing approaches for optimization problems
                  </ExampleButton>
                  <ExampleButton
                    onClick={() =>
                      handleQueryClick("Evaluate machine learning strategies for anomaly detection in time series data")
                    }
                  >
                    Evaluate machine learning strategies for anomaly detection in time series data
                  </ExampleButton>
                  <ExampleButton
                    onClick={() =>
                      handleQueryClick("Explain quantum computing algorithms and their applications in cryptography")
                    }
                  >
                    Explain quantum computing algorithms and their applications in cryptography
                  </ExampleButton>
                  <ExampleButton
                    onClick={() => handleQueryClick("Explain recent advances in fusion energy containment methods")}
                  >
                    Explain recent advances in fusion energy containment methods
                  </ExampleButton>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section
        className="w-full py-20"
        style={{ backgroundImage: "url(/images/gradient-bg.png)", backgroundSize: "cover" }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 ref={ctaHeadingRef} className="text-white text-4xl md:text-5xl font-bold mb-4">
            {splitTextIntoLetters("Made For Your Complex Problems.")}
          </h2>
          <p ref={ctaSubtitleRef} className="text-white/80 text-lg mb-8 opacity-0">
            Use Krod AI For Your Researches, Academics Or Development
          </p>
          <Button
            ref={ctaButtonRef}
            variant="default"
            className="shimmer-button bg-black hover:bg-black/80 text-white rounded-full px-6 py-2 opacity-0 cursor-pointer"
          >
            Try Krod AI For Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-base font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-base font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    What Is Krod AI?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Learn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-base font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors text-xs">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-base font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs"
                  >
                    <Twitter className="h-3 w-3" />X / Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs"
                  >
                    <Linkedin className="h-3 w-3" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs"
                  >
                    <Github className="h-3 w-3" />
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-white flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 text-purple-600">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L14.5 9H21.5L16 13.5L18 21L12 17L6 21L8 13.5L2.5 9H9.5L12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <span className="font-semibold text-lg">kroskod</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs">© {new Date().getFullYear()} Krod AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function ExampleButton({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return (
    <Button
      variant="ghost"
      className={`bg-transparent text-white font-normal hover:bg-black hover:text-white text-left h-auto py-2 px-3 rounded-lg justify-start text-xs sm:text-sm md:text-base w-full overflow-hidden text-ellipsis whitespace-normal cursor-pointer ${className || ''}`}
      onClick={onClick}
    >
      <span className="line-clamp-2">{children}</span>
    </Button>
  )
}
