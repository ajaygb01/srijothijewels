"use client";

import Header from "@/components/custom/Header";
import Hero from "@/components/custom/Hero";
import Legacy from "@/components/custom/Legacy";
import StoreVisit from "@/components/custom/StoreVisit";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import ProductExperience from "@/components/custom/ProductExperience";
import FeaturedCollection from "@/components/custom/FeaturedCollection";
import useSmoothScroll from "@/hooks/useSmoothScroll"; // Import the hook

export default function Home() {
  useSmoothScroll(); // Use the hook

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-brand-background group/design-root overflow-x-hidden" style={{fontFamily: '"Public Sans", "Noto Sans", sans-serif'}}>
      <Header />
      <main className="layout-container flex h-full grow flex-col">
        <div id="home">
          <Hero />
        </div>
        <FeaturedCollection />
        <div id="collections">
          <ProductExperience />
        </div>
        <div id="legacy">
          <Legacy />
        </div>
        <div id="store-visit">
          <StoreVisit />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}