"use client";
import {
  CheckIcon,
  EyeIcon,
  Github,
  PlugZap2Icon,
  ShieldAlertIcon,
  XIcon,
} from "lucide-react";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { ny } from "@/lib/utils";

export default function Features() {
  return (
    <div className="relative my-32 mx-auto rounded-none md:w-full xl:w-4/5 2xl:w-3/5 max-w-[1300px] font-geist md:border-[1.2px]">
      {/* Problem Education Section */}
      <div className="col-span-3 flex flex-col justify-center items-center p-10 text-center border-b-[1.2px]">
        <h2 className="text-3xl font-bold mb-6">The Growing Threat of Code-Based Attacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="p-6 rounded-lg border bg-background/50">
            <XIcon className="w-8 h-8 mb-4 text-red-500 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Malicious Dependencies</h3>
            <p className="text-sm text-muted-foreground">
              Recent incidents like Ledger and Lottie showcase how info stealers, cryptominers, and APTs exploit package ecosystems
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-background/50">
            <XIcon className="w-8 h-8 mb-4 text-red-500 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">CI Tool Compromises</h3>
            <p className="text-sm text-muted-foreground">
              The Codecov breach demonstrated how build tools can be weaponized to access sensitive environments
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-background/50">
            <XIcon className="w-8 h-8 mb-4 text-red-500 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Malicious PRs</h3>
            <p className="text-sm text-muted-foreground">
              Projects like Exo and Ultralytics were targeted through sophisticated PR-based attacks
            </p>
          </div>
        </div>
      </div>

      {/* Threat Surface Visualization */}
      <div className="col-span-3 p-10 border-b-[1.2px] bg-gradient-to-b from-background to-background/50">
        <h2 className="text-3xl font-bold mb-8 text-center">Modern Threat Surface</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg border bg-background/80 backdrop-blur">
              <h3 className="text-xl font-semibold mb-3">AI Agent Surface</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Average dependencies: 200+</li>
                <li>• Transitive dependencies: 1000+</li>
                <li>• CI runs per month: 500+</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg border bg-background/80 backdrop-blur">
              <h3 className="text-xl font-semibold mb-3">Crypto Library Surface</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Direct dependencies: 150+</li>
                <li>• Indirect dependencies: 800+</li>
                <li>• Monthly builds: 300+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Approach */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-[1.2px]">
        <div className="flex relative flex-col justify-start items-start p-10 border-r-[1.2px]">
          <div className="flex gap-2 items-center mb-4">
            <ShieldAlertIcon className="w-5 h-5" />
            <h3 className="font-semibold">Runtime Security</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Powered by eBPF at the kernel level, capturing system-level interactions for comprehensive monitoring
          </p>
        </div>
        <div className="flex relative flex-col justify-start items-start p-10 border-r-[1.2px]">
          <div className="flex gap-2 items-center mb-4">
            <EyeIcon className="w-5 h-5" />
            <h3 className="font-semibold">Threat Detection</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Detection recipes capture the temporal view of attacks, not just isolated events, for better accuracy
          </p>
        </div>
        <div className="flex relative flex-col justify-start items-start p-10">
          <div className="flex gap-2 items-center mb-4">
            <PlugZap2Icon className="w-5 h-5" />
            <h3 className="font-semibold">Easy Integration</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            One-step GitHub integration with instant alerts in your existing tools and workflows
          </p>
        </div>
      </div>

      {/* Use Cases */}
      <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 p-10 border-b-[1.2px]">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Comprehensive Protection</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">Catch Malicious Dependencies</p>
                <p className="text-sm text-muted-foreground">Detect threats in both public and private packages</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">Prevent Supply Chain Attacks</p>
                <p className="text-sm text-muted-foreground">Stop advanced APT threats before they impact production</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">Insider Threat Detection</p>
                <p className="text-sm text-muted-foreground">Identify malicious maintainers and backdoored PRs</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Why It's Different</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">Built for Engineers</p>
                <p className="text-sm text-muted-foreground">Designed for development workflows, not just security teams</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">Zero Overhead</p>
                <p className="text-sm text-muted-foreground">Lightweight architecture with innovative data structures</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 mt-1 text-green-500" />
              <div>
                <p className="font-medium">ML Artifact Security</p>
                <p className="text-sm text-muted-foreground">Best-in-class coverage for pickles, datasets, and models</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="col-span-3 flex flex-col items-center justify-center p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay vigilant. Ship secure code with confidence.</h2>
        <p className="text-xl text-muted-foreground mb-8">Stay ahead of emerging threats in your development pipeline</p>
        <Link href="/signup" className="z-50">
          <Button size="lg" className="px-8 py-6 text-lg rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-zinc-800 hover:to-zinc-600">
            Secure Your Codebase Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
