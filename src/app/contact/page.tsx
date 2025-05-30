"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react"

import SiteLayout from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Animate form
    gsap.fromTo(
      formRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" },
    )

    // Animate contact info
    gsap.fromTo(
      contactInfoRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" },
    )
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Have questions about Krod AI? Our team is here to help. Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <div>
            {formSubmitted ? (
              <Card className="bg-black/30 backdrop-blur-sm border-gray-700 text-white p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/20 mb-4">
                    <MessageSquare className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-white/80 mb-4">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-black hover:bg-black/70 text-white border border-gray-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              </Card>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <Card className="bg-black/30 backdrop-blur-sm border-gray-700 text-white">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">
                            Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="bg-black/30 border-gray-700 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="bg-black/30 border-gray-700 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          placeholder="Subject of your message"
                          required
                          className="bg-black/30 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          required
                          className="bg-black/30 border-gray-700 text-white resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white shimmer-button"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div ref={contactInfoRef} className="space-y-6">
            <Card className="bg-black/30 backdrop-blur-sm border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                    <p className="text-white/80 mb-1">For general inquiries:</p>
                    <a href="mailto:info@krodai.com" className="text-purple-300 hover:text-purple-200">
                      info@krodai.com
                    </a>
                    <p className="text-white/80 mt-2 mb-1">For support:</p>
                    <a href="mailto:support@krodai.com" className="text-purple-300 hover:text-purple-200">
                      support@krodai.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* <Card className="bg-black/30 backdrop-blur-sm border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                    <p className="text-white/80 mb-1">Customer Support:</p>
                    <a href="tel:+1-800-123-4567" className="text-purple-300 hover:text-purple-200">
                      +1 (800) 123-4567
                    </a>
                    <p className="text-white/80 mt-2 mb-1">Sales:</p>
                    <a href="tel:+1-800-987-6543" className="text-purple-300 hover:text-purple-200">
                      +1 (800) 987-6543
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* <Card className="bg-black/30 backdrop-blur-sm border-gray-700 text-white">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                    <p className="text-white/80">
                      Krod AI Headquarters
                      <br />
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="faq-item">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">How quickly will I receive a response?</h3>
              <p className="text-white/80">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please
                contact our support team by phone.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Do you offer demos for enterprise clients?</h3>
              <p className="text-white/80">
                Yes, we offer personalized demos for enterprise clients. Please contact our sales team to schedule a
                demo tailored to your organization's needs.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">How can I report a technical issue?</h3>
              <p className="text-white/80">
                For technical issues, please email our support team at support@krodai.com with details of the problem
                you're experiencing. Screenshots or error messages are helpful for faster resolution.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </SiteLayout>
  )
}
