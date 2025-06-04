"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const CardStack = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
  }[];
}) => {
  // Convert items to testimonial format
  const testimonials = items.map((item) => ({
    quote: typeof item.content === "string" ? item.content : "",
    name: item.name,
    title: item.designation,
  }));

  return (
    <div className="relative w-full max-w-6xl flex flex-col items-center">
      <h3 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-[#7C6A4E]">
        Inherent Features
        <br />
        of Alethmyra
      </h3>
      <div className="w-full h-[30rem] bg-[#F4F4F2]">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="bg-[#F4F4F2]"
        />
      </div>
    </div>
  );
};
