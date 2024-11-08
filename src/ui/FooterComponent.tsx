import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <div className="px-60 py-28 bg-[#1d1d1d] text-white flex flex-col justify-between gap-20">
      {/* Top */}
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex flex-col gap-3 text-xl">
          <h4 className="font-mulish font-extrabold italic tracking-tight">
            Balshi
          </h4>
          <div className="flex gap-3">
            <FaXTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTiktok className="cursor-pointer" />
            <FaDiscord className="cursor-pointer" />
            <FaThreads className="cursor-pointer" />
          </div>
        </div>
        {/* Middle */}
        <div className="flex flex-col gap-1 font-rubik text-sm">
          <h4 className="font-bold">Balshi</h4>
          <p className="text-white/50 cursor-pointer">Terms & Conditions</p>
          <p className="text-white/50 cursor-pointer">Privacy Policy</p>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-1 font-rubik text-sm">
          <h4 className="font-bold">Balshi Creations</h4>
          <p className="text-white/50 cursor-pointer">Marketplace</p>
          <p className="text-white/50 cursor-pointer">Affiliate program</p>
        </div>
      </div>
      {/* Bottom */}
      <div>
        <p className="font-rubik text-white/50 text-sm tracking-tight">
          Balshi 2024
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
