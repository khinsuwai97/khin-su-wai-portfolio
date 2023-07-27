import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';

const euro = localFont({
  variable: '--font-eurostile-webfont',
  src: './font/eurostile-webfont.woff2',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khin Su Portfolio',
  description: 'Detail of my porfolio and projects',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/png" sizes="48x48" />
      </head>

      <body className={`${euro.variable} font-euro dark:bg-primary bg-white`}>
        <Providers>
          <div className="w-full">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
