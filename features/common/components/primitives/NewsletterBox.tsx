"use client";

import { useState } from "react";

export function NewsletterBox() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle subscription
    setEmail("");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#6B8FA3] rounded-lg px-8 py-8 text-center  max-w-[571px] min-w-[571px] max-h-[187px] min-h-[187px]">
      <h2 className="text-white font-bold text-[32px] ">
        <span className="font-light">Luminae</span> Store
      </h2>
      <p className="text-white/80 text-xs md:text-sm mt-2 mb-5">
        Register your email not to miss the last minutes off+ Free delivery
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex items-center mx-auto bg-white rounded-sm overflow-hidden px-3 py-2  gap-2 max-w-[268px]"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 text-sm text-gray-500 outline-none bg-transparent max-w-[268px]"
        />
        <button
          type="submit"
          className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors duration-150"
          aria-label="Subscribe"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
