import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  return (
    <div className="bg-gray-100 font-sans antialiased min-h-screen flex items-center justify-center p-5">
      <div className="w-full max-w-md animate-fade-in">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-indigo-200/50 border border-white/40 overflow-hidden transition-all duration-300 hover:shadow-indigo-300/30">
          {/* Decorative top bar - solid indigo */}
          <div className="h-2 w-full bg-indigo-500"></div>

          <div className="p-6 sm:p-8">
            {/* Header - solid text color */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-indigo-700">
                Welcome back
              </h1>
              <p className="text-gray-500 mt-2 text-sm">
                Sign in to your secure account
              </p>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span>secure connection</span>
              </div>
            </div>

            {/* Login Form - static, no interactions */}
            <form className="space-y-5">
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  👤 Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                    placeholder="johndoe or @username"
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  📧 Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                    placeholder="hello@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  📱 Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-200 text-gray-800 placeholder:text-gray-400"
                    placeholder="+1 (234) 567-8900"
                    autoComplete="tel"
                    inputMode="numeric"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1 ml-1">
                  Include country code for best results
                </p>
              </div>

              {/* Password - static, no toggle */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    🔒 Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition-all duration-200 text-gray-800"
                    placeholder="················"
                    autoComplete="current-password"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1 ml-1">
                  At least 8 characters, secure login
                </p>
              </div>

              {/* Remember me & SSL */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-400 focus:ring-2 transition"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-800">
                    Remember me
                  </span>
                </label>
                <div className="text-xs text-gray-400">🔐 SSL secured</div>
              </div>

              {/* Submit button - solid color, no gradient */}
              <button
                type="button"
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-indigo-300"
              >
                ✦ Sign In ✦
              </button>

              {/* Extra links */}
              <div className="text-center mt-6 text-sm text-gray-500">
                Don't have an account?
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors ml-1"
                >
                  Create account
                </a>
                <span className="mx-2 text-gray-300">|</span>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Guest access
                </a>
              </div>
            </form>

            <p className="text-center text-[11px] text-gray-400 mt-5 border-t border-gray-100 pt-4">
              Demo form — all fields required | no data stored
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
