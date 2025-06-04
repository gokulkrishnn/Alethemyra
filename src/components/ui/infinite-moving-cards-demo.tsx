"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[32rem] rounded-md flex flex-col antialiased bg-[#F4F4F2] text-[#7C6A4E] items-center justify-center relative overflow-hidden">
      <div className="relative w-full flex items-center justify-center">
        <div className="animate-spin-slow">
          <InfiniteMovingCards
            items={comparisonCards}
            direction="right"
            speed="fast"
            pauseOnHover={false}
            className="bg-[#F4F4F2] text-[#7C6A4E]"
          />
        </div>
      </div>
    </div>
  );
}

const comparisonCards = [
  {
    quote: "Before CredModi:\n\n1. Underwriting lacked clarity and consistency\n2. Predatory interest rates ranging from 24% to 70%\n3. Zero accountability: rare site visits, manipulated records, and no transparency\n4. Credit decisions based on paperwork, not on-ground performance\n5. No way to track where funds go — financial transparency was nearly impossible",
    name: "before",
    title: "",
  },
  {
    quote: "With CredModi:\n\n1. ML-driven behavioural and operational scoring\n2. Tailored to segment-specific insights and the realities of MSMEs — no “one-size-fits-all” approach\n3. Real-time risk monitoring with geo-risk overlays and fraud detection\n4. Faster, safer disbursals and reporting that meets investor-grade standards\n5. Credit built on community trust and transparency",
    name: "after",
    title: "",
  },
];
