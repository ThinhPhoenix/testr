"use client";
import Logo from "@/components/elements/logo/logo";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="absolute inset-0 flex flex-col items-stretch justify-center overflow-hidden">
      {/* Logo positioned at top left */}
      <div className="absolute top-5 left-5 z-10">
        <Logo
          size=""
          customSize="36px"
          className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full h-full max-w-none">
        {/* Left section - Login form (2/3 of screen) */}
        <div className="w-full md:w-2/3 bg-white p-6 pt-24 md:p-8 md:pt-24 overflow-y-auto font-[family-name:var(--font-bricolage-grotesque)] flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* <h2 className="text-3xl font-bold mb-2">Login</h2> */}
            <h2 className="text-gray-600 mb-6">
              Welcome! Please login to your account.
            </h2>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1.5"
                >
                  User name or Email
                </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Alexdeptrai"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1.5"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="**********"
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 block text-sm text-gray-600"
                  >
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm text-gray-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={cn(
                  "w-full py-3 px-4 rounded-lg text-white font-medium text-base",
                  "bg-gradient-to-r from-[#f06694] to-[#f6b763] hover:opacity-90 transition-opacity",
                  "font-[family-name:var(--font-bricolage-grotesque)]"
                )}
              >
                Login
              </button>

              {/* Sign Up Link */}
              <div className="mt-4 text-center text-sm text-gray-600">
                <span>By signing up you agree to our </span>
                <Link href="#" className="text-[#1976D2] hover:underline">
                  Terms
                </Link>
                <span> and </span>
                <Link href="#" className="text-[#1976D2] hover:underline">
                  Privacy Policy
                </Link>
              </div>

              <div className="mt-2 text-center text-sm">
                <span>New User? </span>
                <Link
                  href="/signup"
                  className="text-[#1976D2] hover:underline font-medium"
                >
                  Sign Up
                </Link>
              </div>

              {/* Or divider */}
              <div className="mt-6 mb-6 flex items-center justify-center">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="mx-4 text-gray-500 text-sm">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 bg-[#ffcfd5]/10 font-[family-name:var(--font-bricolage-grotesque)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
                <span className="font-medium text-sm">
                  Continue with Google
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Right section - Welcome slogan (1/3 of screen) */}
        <div className="hidden md:flex w-full md:w-1/3 bg-gradient-to-b from-[#435f6d] via-[#dc87a3] to-[#7c6989] justify-center items-center">
          <div className="p-6">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl leading-tight font-light tracking-wider text-[#e0f2fc] font-[family-name:var(--font-fraunces)]"
              style={{
                textShadow: "0 0 2px rgba(255,255,255,0.5)",
                WebkitTextStroke: "0.5px rgba(255,255,255,0.2)",
              }}
            >
              WELCOME
              <br />
              TO YOUR
              <br />
              EVOLUTION
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
