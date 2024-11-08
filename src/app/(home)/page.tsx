"use client";

import NavbarComponent from "@/ui/NavbarComponent";
import HeroComponent from "@/ui/HeroComponent";
import CardComponent from "@/ui/CardComponent";
import FooterComponent from "@/ui/FooterComponent";

import { useState } from "react";

const Home = () => {
  const [dataFromChild, setDataFromChild] = useState<boolean>();

  function handleDataFromChild(data: boolean) {
    setDataFromChild(data);
  }

  return (
    <div className="flex flex-col gap-10">
      <NavbarComponent />
      <div className="px-40 flex flex-col items-center gap-20">
        <div>
          <HeroComponent />
        </div>
        <div className="grid grid-cols-3 gap-y-10 gap-x-10 mb-32 justify-center">
          <CardComponent handleDataFromChild={handleDataFromChild} />
        </div>
        {dataFromChild ? (
          <div className="loader mt-[-150px] border-t-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin aspect-square w-16 flex justify-center items-center text-yellow-700">
            $
          </div>
        ) : (
          ""
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
