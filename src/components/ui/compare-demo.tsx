import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="https://assets.aceternity.com/code-problem.png"
          secondImage="https://assets.aceternity.com/code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
      <div className="bg-[#F4F4F2] rounded-xl shadow-lg p-6 text-left max-w-md w-full">
        <h3 className="text-xl font-semibold mb-4 text-[#7C6A4E]">
          Before CredModi:
        </h3>
        <ul className="list-disc ml-6 text-[#434343] mb-6">
          <li>Opaque underwriting</li>
          <li>Predatory interest rates (24–70%)</li>
          <li>
            No accountability, Rare site visits, fake books, and zero transparency
          </li>
          <li>Builders judged by papers, not performance</li>
        </ul>
        <h3 className="text-xl font-semibold mb-4 text-[#4B1869]">
          With CredModi:
        </h3>
        <ul className="list-disc ml-6 text-[#434343]">
          <li>ML-powered behavioural and operational scoring</li>
          <li>Real-time risk signals, geo-risk overlays, fraud detection</li>
          <li>Safer, faster disbursals and investor-grade reporting</li>
          <li>Community trust built into credit</li>
        </ul>
      </div>
    </div>
  );
}
