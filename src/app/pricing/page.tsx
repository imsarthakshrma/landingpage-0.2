"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Check } from "lucide-react"

import SiteLayout from "@/components/site-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const faqItems = [
  {
    question: "What is a research query?",
    answer: "A research query is any question or request you submit to Krod AI. This includes questions, document analysis requests, code generation, and other interactions with the AI."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer academic discounts?",
    answer: "Yes, we offer special pricing for academic institutions, students, and researchers. Please contact our sales team for more information."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment provider."
  },
  {
    question: "Is there a free tr?",
    answer: "Yes, we offer a 14-day free trial for all new users. You can try all the features of the Professional plan before deciding which plan is right for you."
  }
]

export default function PricingPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const plansRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Animate pricing plans
    const plans = plansRef.current?.querySelectorAll(".pricing-card")
    if (plans) {
      gsap.fromTo(
        plans,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: plansRef.current,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        },
      )
    }

    // Animate FAQs
    const faqs = faqRef.current?.querySelectorAll(".faq-item")
    if (faqs) {
      gsap.fromTo(
        faqs,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqRef.current,
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
            Simple, Transparent <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 to-blue-600">Pricing</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-8">
            Choose the plan that fits your research needs. All plans include our core AI capabilities with different
            usage limits and features.
          </p>
        </div>

        {/* Pricing Plans */}
        <div ref={plansRef} className=" grid grid-cols-2 md:grid-cols-2 gap-6 mb-16">
          <PricingCard
            title="Intern Assistant"
            description="Perfect for individual researchers and students"
            price="Free"
            period="  "
            features={[
              "10 research queries per day",
              "Access to core AI capabilities",
              "Basic AI capabilities",
              "Email support",
              "2 pro web searches a day",
            ]}
            buttonText="Get Started"
            popular={false}
          />
          <PricingCard
            title="Pro Assistant"
            description="Ideal for professional researchers and small teams"
            price="$15"
            period="per month"
            features={[
              "500 research queries per month",
              "Advanced Assistant capabilities",
              "Be the first to use new features",
              "10 pro web searches a day",
              "Priority Support",
            ]}
            buttonText="Get Started"
            popular={true}
          />
          {/* <PricingCard
            title="Enterprise"
            description="For research teams and organizations"
            price="Custom"
            period="contact for pricing"
            features={[
              "Unlimited research queries",
              "All advanced AI capabilities",
              "Full document analysis & generation",
              "24/7 priority support",
              "Unlimited users",
              "Custom knowledge integration",
              "API access",
              "Dedicated account manager",
            ]}
            buttonText="Contact Sales"
            popular={false}
          /> */}
        </div>

        {/* FAQs */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h2>
          <div ref={faqRef} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-700"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:bg-white/5 px-4 py-3 rounded-lg transition-colors">
                    <h3 className="text-lg font-semibold text-purple-300">{item.question}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-2 text-white/80">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Research?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of researchers, academics, and professionals who are accelerating their work with Krod AI.
          </p>
          <Button className=" border border-gray-500 bg-black hover:bg-black/80 text-white rounded-full px-6 py-2 shimmer-button cursor-pointer ">
            Try Krod For Free
          </Button>
        </div>
      </div>
    </SiteLayout>
  )
}

function PricingCard({
  title,
  description,
  price,
  period,
  features,
  buttonText,
  popular,
}: {
  title: string
  description: string
  price: string
  period: string
  features: string[]
  buttonText: string
  popular: boolean
}) {
  return (
    <Card
      className={`pricing-card relative backdrop-blur-sm text-white ${
        popular ? "bg-gradient-to-b from-purple-900/40 to-black/40 border-purple-500" : "bg-black/30 border-gray-700"
      }`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-mono">
          Recommended
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-mono text-2xl">{title}</CardTitle>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-white/70 ml-2">{period}</span>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-white/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            popular
              ? "bg-purple-600 hover:bg-purple-700 text-white shimmer-button"
              : "bg-black hover:bg-black/70 text-white border border-gray-700"
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
