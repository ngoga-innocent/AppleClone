import privacy from "../assets/privacy.png"

export default function AppleConsent() {
  return (
    <div className="max-w-xl mx-auto text-center mt-14 px-6 bg-gray-50">
      
      {/* ICON */}
     <div className="flex justify-center mb-6">
        <img
          src={privacy}
          alt="Apple users icon"
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* TEXT */}
      <p className="text-gray-700 text-[12px] leading-relaxed mb-8">
        Your Apple Account information is used to allow you to sign in securely
        and access your data. Apple records certain data for security, support,
        and reporting purposes. If you agree, Apple may also use your Apple
        Account information to send you marketing emails and communications,
        including based on your use of Apple services.
        <a href="https://www.apple.com/legal/privacy/data/en/apple-id/" className="text-blue-600 cursor-pointer hover:underline ml-1">
          See how your data is managed...
        </a>
      </p>

      {/* BUTTONS */}
      

      {/* FOOTNOTE */}
      {/* <p className="text-gray-500 text-sm mt-4">
        Requires a device with iOS 17 or later.
      </p> */}
    </div>
  );
}