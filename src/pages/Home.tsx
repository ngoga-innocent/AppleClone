import AppleAuthFields from "../Components/AppleAuthField";
import AppleConsent from "../Components/AppleConsemnt";
import AppleFooter from "../Components/AppleFooter";
// import AppleLogin from "./Components/AppleLogins";
import DotCircle from "../Components/DottedRing";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen h-screen py-24 ">
      <Navbar />
      <div className="relative flex flex-col  items-center justify-center h-[30vh] overflow-hidden">
        {/* <svg
          className="absolute w-16 h-16"
          viewBox="-80 -80 160 160"
          fill="black"
        >
          <path d="M35.4,-77.008C20.752,-77.008 8.935,-68.219 1.318,-68.219C-6.787,-68.219 -17.334,-76.52 -30.127,-76.52C-54.15,-76.52 -78.564,-56.598 -78.564,-19.098C-78.564,4.34 -69.58,29.047 -58.35,44.965C-48.78,58.442 -40.478,69.574 -28.369,69.574C-16.357,69.574 -11.182,61.566 3.662,61.566C18.799,61.566 22.119,69.281 35.4,69.281C48.486,69.281 57.178,57.367 65.381,45.551C74.658,31.879 78.466,18.695 78.564,18.109C77.88,17.816 52.783,7.66 52.783,-21.051C52.783,-45.856 72.51,-56.988 73.584,-57.867C60.693,-76.519 40.869,-77.008 35.4,-77.008Z" />
        </svg> */}
        <div className="text-[4rem] font-bold text-gray-900"></div>
        <div className="absolute ">
          <DotCircle width={170} height={170} />
        </div>
        <div className="absolute">
          <DotCircle width={200} height={200} />
        </div>
        <div className="absolute">
          <DotCircle width={230} height={230} />
        </div>
      </div>

      <AppleAuthFields />
      <AppleConsent />
      <AppleFooter />
    </div>
  );
}
