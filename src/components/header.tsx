"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Squares } from "./ui/squares-background";

const TRUSTED_BY = [
  { src: "/github.svg", alt: "GitHub" },
  { src: "/gitlab.svg", alt: "GitLab" },
  { src: "/bitbucket.svg", alt: "Bitbucket" },
  { src: "/azure.svg", alt: "Azure DevOps" },
  { src: "/jenkins.svg", alt: "Jenkins" }
];

export default function Header() {
  return (
    <div className="relative min-h-[calc(100vh-40px)] bg-[#060606]">
      {/* Squares Background */}
      <Squares 
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#333"
        hoverFillColor="#222"
        className="opacity-50"
      />
      
      {/* Content */}
      <main className="relative flex min-h-[calc(100vh-40px)] flex-col items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          {/* Badge */}
          <Link href="/">
            <h2 className="text-sm text-muted-foreground group font-mono mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border border-white/10 rounded-3xl w-fit mb-8">
              <span className="tracking-tight uppercase">
                Secure your codebase
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </span>
            </h2>
          </Link>

          {/* Title */}
          <h1 className="animate-fade-in font-mono text-balance bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text py-6 text-5xl font-bold tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl">
            Find and stop malware
            <br className="hidden md:block" /> in your codebase
          </h1>

          {/* Description */}
          <p className="animate-fade-in mx-auto max-w-2xl mb-12 text-balance text-xl tracking-tight text-muted-foreground opacity-0 [--animation-delay:400ms]">
            Behavioral analysis at build-time to detect and prevent malicious code.
            <br className="hidden md:block" /> Protect your supply chain before it's too late.
          </p>

          {/* Command Display */}
          <div className="animate-fade-in mb-12 rounded-lg bg-gray-900/50 p-4 font-mono text-sm opacity-0 [--animation-delay:600ms] backdrop-blur-sm">
            npm install @jibril/security
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in opacity-0 [--animation-delay:800ms]">
            <Link href="/signup" className="inline-block">
              <Button size="lg" className="px-8 py-6 text-lg rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600">
                Secure Your Code
              </Button>
            </Link>
          </div>

          {/* Logo Grid */}
          <div className="animate-fade-in mt-24 flex flex-wrap items-center justify-center gap-12 grayscale opacity-0 [--animation-delay:1000ms]">
            {TRUSTED_BY.map((logo) => (
              <div key={logo.src} className="relative h-8 w-24">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain opacity-50 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
