'use client';
import { SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../public/logo.jpg';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { useEffect } from "react";
import { CardStack } from "@/components/ui/card-stack";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { TransformationCards } from "@/components/ui/card-spotlight";
import AnimatedPinDemo from "@/components/3d-pin-demo";


export default function Home() {
  // Smooth scroll with animation
  useEffect(() => {
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          // Smoother scroll: longer duration, more pronounced effect
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          // Animate section: fade out, scale down, then fade in and scale up
          el.animate(
            [
              { opacity: 0.5, transform: "scale(0.96)" },
              { opacity: 1, transform: "scale(1.03)" },
              { opacity: 1, transform: "scale(1)" }
            ],
            { duration: 1800, easing: "cubic-bezier(.22,1.2,.36,1)" }
          );
          window.scrollTo({
            top: y,
            behavior: "smooth"
          });
        }
      }
    };
    // Attach to all nav links in header
    const nav = document.getElementById("main-nav");
    nav?.addEventListener("click", handleNavClick);
    return () => nav?.removeEventListener("click", handleNavClick);
  }, []);

  // Inherent features for CardStack
  const INHERENT_FEATURES = [
    {
      id: 0,
      name: "Transparency",
      designation: "",
      content: "Crystal-clear processes and data flows for all stakeholders.",
    },
    {
      id: 1,
      name: "Privacy",
      designation: "",
      content: "Your information is always protected and never misused.",
    },
    {
      id: 2,
      name: "Credibility",
      designation: "",
      content: "A platform trusted by developers, lenders, and communities.",
    },
    {
      id: 3,
      name: "Accountability",
      designation: "",
      content: "Every action is tracked and auditable for peace of mind.",
    },
    {
      id: 4,
      name: "Honesty",
      designation: "",
      content: "No hidden terms, no surprises—just honest credit.",
    },
    {
      id: 5,
      name: "Integrity",
      designation: "",
      content: "We do what's right, not what's easy, for your financial future.",
    },
    {
      id: 6,
      name: "Security",
      designation: "",
      content: "Security for your data and future, always at the core.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F2] text-[#7C6A4E]">
      {/* Header */}
      <header className="w-full bg-[#F4F4F2] border-b border-[#7C6A4E] shadow-md sticky top-0 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 relative overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 z-0 pointer-events-none animate-gradient-x bg-gradient-to-r from-[#F4F4F2]/30 via-[#7C6A4E]/30 to-[#F4F4F2]/30 blur-2xl opacity-60" />
          {/* Logo with scale/rotate on hover */}
          <Link
            href="/"
            className="flex items-center gap-2 z-10 group transition-transform duration-300"
          >
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Image src={Logo} alt="Alethmyra Logo" width={40} height={40} className="rounded-full shadow-lg" />
            </div>
            <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-[#C2A66C] via-[#7C6A4E] to-[#4B1869] bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-widest">
              Alethemyra
            </span>
          </Link>
          {/* Nav with underline animation */}
          <nav
            id="main-nav"
            className="hidden md:flex gap-4 md:gap-8 text-[#7C6A4E] font-semibold z-10"
          >
            {[
              { label: "Benefits", href: "#features" },
              { label: "Features", href: "#benefits" },
              { label: "About Us", href: "#about" },
              { label: "Impact", href: "#impact" },
              { label: "Demo", href: "#demo" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-1 hover:text-[#C2A66C] transition group"
              >
                <span>{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C2A66C] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          {/* Waitlist Button with pulse animation */}
          <div className="z-10">
            <SignUpButton mode="modal">
              <button className="px-4 md:px-6 py-2 rounded bg-[#7C6A4E] text-[#F4F4F2] font-semibold shadow hover:bg-[#C2A66C] hover:text-[#F4F4F2] transition relative overflow-hidden text-sm md:text-base">
                <span className="relative z-10">Join Waitlist</span>
                <span className="absolute inset-0 bg-[#C2A66C] opacity-0 group-hover:opacity-20 transition-all duration-500 animate-pulse"></span>
              </button>
            </SignUpButton>
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden z-20">
            {/* You can use a hamburger menu here if you want */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 md:py-20 bg-gradient-to-b from-[#F4F4F2] to-[#F4F4F2] px-4">
        <TypewriterEffect
          words={[
            { text: "The" },
            { text: "Future" },
            { text: "of" },
            { text: "Credit" },
            { text: "Intelligence" },
            { text: "for" },
            { text: "India's" },
            { text: "Real" },
            { text: "Builder" },
          ]}
          className="mb-6 text-[#7C6A4E]"
          cursorClassName="bg-[#7C6A4E]"
        />
        <p className="text-base md:text-lg lg:text-xl text-[#7C6A4E] mb-8 max-w-2xl">
          Built for Empowering Tier-2 Developer by a Tier-2 Developers
        </p>
        <SignUpButton mode="modal">
          <button className="px-8 py-3 rounded bg-[#7C6A4E] text-[#F4F4F2] font-semibold text-lg shadow hover:bg-[#C2A66C] hover:text-[#F4F4F2] transition">
            Join Waitlist
          </button>
        </SignUpButton>
      </section>

      {/* Features & Benefits Section with Enhanced 3D Cards */}
      <section id="features" className="max-w-6xl mx-auto py-10 md:py-16 px-2 md:px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#7C6A4E]">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow--200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="Crust">🧱</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                Crust Scoring
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                Solid Credit Foundation for India’s True Builders
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow-gold-200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="ML">🤖</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                ML-Powered API Risk Scores
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                Live project risk scoring, loan cap suggestions, tranche monitoring.
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow-gold-200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="Dashboard">📊</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                White-Labeled Dashboards
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                For NBFCs and funds to visualize risk triggers and score shifts.
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow-gold-200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="Fraud">🕵️‍♂️</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                Fraud & Anomaly Detection
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                Invoice-level discrepancies, vendor scorecards, geo-tagged site visits.
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow-gold-200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="Geo">🗺️</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                Geo-Risk Heatmaps
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                Local market trend overlays from real estate data APIs.
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-white flex flex-col items-center justify-between h-full relative group/card border-black/[0.1] rounded-2xl p-10 border shadow-2xl hover:shadow-gold-200/20 transition-all duration-300">
              <CardItem
                translateZ={120}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#7C6A4E] text-white text-3xl font-bold mb-6 shadow-lg"
              >
                <span role="img" aria-label="Audit">✅</span>
              </CardItem>
              <CardItem
                translateZ={80}
                className="font-bold text-2xl mb-3 text-[#222] text-center drop-shadow-lg"
              >
                Audit-Ready Compliance Tools
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-gray-600 text-center text-lg"
              >
                SHAP-based explainability for credit/risk committees.
              </CardItem>
            </CardBody>
          </CardContainer>
          {/* Empty cards for 3x3 grid symmetry */}
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Inherent Features Section with CardStack Animation */}
      <section id="benefits" className="max-w-6xl mx-auto py-0 px-2 md:px-4 flex flex-col items-center">
        <div className="relative flex flex-col items-center w-full" style={{ minHeight: "0", zIndex: 10 }}>
          <CardStack items={INHERENT_FEATURES} />
        </div>
      </section>

      {/* Mission, Vision, Story Section - Each in a Card */}
      <section
        id="about"
        className="bg-[#F4F4F2] text-[#7C6A4E] py-0 px-2 md:px-4 scroll-mt-24"
      >
        <h2
          className="text-2xl md:text-5xl font-extrabold text-center mb-4 md:mb-6"
          style={{ color: "#C2A66C" }}
        >
          OUR STORY
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
          <div className="flex-1 flex justify-center items-center">
            <EvervaultCard
              text="Mission"
              className="bg-[#F4F4F2] border border-[#F15A29] rounded-3xl flex items-center justify-center"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <EvervaultCard
              text="Vision"
              className="bg-[#F4F4F2] border border-[#F15A29] rounded-3xl flex items-center justify-center"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <EvervaultCard
              text="Story"
              className="bg-[#F4F4F2] border border-[#F15A29] rounded-3xl flex items-center justify-center"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 mt-0">
          <div className="flex-1 flex justify-center">
            <p className="text-base md:text-lg text-center max-w-xs">
              To democratize access to capital for India’s Tier-2 real estate developers by replacing outdated, opaque credit models with transparent, contextual, and real-time intelligence that reflects on-ground performance and community trust.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <p className="text-base md:text-lg text-center max-w-xs">
              To become the trusted credit infrastructure for Tier-2 developers across India—empowering them with smarter risk scoring, faster funding, and the financial dignity they’ve long been denied.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <p className="text-base md:text-lg text-center max-w-xs">
              Alethemyra was founded on the belief that technology should serve truth and structure with complete transparency. Our team is dedicated to building tools that make financial management simple, honest, and accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="impact" className="max-w-6xl mx-auto py-10 md:py-16 px-2 md:px-4 flex flex-col items-center bg-[#F4F4F2] scroll-mt-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#7C6A4E]">
          What We&apos;re Transforming
        </h2>
        <div className="w-full flex flex-col items-center">
          <TransformationCards />
        </div>
      </section>
      
      {/* Demo Section with 3d-pin cards */}
      <section id="demo" className="max-w-6xl mx-auto py-10 md:py-16 px-2 md:px-4 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8" style={{ color: "#C2A66C" }}>
          Explore our service
        </h2>
        <AnimatedPinDemo 
          userTitle="User Dashboard"
          userDescription="Access your personal dashboard and account information. Make sure you remember your username and password so that you can sign in anytime."
          adminTitle="Admin Panel"
          adminDescription="To understand how your application will be processed, log in using these credentials: Username: admin, Password: password123"
        />
      </section>
    </div>
  );
}
