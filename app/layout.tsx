import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "WsCube Career Mapping Tool",
  description: "AI-powered career guidance for tech students",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main>{children}</main>
          <footer className="bg-gray-100 py-8 mt-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>© {new Date().getFullYear()} WsCube Tech. All rights reserved.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'