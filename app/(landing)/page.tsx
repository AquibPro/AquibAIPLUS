import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Head from "next/head";
import React from 'react';

const LandingPage = () => {
  return ( 
    <div>
    <Head>
      <title>Aquib AI</title>
      <meta name="og:title" content="Aquib AI" />
      <meta name="og:description" content="Explore the frontier of AI! Chat with virtual intellects, craft images from thin air, get code assistance, and engage with famed AI personas—all in one dynamic hub. Dive into the future, today." />
      <meta name="keywords" content="aquib, aquib khan, ai, ai image, einstein, leonardo da vinci, messi, lionel, william shakespeare, ai code" />
      <meta name="author" content="Aquib Khan" />
    </Head>
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
    </div>
   );
}
 
export default LandingPage;
