"use client";

import Logo from "@/components/elements/logo/logo";
import MyHeader from "@/components/myheader/myheader";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const pricingRef = useRef(null);
  const basicPlanRef = useRef(null);
  const premiumPlanRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Close mobile menu on scroll for better UX
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Handle clicks outside mobile menu to close it
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest(".mobile-menu-container") &&
        !e.target.closest(".hamburger-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Handle window resize - close mobile menu on larger screens
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    // Dynamically import ScrollReveal only on the client side
    let sr;

    const initScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;

      // Configure ScrollReveal animations
      sr = ScrollReveal({
        origin: "bottom",
        distance: "40px",
        duration: 1000,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        reset: false,
      });

      // Apply animations to different sections
      if (heroRef.current) {
        sr.reveal(heroRef.current.querySelector("h1"), { delay: 100 });
        sr.reveal(heroRef.current.querySelector("p"), { delay: 300 });
        sr.reveal(
          heroRef.current.querySelector("div.flex.flex-col.sm\\:flex-row"),
          { delay: 500 }
        );
      }

      if (statsRef.current) {
        sr.reveal(statsRef.current, {
          delay: 300,
          origin: "bottom",
        });
      }

      if (missionRef.current) {
        sr.reveal(missionRef.current.querySelector("div.inline-block"), {
          delay: 100,
          origin: "left",
        });
        sr.reveal(missionRef.current.querySelector("h2"), {
          delay: 200,
          origin: "left",
        });
        sr.reveal(missionRef.current.querySelector("p"), {
          delay: 300,
          origin: "left",
        });
      }

      if (visionRef.current) {
        sr.reveal(visionRef.current.querySelector("h2"), {
          delay: 400,
          origin: "left",
        });
        sr.reveal(visionRef.current.querySelector("p"), {
          delay: 500,
          origin: "left",
        });
      }

      if (pricingRef.current) {
        sr.reveal(pricingRef.current.querySelector("h2"), {
          delay: 100,
        });
      }

      if (basicPlanRef.current) {
        sr.reveal(basicPlanRef.current, {
          delay: 200,
          origin: "left",
          distance: "60px",
        });
      }

      if (premiumPlanRef.current) {
        sr.reveal(premiumPlanRef.current, {
          delay: 400,
          origin: "right",
          distance: "60px",
        });
      }

      if (ctaRef.current) {
        sr.reveal(ctaRef.current.querySelector("h2"), { delay: 100 });
        sr.reveal(ctaRef.current.querySelector("p"), { delay: 200 });
        sr.reveal(ctaRef.current.querySelector("div.flex"), { delay: 300 });
      }

      if (footerRef.current) {
        sr.reveal(footerRef.current.querySelectorAll("div")[0], {
          delay: 100,
          origin: "bottom",
          interval: 100,
        });
        sr.reveal(footerRef.current.querySelectorAll("div")[1], {
          delay: 200,
          origin: "bottom",
          interval: 100,
        });
        sr.reveal(footerRef.current.querySelectorAll("div")[2], {
          delay: 300,
          origin: "bottom",
          interval: 100,
        });
        sr.reveal(footerRef.current.querySelectorAll("div")[3], {
          delay: 400,
          origin: "bottom",
          interval: 100,
        });
      }
    };

    // Only run in browser environment
    if (typeof window !== "undefined") {
      initScrollReveal();
    }

    // No need to return cleanup for ScrollReveal
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="medium" customSize="24px" className="text-pink-500" />
          </div>

          {/* Navigation */}
          <MyHeader
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navItems={[
              { label: "Contact", href: "#" },
              { label: "About", href: "#" },
              { label: "Pricing", href: "#" },
            ]}
          />

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="text-gray-800 hover:text-pink-500 font-medium hidden md:block"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-[#f06694] to-[#f6b763] text-white px-4 py-2 sm:px-5 sm:py-2 rounded-full hover:opacity-90 transition-opacity font-medium text-sm sm:text-base"
            >
              Try for free
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`mobile-menu-container absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg transform transition-all duration-300 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-6 py-5">
            <nav className="flex flex-col space-y-4">
              {[
                { label: "Contact", href: "#" },
                { label: "About", href: "#" },
                { label: "Pricing", href: "#" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-gray-800 hover:text-pink-500 font-medium text-lg py-2 border-b border-gray-200/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-gray-800 hover:text-pink-500 font-medium text-lg py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full min-h-screen bg-gradient-to-b from-[#edc6d3] via-[#c0cbd1] to-[#a6d7e0] flex flex-col items-center justify-center text-center px-4 sm:px-6 pb-16 sm:pb-20 pt-24 sm:pt-16"
        >
          <div className="container max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 max-w-5xl mx-auto">
              Enhance Learning with{" "}
              <span className="text-[#3d3d3d]">Evolvia</span>,
              <br className="hidden sm:block" />
              Manage Progress Effectively.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-8 sm:mb-10 max-w-3xl mx-auto">
              At Evolvia, we empower educators, institutions, and learners with
              cutting-edge tools to analyze learning data and effectively manage
              progress. Our platform transforms complex insights into actionable
              strategies, helping you optimize learning outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-[#f06694] to-[#f6b763] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Try Evolvia for free
              </Link>
              <Link
                href="/premium"
                className="text-gray-800 border border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto mt-3 sm:mt-0"
              >
                Try Premium for 30 days
              </Link>
            </div>

            {/* Stats cards section */}
            <div className="mt-12 sm:mt-16">
              <div
                ref={statsRef}
                className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
                  <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
                    <div className="mb-2 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-1">
                      100k
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Registered Users
                    </p>
                  </div>
                  <div className="text-center border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0">
                    <div className="mb-2 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-1">
                      100M
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Monthly Questions
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-4xl sm:text-5xl font-bold mb-1">98%</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Satisfaction Rate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#a6d7e0] to-white">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16 relative">
              {/* Left Text Content */}
              <div ref={missionRef} className="md:w-1/2 order-2 md:order-1">
                <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#f0d4e3] text-gray-800 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
                  Mission & Vision
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-8">
                  Our Mission
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12">
                  To empower learners, educators, and organizations with
                  innovative analytics and progress management tools that
                  transform data into actionable insights—enhancing learning
                  outcomes, fostering growth, and driving success.
                </p>

                <div ref={visionRef}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 sm:mb-8">
                    Our Vision
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700">
                    To be a global leader in learning analytics and progress
                    management, creating smarter, data-driven educational
                    experiences that inspire continuous improvement and unlock
                    every learner's potential.
                  </p>
                </div>
              </div>

              {/* Right Side Graphics - More responsive with proper spacing */}
              <div className="md:w-1/2 relative min-h-[200px] sm:min-h-[300px] mb-8 md:mb-0 order-1 md:order-2">
                <div className="absolute top-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-gray-200 rounded-2xl"></div>
                <div className="absolute top-20 sm:top-40 right-20 sm:right-40 w-32 h-32 sm:w-48 sm:h-48 bg-gray-300 rounded-2xl"></div>
                <div className="absolute top-40 sm:top-80 right-5 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div ref={pricingRef} className="container max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-16">
              Pricing Plans
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div
                ref={basicPlanRef}
                className="bg-gradient-to-br from-[#fcf5e8] to-[#ffe0c9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-[#e8a065] mb-4 sm:mb-6">
                    BASIC
                  </h3>
                  <div className="bg-white rounded-full py-3 sm:py-4 px-6 sm:px-8 text-center mb-6 sm:mb-8">
                    <span className="text-3xl sm:text-4xl font-bold text-[#e8a065]">
                      FREE
                    </span>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Basic analytics dashboard
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Limited student tracking
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Standard reports
                    </li>
                  </ul>
                </div>
                <div className="p-6 sm:p-8 bg-white/40">
                  <Link
                    href="/signup"
                    className="block text-center bg-[#e8a065] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base font-medium hover:bg-[#d8905a] transition-colors"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>

              {/* Premium Plan */}
              <div
                ref={premiumPlanRef}
                className="bg-gradient-to-br from-[#f7e1e7] to-[#ffcfd8] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-[#e66f8f] mb-4 sm:mb-6">
                    PREMIUM
                  </h3>
                  <div className="bg-white rounded-full py-3 sm:py-4 px-6 sm:px-8 text-center mb-6 sm:mb-8">
                    <span className="text-3xl sm:text-4xl font-bold text-[#e66f8f]">
                      19,99$
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      /Month
                    </span>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Advanced analytics dashboard
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Unlimited student tracking
                    </li>
                    <li className="flex items-center text-gray-700 text-sm sm:text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Custom reports & insights
                    </li>
                  </ul>
                </div>
                <div className="p-6 sm:p-8 bg-white/40">
                  <Link
                    href="/premium"
                    className="block text-center bg-[#e66f8f] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base font-medium hover:bg-[#d65f7f] transition-colors"
                  >
                    Try Premium for 30 days
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-[#435f6d] via-[#dc87a3] to-[#7c6989] text-white">
          <div ref={ctaRef} className="container max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Transform Learning?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
              Join thousands of educators and institutions who are
              revolutionizing the way they track and improve learning outcomes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/signup"
                className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
              >
                Sign Up Free
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-base sm:text-lg font-medium hover:bg-white/10 transition-colors w-full sm:w-auto mt-3 sm:mt-0"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-6">
        <div ref={footerRef} className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
              <Logo size="medium" customSize="24px" className="mb-4" />
              <p className="text-gray-400 mt-4 text-sm sm:text-base">
                Transforming education through data-driven insights and
                analytics.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Company
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Resources
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    href="/documentation"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Evolvia. All rights reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
