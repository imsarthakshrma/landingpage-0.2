"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Brain, Code, Database, FlaskConical, Search, Zap } from "lucide-react"

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 to-blue-600">
              Deep Research
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Krod AI combines cutting-edge AI technology with powerful research tools to help you solve complex problems
            and accelerate your research.
          </p>
          <Button className="border-[1px] gradient-to-r from-purple-400 to-pink-600 border-gray-500 bg-black hover:bg-black/80 text-white rounded-full px-6 py-2 shimmer-button cursor-pointer">
            Try Krod AI For Free
          </Button>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-purple-400" />}
            title="Autonomous Reasoning"
            description="Our AI can understand complex problems, break them down, and reason through solutions step by step."
          />
          <FeatureCard
            icon={<Search className="h-8 w-8 text-purple-400" />}
            title="Deep Research Capabilities"
            description="Access and analyze vast amounts of research papers, data, and information to support your work."
          />
          <FeatureCard
            icon={<Database className="h-8 w-8 text-purple-400" />}
            title="Knowledge Integration"
            description="Seamlessly integrate knowledge from multiple domains to provide comprehensive insights."
          />
          <FeatureCard
            icon={<Code className="h-8 w-8 text-purple-400" />}
            title="Code Generation & Analysis"
            description="Generate, analyze, and optimize code across multiple programming languages and frameworks."
          />
          <FeatureCard
            icon={<FlaskConical className="h-8 w-8 text-purple-400" />}
            title="Scientific Problem Solving"
            description="Tackle complex scientific problems with AI-powered analysis and solution generation."
          />
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-purple-400" />}
            title="Real-time Collaboration"
            description="Collaborate with team members in real-time, sharing insights and research findings instantly."
          />
        </div>

        {/* Advanced Features Section */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Advanced Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Quantum Computing Analysis</h3>
              <p className="text-white/80">
                Analyze and optimize quantum algorithms, simulate quantum systems, and explore quantum computing
                applications.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Quantum algorithm optimization</li>
                <li>Quantum system simulation</li>
                <li>Quantum computing research assistance</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Machine Learning Research</h3>
              <p className="text-white/80">
                Explore cutting-edge machine learning techniques, analyze model performance, and develop new approaches.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Neural architecture search</li>
                <li>Model performance analysis</li>
                <li>Research paper summarization and analysis</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Academic Research Support</h3>
              <p className="text-white/80">
                Get comprehensive support for academic research, from literature review to methodology development.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Literature review automation</li>
                <li>Research methodology development</li>
                <li>Citation and reference management</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">Multi-modal Analysis</h3>
              <p className="text-white/80">
                Analyze data across multiple modalities, including text, images, and structured data.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm">
                <li>Cross-modal data integration</li>
                <li>Multi-modal pattern recognition</li>
                <li>Comprehensive data visualization</li>
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
