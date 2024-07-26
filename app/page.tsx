"use client";

import { About } from "@/lib/components/About";
import { Header } from "@/lib/components/Header";
import { Hosts } from "@/lib/components/Hosts";
import { Sponsors } from "@/lib/components/Sponsors";
import { CTA } from "@/lib/components/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Sponsors />
      <Hosts />
      <CTA />
    </>
  );
}

const styles = {};
