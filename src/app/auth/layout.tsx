import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-providers"
// import { auth } from "@/lib/auth"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["300", "400", "500", "600", "700"]
  })
  
  const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-space-mono",
  })
  
  export const metadata: Metadata = {
    title: "Kroskod - Sign In / Sign Up",
    description: "Sign in or create an account to access your dashboard",
  }
  
  /**
   * Provides the layout structure and theming for authentication pages.
   *
   * Wraps authentication content in a centered, responsive layout with dark mode enabled by default, custom fonts, and system theme support.
   *
   * @param children - The authentication page content to render within the layout.
   */
  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html className="dark" suppressHydrationWarning>
        <body className={`${inter.variable} ${spaceMono.variable} font-sans min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    )
  }