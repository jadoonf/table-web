"use client";

import CTA from "@/components/cta";
import Features from "@/components/features";
import FooterMarketing from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-start">
      <Header />
      <Features />
      <CTA />
      <FooterMarketing />
    </main>   
  );
}
    