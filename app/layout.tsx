// import "./globals.css"
// import { Inter } from "next/font/google"
// import type React from "react"
// import Cursor from "@/components/cursor"
// import { Analytics } from "@vercel/analytics/react"
// import ScrollProgress from "@/components/ScrollProgress"
// import { UnlockProvider } from "@/contexts/UnlockContext"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata = {
//   title: "Romil Jain - Software Engineer",
//   description: "Portfolio of Romil Jain, a Software Engineer specializing in AI and full-stack development",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} bg-black text-white`}>
//         <UnlockProvider>
//           <Cursor />
//           <ScrollProgress />
//           {children}
//           <Analytics />
//         </UnlockProvider>
//       </body>
//     </html>
//   )
// }

import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import Cursor from "@/components/cursor"
import { Analytics } from "@vercel/analytics/react"
import ScrollProgress from "@/components/ScrollProgress"
import { UnlockProvider } from "@/contexts/UnlockContext"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Romil Jain - Software Engineer",
  description: "Portfolio of Romil Jain, a Software Engineer specializing in AI and full-stack development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <ThemeProvider attribute="class">
          <UnlockProvider>
            <Cursor />
            <ScrollProgress />
            {children}
            <Analytics />
          </UnlockProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}