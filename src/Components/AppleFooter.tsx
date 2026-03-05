export default function AppleFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6  text-sm text-gray-600">

        {/* Help Line */}
        <div className="text-center mb-6">
          Need more help?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium"
          >
            Chat now
          </a>{" "}
          or call{" "}
          <a
            href="tel:08000480408"
            className="text-gray-800 hover:underline"
          >
            0800 048 0408
          </a>.
        </div>

        {/* Security Notice */}
        <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
          The Apple Online Store uses industry-standard encryption to protect
          the confidentiality of the information you submit. Learn more about
          our{" "}
          <a href="#" className="underline hover:text-gray-700">
            Security Policy
          </a>.
        </div>

        {/* Shopping Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          More ways to shop:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-blue-600 hover:underline">
            other retailer
          </a>{" "}
          near you. Or call 0800 048 0408.
        </div>

        {/* Legal Row */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-gray-500">
          <div>
            Copyright © 2026 Apple Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Use of Cookies</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:underline">Legal</a>
            <span>|</span>
            <a href="#" className="hover:underline">Site Map</a>
          </div>

          <div className="text-right">UK</div>
        </div>
      </div>
    </footer>
  );
}
