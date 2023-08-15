import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import React from 'react';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
  return ( 
    <div>
    <Helmet>
      <title>Aquib AI</title>
      <meta name="description" content="Explore the frontier of AI! Chat with virtual intellects, craft images from thin air, get code assistance, and engage with famed AI personas—all in one dynamic hub. Dive into the future, today." />
      <meta name="keywords" content="aquib, aquib khan, ai, ai image, einstein, leonardo da vinci, messi, lionel, william shakespeare, ai code" />
    </Helmet>
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
    </div>
   );
}
 
export default LandingPage;
