"use client";

import { About } from "@/lib/components/About";
import { Header } from "@/lib/components/Header";
import { Hosts } from "@/lib/components/Hosts";
import { Sponsors } from "@/lib/components/Sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Sponsors />
      <Hosts />
    </>
  );
}

const styles = {};
