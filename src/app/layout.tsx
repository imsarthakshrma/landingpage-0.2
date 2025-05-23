import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-providers"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight:["300", "400", "500", "600", "700"]
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Kroskod - Building Krod An Autonomous Reasoning Ai Research Assistant",
  description: "Not just a Deep Research AI, but an AI made for Deep Research",
}

/**
 * Root layout component that sets up global fonts, theming, and HTML structure for the application.
 *
 * Wraps all page content with a theme provider configured for system-based and class-based theme toggling, and applies imported Google fonts globally.
 *
 * @param children - The content to be rendered within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}