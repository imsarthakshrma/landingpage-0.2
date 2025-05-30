"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import SiteLayout from "@/components/site-layout"

export default function TermsPage() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate heading
    gsap.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Animate content
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" },
    )
  }, [])

  return (
    <SiteLayout>
      <div className="py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 to-blue-600">
              Conditions
            </span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-normal">Last updated: June 2025</p>
        </div>

        {/* Terms Content */}
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 text-white/80 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Kroskod. These Terms and Conditions govern your use of our website, products, and services.
            </p>
            <p>
              By accessing or using Krod AI, you agree to be bound by these Terms. If you disagree with any part of the
              terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Service:</strong> Refers to the Kroskod platform, including all features,
                functionalities, and user interfaces.
              </li>
              <li>
                <strong className="text-white">User:</strong> Any individual or entity that accesses or uses the
                Service.
              </li>
              <li>
                <strong className="text-white">Account:</strong> A registered profile created by a User to access and
                use the Service.
              </li>
              <li>
                <strong className="text-white">Content:</strong> Any information, data, text, software, graphics, or
                other materials that Users may access through the Service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
            <p className="mb-4">
              To access certain features of the Service, you may be required to register for an account. You agree to
              provide accurate, current, and complete information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <p className="mb-4">
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password. We encourage you to use "strong" passwords (passwords that use
              a combination of upper and lower case letters, numbers, and symbols) with your account.
            </p>
            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming
              aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of Kroskod and its licensors. The Service is protected by copyright, trademark, and other laws of
              both the United States and foreign countries.
            </p>
            <p>
              Our trademarks and trade dress may not be used in connection with any product or service without the prior
              written consent of Kroskod.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. User Content</h2>
            <p className="mb-4">
              You retain all rights to any content you submit, post, or display on or through the Service. By
              submitting, posting, or displaying content on or through the Service, you grant us a worldwide,
              non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, perform, and display such content in connection with providing the
              Service.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to all the content that you post on or
              through the Service, and that the use of your content does not violate these Terms or any applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Prohibited Uses</h2>
            <p className="mb-4">You agree not to use the Service:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                In any way that violates any applicable federal, state, local, or international law or regulation.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail," "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate Kroskod, a Kroskod employee, another user, or any other person
                or entity.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the
                Service, or which, as determined by us, may harm Kroskod or users of the Service or expose them to
                liability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account and bar access to the Service immediately, without prior notice
              or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
              not limited to a breach of the Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using the Service, or contact us to
              request account deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              In no event shall Kroskod, nor its directors, employees, partners, agents, suppliers, or affiliates, be
              liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at legal@kroskod.com.</p>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}
