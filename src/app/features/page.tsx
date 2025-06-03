"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, Code, Database, FlaskConical, Lightbulb, LoaderCircle, Route, Search, Zap } from "lucide-react"

import SiteLayout from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FeaturesPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Animate features
    const features = featuresRef.current?.querySelectorAll(".feature-card")
    if (features) {
      gsap.fromTo(
        features,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        },
      )
    }
  }, [])

  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Powerful Features for your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-600 to-blue-600">
              Deep Research
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
          Krod helps you think through complex research problems with clarity, structure, and support
          </p>
          <Button className="border-[1px] gradient-to-r from-purple-400 to-pink-600 border-gray-500 bg-black hover:bg-black/80 text-white rounded-full px-6 py-2 shimmer-button cursor-pointer">
            Try Krod AI For Free
          </Button>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-purple-400" />}
            title="Shows Its Thinking"
            description="No black box here. You can see step-by-step how we arrive at conclusions and recommendations."
          />
          <FeatureCard
            icon={<Search className="h-8 w-8 text-purple-400" />}
            title="Find What You Need, Fast"
            description="Krod AI finds, organizes, and summarizes relevant sources so you can focus on the important stuff."
          />
          <FeatureCard
            icon={< LoaderCircle className="h-8 w-8 text-purple-400" />}
            title="Never Lose Your Progress"
            description="Never lose your progress. Krod remembers your work and can pick up where you left off."
          />
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-purple-400" />}
            title="Think Beyond The Obvious"
            description="Krod AI help you brainstorm new angles, generate fresh hypotheses, and explore ideas you might have missed."
          />
          <FeatureCard
            icon={<Route className="h-8 w-8 text-purple-400" />}
            title="Multiple Paths Forward"
            description="Why settle for one solution? Krod shows you different approaches, alternative methods, and backup plans for every challenge."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-purple-400" />}
            title="Gets Better With You"
            description="The more you work together, the better Krod understand your research style."
          />
        </div>

        {/* Advanced Features Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">What Makes It Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Advanced Search</h3>
              <p className="text-white/80">
                Krod helps you think through complex research problems with clarity, structure, and support
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>RAG-powered indexing</li>
                <li>Deep semantic search</li>
                <li>Context-aware filtering</li>
                {/* <li>Fast access to relevant knowledge</li> */}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Connected Knowledge</h3>
              <p className="text-white/80">
              Builds links between related ideas, papers, and terms so you can navigate your research landscape more intuitively.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Contextual connections</li>
                <li>Topic-based navigation</li>
                <li>Intuitive exploration</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Common Sense</h3>
              <p className="text-white/80">
              Applies grounded, human-like judgment to avoid naive or unrealistic decisions.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Grounded reasoning</li>
                <li>Context-aware decision-making</li>
                <li>Realistic recommendations</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Step-by-Step Logical Thinking</h3>
              <p className="text-white/80">
                See how Krod reasons — not just the conclusion, but how it got there.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Transparent chain-of-thought</li>
                <li>No black-box answers</li>
                <li>Justification for every step</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Research?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of researchers, academics, and professionals who are accelerating their work with Krod AI.
          </p>
          <Button className="gradient-to-r from-purple-400 to-pink-600 border-[1px] border-gray-700 bg-black hover:bg-black/80 text-white rounded-full px-6 py-2 shimmer-button cursor-pointer">
            Get Started Today
          </Button>
        </div>
      </div>
    </SiteLayout>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="feature-card bg-black/30 backdrop-blur-sm border-gray-700 text-white">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
