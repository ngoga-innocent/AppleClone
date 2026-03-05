import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 🌈 Gradient Glow Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/30 via-purple-600/20 to-pink-500/20 blur-3xl" />

      {/* ✨ Floating Orbs */}
      <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl top-12.5 -left-12.5 animate-float" />
      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl bottom-15 -right-10 animate-float delay-2000" />

      {/* 💎 Glass Card */}
      <div
        className={`relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 w-[90%] max-w-md text-center shadow-2xl transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-3 tracking-tight">
          Congratulations
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-sm mb-8">
          Your sign-in was successful. Everything is ready.
        </p>

        {/* Button */}
        <a href="https://www.apple.com/uk/tv-home/" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition">
          Continue
        </a>
      </div>
    </div>
  );
}
