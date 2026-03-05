import { useState } from "react";

export default function AppleLogin() {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleContinue = () => {
    if (step === 1) {
      if (!isValidEmail(email)) {
        alert("Enter a valid Apple ID");
        return;
      }
      setStep(2);
    } else {
      console.log("Sign in with:", email, password);
    }
  };

  return (
    <div className="flex flex-col max-w-lg w-full mx-auto">
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-2">
        Apple Account
      </h2>
      <h4 className="text-gray-500 text-center mb-6">
        Manage your Apple Account
      </h4>

      {/* Apple ID Field */}
      <div className="mb-4">
        {/* <input
          type="text"
          // onAnimationStart={(e) => {
          //   if (e.animationName === "autofill-start") {
          //     setEmail(e.currentTarget.value);
          //   }
          // }}
          autoComplete="username"
          placeholder={email ? "" : "Email or Phone number"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-700 focus:ring-1 focus:ring-blue outline-none transition text-sm"
        /> */}
        <div className="relative w-full">
          <input
            type="text"
            autoFocus={true}
            autoComplete="email" // Use "email" or "username"
            placeholder="Email or Phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-600 focus:border-blue-700 focus:ring-1 focus:ring-blue outline-none transition text-sm"
          />
        </div>
      </div>

      {/* Password Field (Appears Later) */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          step === 2 ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition text-sm"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleContinue}
        className="w-full mt-6 bg-black text-white py-3 rounded-full text-sm font-medium hover:bg-gray-900 active:scale-95 transition"
      >
        {step === 1 ? "Continue" : "Sign In"}
      </button>

      {/* Apple subtle help text */}
      <p className="text-center text-xs text-gray-500 mt-4">
        Forgot Apple ID or password?
      </p>
    </div>
  );
}
