"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Provides theme context to its children using the NextThemesProvider.
 *
 * Accepts all props supported by NextThemesProvider and passes them through, enabling theme management for descendant components.
 *
 * @param children - React nodes that will have access to the theme context.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
