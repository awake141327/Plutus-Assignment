import Image from "next/image";

import Trump from "../../public/assets/Trump.png";
import Coin from "../../public/assets/Coin.png";

const HeroComponent = () => {
  return (
    <section className="py-16 px-10 shadow-md rounded-2xl ">
      {/* Top */}
      <div className="flex gap-4 justify-between items-center">
        {/* Left */}
        <div className="w-1/2 flex flex-col gap-6">
          <p className="text-[#DE7794] text-xs italic font-rubik">
            Ends in 2D 21hr 32min
          </p>
          <h2 className="font-poppins font-semibold text-xl">
            Who will win the Presendential Election?
          </h2>
          <div className="flex items-center gap-10">
            <p className="font-rubik font-">Donald Trump</p>
            <div className="flex gap-2">
              <button className="flex w-[100px] items-center rounded-lg bg-[#62D597] border border-[#00FF47] px-3 py-2">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-1 items-center">
                    <Image src={Coin} alt="Coin" />
                    <p className="text-xs font-semibold font-rubik">54</p>
                  </div>
                  <p className="text-xs font-semibold font-rubik">Yes</p>
                </div>
              </button>
              <button className="flex w-[100px] items-center rounded-lg bg-[#FF8585] border border-[#FF0000] px-3 py-2">
                <div className="flex justify-between items-center gap-4">
                  <div className="flex gap-1 items-center">
                    <Image src={Coin} alt="Coin" />
                    <p className="text-xs font-semibold font-rubik">54</p>
                  </div>
                  <p className="text-xs font-semibold font-rubik">No</p>
                </div>
              </button>
            </div>
          </div>
          <p className="text-sm font-rubik">
            <span className="font-bold">Market Info:</span> Vice President
            Kamala Harris secured Vermont, while former President Donald Trump
            took West Virginia, Kentucky, and Indiana, The New York...
          </p>
        </div>
        {/* Right */}
        <div className="w-1/2">
          <Image src={Trump} alt="Trump" />
        </div>
      </div>
      {/* Bottom */}
      <div></div>
    </section>
  );
};

export default HeroComponent;
