"use client";

import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#C2A66C", // Changed from #262626 to golden
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-[#7C6A4E] bg-[#F4F4F2]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [194, 166, 108], // #C2A66C
              [124, 106, 78],  // #7C6A4E
            ]}
            dotSize={3}
          />
        )}
      </motion.div>
      {children}
    </div>
  );
};

export const TransformationCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl">
      <CardSpotlight className="flex-1 min-h-[440px] bg-white/5">
        <div className="relative z-10 h-full flex flex-col items-start justify-start p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#7C6A4E] self-center">
            Before CredModi
          </h3>
          <ul className="text-[#4A4031] text-base md:text-lg font-medium space-y-4 list-disc pl-4">
            <li>Underwriting lacked clarity and consistency</li>
            <li>Predatory interest rates ranging from 24% to 70%</li>
            <li>
              Zero accountability: rare site visits, manipulated records, and no
              transparency
            </li>
            <li>Credit decisions based on paperwork, not on-ground performance</li>
            <li>
              No way to track where funds go — financial transparency was nearly
              impossible
            </li>
          </ul>
        </div>
      </CardSpotlight>

      <CardSpotlight className="flex-1 min-h-[440px] bg-white/5">
        <div className="relative z-10 h-full flex flex-col items-start justify-start p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#7C6A4E] self-center">
            With CredModi
          </h3>
          <ul className="text-[#4A4031] text-base md:text-lg font-medium space-y-4 list-disc pl-4">
            <li>ML-driven behavioural and operational scoring</li>
            <li>
              Tailored to segment-specific insights and the realities of MSMEs — no
              &quot;one-size-fits-all&quot; approach
            </li>
            <li>
              Real-time risk monitoring with geo-risk overlays and fraud detection
            </li>
            <li>
              Faster, safer disbursals and reporting that meets investor-grade
              standards
            </li>
            <li>Credit built on community trust and transparency</li>
          </ul>
        </div>
      </CardSpotlight>
    </div>
  );
};
