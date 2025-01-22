"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Particles from "./ui/particles";

export default function CTA() {
  return (
    <section className="relative w-full py-24 overflow-hidden border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Ready to secure your codebase?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading teams who trust us to protect their code and dependencies
          </p>
          <Link href="/signup">
            <Button size="lg" className="px-8 py-6 text-lg rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
      <Particles
        className="absolute inset-0 -z-10 hidden dark:block"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#ffffff"
      />
      <Particles
        className="absolute inset-0 -z-10 block dark:hidden"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color="#000000"
      />
    </section>
  );
}
