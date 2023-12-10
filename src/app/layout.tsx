import type { Metadata } from "next"
import Navbar from "@/components/Utilities/Navbar"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: "300" })

export const metadata: Metadata = {
  title: "Anime List",
  description: "Website Anime List",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
