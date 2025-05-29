"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import SiteLayout from "@/components/site-layout"

export default function ChangelogPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const changelogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Animate changelog items
    const items = changelogRef.current?.querySelectorAll(".changelog-item")
    if (items) {
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.3,
        },
      )
    }
  }, [])

  return (

    // TODO: Change the Information in the Changelog

    <SiteLayout>
      <div className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 to-blue-600">
              Changelog
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Stay up to date with the latest improvements, features, and updates to Krod AI.
          </p>
        </div>

        {/* Changelog */}
        <div ref={changelogRef} className="max-w-4xl mx-auto space-y-12">
          <ChangelogItem
            version="v2.3.0"
            date="May 15, 2025"
            title="Enhanced Quantum Computing Analysis"
            description="Major improvements to our quantum computing analysis capabilities, including better algorithm optimization and quantum system simulation."
            changes={[
              "Added support for analyzing quantum circuits with up to 50 qubits",
              "Improved quantum algorithm optimization with new heuristics",
              "Enhanced visualization of quantum states and processes",
              "Added new tutorials and documentation for quantum computing features",
            ]}
            type="major"
          />

          <ChangelogItem
            version="v2.2.5"
            date="April 28, 2025"
            title="Performance Improvements and Bug Fixes"
            description="This update focuses on improving overall system performance and fixing several reported issues."
            changes={[
              "Reduced response time for complex research queries by 35%",
              "Fixed an issue with citation formatting in research papers",
              "Improved memory usage for large document analysis",
              "Fixed UI glitches in the dashboard on mobile devices",
            ]}
            type="minor"
          />

          <ChangelogItem
            version="v2.2.0"
            date="March 12, 2025"
            title="New Collaboration Features"
            description="Introducing new collaboration features to help research teams work together more effectively."
            changes={[
              "Added real-time collaboration on research projects",
              "New commenting system for shared research queries",
              "Improved sharing permissions with granular access controls",
              "Added team dashboards for tracking research progress",
            ]}
            type="feature"
          />

          <ChangelogItem
            version="v2.1.0"
            date="February 3, 2025"
            title="Advanced Document Analysis"
            description="Major improvements to our document analysis capabilities, making it easier to extract insights from research papers and technical documents."
            changes={[
              "Added support for analyzing complex scientific diagrams and charts",
              "Improved extraction of mathematical formulas from PDFs",
              "Enhanced cross-referencing between multiple documents",
              "Added automatic summarization of key findings in research papers",
            ]}
            type="major"
          />

          <ChangelogItem
            version="v2.0.0"
            date="December 15, 2024"
            title="Krod AI 2.0 Launch"
            description="A complete redesign and rebuild of Krod AI with significant improvements to our core AI capabilities."
            changes={[
              "Completely new AI model with 3x better reasoning capabilities",
              "Redesigned user interface for improved usability",
              "New API for enterprise integrations",
              "Added support for 12 new languages",
              "Improved data visualization tools for research insights",
            ]}
            type="major"
          />

          <ChangelogItem
            version="v1.5.0"
            date="October 8, 2024"
            title="Machine Learning Research Tools"
            description="New tools specifically designed for machine learning researchers."
            changes={[
              "Added neural architecture search capabilities",
              "New tools for analyzing model performance and behavior",
              "Improved code generation for ML experiments",
              "Added integration with popular ML frameworks",
            ]}
            type="feature"
          />

          <ChangelogItem
            version="v1.0.0"
            date="July 1, 2024"
            title="Initial Release"
            description="The first public release of Krod AI, bringing autonomous reasoning to researchers worldwide."
            changes={[
              "Core AI reasoning capabilities",
              "Research query processing",
              "Basic document analysis",
              "Code generation and analysis",
              "Initial API for developers",
            ]}
            type="major"
          />
        </div>
      </div>
    </SiteLayout>
  )
}

function ChangelogItem({
  version,
  date,
  title,
  description,
  changes,
  type,
}: {
  version: string
  date: string
  title: string
  description: string
  changes: string[]
  type: "major" | "minor" | "feature"
}) {
  const getBadgeColor = () => {
    switch (type) {
      case "major":
        return "bg-purple-600 text-white"
      case "feature":
        return "bg-blue-600 text-white"
      case "minor":
        return "bg-gray-600 text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="changelog-item border-l-2 border-gray-700 pl-6 relative">
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600"></div>
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="text-xl font-bold text-white">{version}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor()}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <span className="text-white/60 text-sm">{date}</span>
      </div>
      <h4 className="text-lg font-semibold text-purple-300 mb-2">{title}</h4>
      <p className="text-white/80 mb-4">{description}</p>
      <ul className="list-disc list-inside text-white/70 space-y-1">
        {changes.map((change, index) => (
          <li key={index} className="text-sm">
            {change}
          </li>
        ))}
      </ul>
    </div>
  )
}
