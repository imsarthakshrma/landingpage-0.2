"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
    tl.fromTo(headerRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
  }, [])

  return (
    <main className="relative flex flex-col items-center min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/background-hero.png)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                  <Link href="/features" className="text-white hover:text-purple-200 transition-colors text-sm">
                    Features
                  </Link>
                  <Link href="/pricing" className="text-white hover:text-purple-200 transition-colors text-sm">
                    Pricing
                  </Link>
                  <Link href="/contact" className="text-white hover:text-purple-200 transition-colors text-sm">
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
                  href="/features"
                  className={`transition-colors py-2 ${
                    pathname === "/features" ? "text-white font-medium" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className={`transition-colors py-2 ${
                    pathname === "/pricing" ? "text-white font-medium" : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className={`transition-colors py-2 ${
                    pathname === "/contact" ? "text-white font-medium" : "text-white/80 hover:text-white"
                  }`}
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

          {/* Page Content */}
          <div className="flex-grow">{children}</div>
        </div>

        {/* Footer */}
        <footer className="mt-auto bg-black text-white py-16 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-base font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Product */}
              <div>
                <h3 className="text-base font-semibold mb-4">Product</h3>
                <ul className="space-y">
                  <li>
                    <Link href="/changelog" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      What Is Krod AI?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-base font-semibold mb-4">Resources</h3>
                <ul className="space-y">
                  <li>
                    <Link href="/learn" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link href="/demo" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Book a Demo
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-base font-semibold mb-4">Legal</h3>
                <ul className="space-y">
                  <li>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
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
                      href="https://x.com/KroskodLabs"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <Twitter className="h-3 w-3" />X / Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/kroskodlabs"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <Linkedin className="h-3 w-3" />
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/kroskod"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
                    >
                      <Github className="h-3 w-3" />
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="text-white flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
                    <span className="font-semibold text-lg">Krod AI</span>
                  </div>
                  <span className="font-normal text-xs text-indigo-300 mt-1">Argumenting Intelligence, Enhancing Discovery</span>
                </div>
              </div>
              <p className="text-gray-400 text-xs">Kroskod Labs. All rights reserved.</p>
            </div>
          </div>
      </footer>
      </div>
    </main>
  )
}
