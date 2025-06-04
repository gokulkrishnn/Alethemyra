"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    // Only duplicate once
    if (containerRef.current && scrollerRef.current && !start) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicatedItem);
      });

      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }

      // Make it slower: 120s for slow, 60s for normal, 30s for fast
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
      setStart(true);
    }
  }, [direction, speed, start]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
        "bg-[#F4F4F2]"
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 animate-infinite-scroll",
          className
        )}
        style={{
          animationDirection: direction === "left" ? "normal" : "reverse",
          animationDuration: "6s", // Force fast speed regardless of prop
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
        onMouseEnter={pauseOnHover ? (e) => (e.currentTarget.style.animationPlayState = "paused") : undefined}
        onMouseLeave={pauseOnHover ? (e) => (e.currentTarget.style.animationPlayState = "running") : undefined}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative min-w-[400px] max-w-[400px] rounded-2xl border border-[#C2A66C] bg-[#F4F4F2] px-8 py-6 flex flex-col justify-between"
          >
            <p className="text-[#7C6A4E] font-semibold">{item.quote}</p>
            <div className="mt-4">
              <p className="font-bold text-[#7C6A4E]">{item.name}</p>
              <p className="text-[#C2A66C]">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
