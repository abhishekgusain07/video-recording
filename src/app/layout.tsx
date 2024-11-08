import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { Toaster } from 'sonner'
import ThemeProvider from '@/components/theme'
import ClientToaster from '@/components/client-toaster'
import ReactQueryProvider from '@/react-query'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Opal',
  description: 'Share AI powered videos with your friends.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ClerkProvider>
          <ThemeProvider 
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
            storageKey="opal-theme"
          >
            <div className="min-h-screen bg-background">
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
              <ClientToaster />
            </div>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}