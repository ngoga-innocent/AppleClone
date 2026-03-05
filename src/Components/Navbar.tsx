import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Store", href: "https://www.apple.com/uk/store" },
    { name: "Mac", href: "https://www.apple.com/uk/mac/" },
    { name: "iPad", href: "https://www.apple.com/uk/ipad/" },
    { name: "iPhone", href: "https://www.apple.com/uk/iphone/" },
    { name: "Watch", href: "https://www.apple.com/uk/watch/" },
    { name: "Vision", href: "https://www.apple.com/uk/apple-vision-pro/" },
    { name: "Airpods", href: "https://www.apple.com/uk/airpods/" },
    { name: "Tv & Home", href: "https://www.apple.com/uk/tv-home/" },
    { name: "Entertainment", href: "https://www.apple.com/uk/services/" },
    { name: "Accessories", href: "https://www.apple.com/uk/shop/accessories/all" },
    { name: "Support", href: "https://support.apple.com/en-gb" },
  ];

  return (
    <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-gray-50 border-b border-gray-200">
        {/* Top Row */}
        <div className="flex items-center justify-between py-3 px-4 md:px-0">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-900"></div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-500 text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-gray-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="text-gray-700 hover:text-black transition">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="text-gray-700 hover:text-black transition">
              <ShoppingBag size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Apple Account Section — Desktop Only */}
        <div className="hidden md:flex justify-between items-center py-2 px-4  border-gray-200 text-sm text-gray-500">
          <h1 className="font-medium text-gray-700">Apple Account</h1>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-gray-900 transition">
              Sign In
            </a>
            <a
              href="https://account.apple.com/account"
              className="hover:text-gray-900 transition"
            >
              Create Your Apple Account
            </a>
            <a
              href="https://account.apple.com/faq"
              className="hover:text-gray-900 transition"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-4">
            {/* Main Links */}
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Icons */}
            <div className="flex items-center space-x-4 mt-2">
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <ShoppingBag size={20} />
              </button>
            </div>

            {/* Apple Account Section */}
            <div className="mt-4 border-t border-gray-200 pt-4 flex flex-col space-y-2 text-gray-700">
              <h1 className="font-medium text-gray-800">Apple Account</h1>
              <a href="#" className="hover:text-indigo-600 transition">
                Sign In
              </a>
              <a
                href="https://account.apple.com/account"
                className="hover:text-indigo-600 transition"
              >
                Create Your Apple Account
              </a>
              <a
                href="https://account.apple.com/faq"
                className="hover:text-indigo-600 transition"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
