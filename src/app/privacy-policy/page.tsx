"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

import SiteLayout from "@/components/site-layout"

export default function PrivacyPolicyPage() {
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
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-600 to-blue-600">Policy</span>
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto font-normal">Last updated: June 2025</p>
        </div>

        {/* Privacy Policy Content */}
        <div
          ref={contentRef}
          className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-xl p-8 text-white/80 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Kroskod, we respect your privacy and are committed to protecting your personal data. This privacy
              policy will inform you about how we look after your personal data when you visit our website and use our
              services, and tell you about your privacy rights and how the law protects you.
            </p>
            <p>
              Please read this privacy policy carefully before using our services. By using Kroskod, you consent to the
              practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
            <p className="mb-4">We may collect, use, store, and transfer different kinds of personal data about you:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Identity Data:</strong> Includes first name, last name, username or
                similar identifier.
              </li>
              <li>
                <strong className="text-white">Contact Data:</strong> Includes email address and phone number.
              </li>
              <li>
                <strong className="text-white">Technical Data:</strong> Includes internet protocol (IP) address, your
                login data, browser type and version, time zone setting and location, browser plug-in types and
                versions, operating system and platform, and other technology on the devices you use to access our
                service.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Includes information about how you use our website
                and services, including your search queries, feature usage, and interaction with our AI.
              </li>
              <li>
                <strong className="text-white">Research Data:</strong> Includes any research content, documents, or data
                you upload or input into our system for analysis.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our service, including monitoring the usage of our service.</li>
              <li>To manage your account and provide you with customer support.</li>
              <li>To perform contract obligations between you and us.</li>
              <li>To improve our service, products, marketing, and customer relationships.</li>
              <li>
                To personalize your experience and deliver content and product offerings relevant to your interests.
              </li>
              <li>To process and deliver your orders including managing payments and collecting money owed to us.</li>
              <li>To communicate with you about updates, security alerts, and support messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
            <p className="mb-4">
              We have implemented appropriate security measures to prevent your personal data from being accidentally
              lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
              your personal data to those employees, agents, contractors, and other third parties who have a business
              need to know.
            </p>
            <p>
              We have put in place procedures to deal with any suspected personal data breach and will notify you and
              any applicable regulator of a breach where we are legally required to do so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention</h2>
            <p className="mb-4">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it
              for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            <p>
              To determine the appropriate retention period for personal data, we consider the amount, nature, and
              sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your
              personal data, the purposes for which we process your personal data, and whether we can achieve those
              purposes through other means, and the applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Data Protection Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following data protection rights:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>The right to access, update, or delete the information we have on you.</li>
              <li>
                The right of rectification - the right to have your information corrected if it is inaccurate or
                incomplete.
              </li>
              <li>The right to object to our processing of your personal data.</li>
              <li>
                The right of restriction - the right to request that we restrict the processing of your personal
                information.
              </li>
              <li>
                The right to data portability - the right to be provided with a copy of your personal data in a
                structured, machine-readable format.
              </li>
              <li>
                The right to withdraw consent at any time where we rely on your consent to process your personal
                information.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our service and store certain
              information. Cookies are files with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, you can contact us at support@kroskod.com.</p>
          </section>
        </div>
      </div>
    </SiteLayout>
  )
}
