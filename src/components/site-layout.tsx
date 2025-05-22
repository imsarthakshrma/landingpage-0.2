"use clients"

import React, { useRef } from "react"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { gsap } from "gsap"



export  default function SiteLayout({ children }: { children: React.ReactNode }) {

    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const headerRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const isHomePage = pathname === "/"

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
        tl.fromTo(headerRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      }, [])


      
    return (
        <main className="relative flex flex-col items-center min-h-screen">

            {/* background Image */}
            <div className="fixed inset-0 z-0">
                <div className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url(/images/background-hero.png)"}}
                />
            </div>


            {/* Content */}
            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                    <div className="flex justify-center py-4">
                        <header
                        ref={headerRef}
                        className="flex justify-between items-center py-1 px-4 w-10/12 max-w-4xl rounded-lg bg-black/30 backdrop-blur-sm border-[2.2px] border-gray-700"
                        >
                        {/* TODO: content implementation here */}
                        </header>
                    </div>
                </div>
            </div>
            
        </main>
    )
}