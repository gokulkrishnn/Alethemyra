'use client';

import { Waitlist } from '@clerk/nextjs';

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-oxidised-bronze text-primary">
      <div className="max-w-md w-full p-6 bg-iron-dark border border-iron rounded-xl shadow-[0_4px_24px_#d4b87833]">
        <h1 className="text-3xl font-bold text-marble text-center mb-6">Join Our Waitlist</h1>
        <p className="text-aegean text-center mb-8">
          Be among the first to experience Alethmyra when we launch.
        </p>
        <Waitlist />
      </div>
    </div>
  );
}