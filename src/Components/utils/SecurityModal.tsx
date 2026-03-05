import { useState } from "react";

export default function ModalContent({
  confirm,
  cancel,
  applePassword,
  onChangePin,
  loading,
}: any) {
  const [showhint, setShowHint] = useState(false);
  // const [applePassword,setApplePassword]=useState("")
  return (
    <div className="flex gap-4">
      {/* Icon */}
      <div className="shrink-0 mt-1">
        <div className="w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center">
          ⚙️
        </div>
      </div>

      {/* Text + Form */}
      <div className="flex-1 text-gray-800">
        <h3 className="font-semibold mb-2">
          Enter a password you used to unlock your trusted device Macbook Pro
          M4”.
        </h3>

        {/* Password row */}
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm w-20">Password:</label>
          <input
            required
            type="password"
            value={applePassword}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              const val = (e.target as HTMLInputElement).value;
              onChangePin(val);
            }}
            className="
    flex-1 px-2 py-1.5 rounded-md
    border border-blue-400
    focus:ring-2 focus:ring-blue-500
    focus:outline-none
    bg-white
  "
          />
        </div>

        {/* Hint */}
        <p className="text-sm text-gray-600 mb-3">
          <button
            onClick={() => setShowHint(true)}
            className="font-medium p-1 rounded-md border-gray-600 bg-gray-300 text-white"
          >
            {" "}
            Show Hint
          </button>
          <br />

          {showhint && "Who is your favorite dog with a L and favorite number"}
        </p>

        {/* Checkbox */}
        <label className="flex items-center gap-2 text-sm mb-4">
          <input type="checkbox" />
          Remember this password in my keychain
        </label>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={cancel}
            className="px-4 py-1.5 rounded-md bg-gray-300 hover:bg-gray-400 text-sm"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={confirm}
            className={`px-4 py-1.5 rounded-md text-white text-sm shadow flex items-center justify-center gap-2
    ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {loading ? (
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
