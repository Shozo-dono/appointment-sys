import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Check,
  Globe,
  Code,
  Shield,
  LogIn,
} from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Login with:", { email, password, rememberMe });
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setLoading(true);
    setTimeout(() => {
      console.log(`Login with ${provider}`);
      setLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-6 bg-gray-900/95 border-b border-gray-700 z-50">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-purple-500" />
          <div className="text-2xl font-bold text-white">SecureAuth</div>
        </div>
        <Link
          to="/create-account"
          className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 text-sm font-medium"
        >
          Create Account
        </Link>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-[480px] px-4">
          {/* Card */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-600 flex items-center justify-center">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-400 text-sm">
                Sign in to continue to your account
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <button
                onClick={() => handleSocialLogin("Google")}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                <Mail className="w-5 h-5 text-white" />
                <span className="text-sm text-white">Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin("Github")}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                <Code className="w-5 h-5 text-white" />
                <span className="text-sm text-white">GitHub</span>
              </button>

              <button
                onClick={() => handleSocialLogin("Microsoft")}
                disabled={loading}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 disabled:opacity-50"
              >
                <Globe className="w-5 h-5 text-white" />
                <span className="text-sm text-white">Other</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-800 text-gray-500 text-xs">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
                    placeholder="name@company.com"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white placeholder-gray-500"
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Don't have an account?{" "}
                <Link
                  to="/create-account"
                  className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-500 text-xs border-t border-gray-800">
        <p>© 2024 SecureAuth Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
