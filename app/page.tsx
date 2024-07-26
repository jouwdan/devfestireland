"use client";

import { About } from "@/lib/components/About";
import { Header } from "@/lib/components/Header";
import { Hosts } from "@/lib/components/Hosts";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Hosts />
    </>
  );
}

const styles = {};
