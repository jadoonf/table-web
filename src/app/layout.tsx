import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { ny } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { RootProvider } from 'fumadocs-ui/provider';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arc - A right way to do softwares",
  description: "Explore the fastest way of processing queue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={ny(inter.className, GeistMono.variable, GeistSans.variable, 'relative')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <StyledComponentsRegistry>
            <RootProvider>
              {children}
            </RootProvider>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
