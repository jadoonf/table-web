"use client";

import Link from "next/link";
import MobileNav from "./nav-mobile";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRightIcon, Download } from "lucide-react";
import { ThemeToggle } from "./theme-toggler";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ ease: [0.17, 0.67, 0.83, 0.67], duration: 0.8 }}
      className="sticky top-0 z-30 py-3 w-full font-sans border-b border-transparent transition duration-200 ease-in-out md:bg-transparent animate-header-slide-down-fade border-white/10 md:backdrop-blur-sm md:backdrop-blur-md"
    >
      <div className="hidden flex-row justify-between items-center px-6 mx-auto w-full md:flex lg:max-w-7xl h-[58px] md:max-w-ful">
        <Link href="/" className="pt-10 md:pt-0 w-[100px] lg:w-[180px]">
          <h1 className="font-mono text-3xl font-bold tracking-tighter uppercase">
            ARC
          </h1>
        </Link>
        <div className="flex items-center md:gap-4 lg:gap-6 text-[rgb(120,125,129)] mx-auto text-sm font-bold">
          <Link
            href="/about"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Blog
          </Link>
          <Link
            href="/customers"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Customers
          </Link>
          <Link
            href="/pricing"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Pricing
          </Link>
          <Link
            href="/enterprice"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Enterprice
          </Link>
          <Link
            href="/changelog"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Changelog
          </Link>
          <Link
            href="/docs"
            className="transition duration-150 ease-in-out hover:text-slate-50"
          >
            Docs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[rgb(120,125,129)]  hover:text-slate-50 transition ease-in-out duration-150 font-bold md:hidden lg:inline-block">
            Sign in
          </button>
          <Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] dark:text-black">
            <span>Download Arc </span>
            <Download className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
          <ThemeToggle />

        </div>
      </div>
      <MobileNav />
    </motion.nav>
  );
}
