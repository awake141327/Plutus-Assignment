// Icons
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const NavbarComponent = () => {
  return (
    <nav className="flex gap-4 justify-between items-center px-40 py-8 border-b border-b-[#CECECE]">
      <div>
        <h4 className="font-mulish font-extrabold italic tracking-tight cursor-pointer mr-6">
          balshi
        </h4>
      </div>
      <div className="flex gap-12 font-rubik text-xs">
        <button>Elections</button>
        <div className="flex gap-1 items-center">
          <button>Markets</button>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="w-2/5 relative text-rubik">
        <input
          className="rounded-[50px] w-full px-7 py-2 border border-[#CECECE] text-sm"
          placeholder="Search markets"
        />
        <CiSearch className="absolute text-xl text-[#CECECE] cursor-pointer right-4 top-1/2 translate-y-[-50%]" />
      </div>
      <div className="flex gap-4 font-rubik text-xs">
        <button>Log in</button>
        <button className="bg-[#62D597] text-xs font-medium shadow-sm rounded-2xl px-7 py-4">
          Start Now - It&apos;s Free
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
