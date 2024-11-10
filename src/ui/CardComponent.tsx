/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";

import Image, { StaticImageData } from "next/image";

import profilePic from "../../public/assets/Profile.png";
import Coin from "../../public/assets/Coin.png";
import Logo from "../../public/assets/Logo.png";

import { MdOutlineFileUpload } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";

interface Card {
  imageUrl: StaticImageData;
  username: string;
  expiryTime: string;
  question: string;
  tags: string;
  upvotes: string;
  downvotes: string;
  engagement: string;
}

interface CardComponentProps {
  handleDataFromChild: (loading: boolean) => void;
}

const cardObj: Card = {
  imageUrl: profilePic,
  username: "jc",
  expiryTime: "Ends in 2D 21hr 32min",
  question: "Will BTC reach $100,000?",
  tags: "#Crypto",
  upvotes: "54",
  downvotes: "54",
  engagement: "20,79,438",
};

const allCards: Card[] = Array(100).fill(cardObj);

const CardComponent: React.FC<CardComponentProps> = ({
  handleDataFromChild,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCards = async () => {
    setLoading(true);
    handleDataFromChild(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(setCards(allCards.slice(0, page * 10)));
      }, 500);
    });

    setPage(page + 1);
    handleDataFromChild(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  // Throttle Function
  const throttle = (cb: (...args: any[]) => void, d: number) => {
    let last = 0;
    return (...args: any[]) => {
      const now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };

  const handleScroll = throttle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 600 >
        document.documentElement.offsetHeight &&
      !loading &&
      page <= 10
    ) {
      fetchCards();
    }
  }, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col gap-2 px-6 py-8 bg-white rounded-lg border border-[#CECECE] w-[350px]"
        >
          {/* 1st */}
          <div className="flex gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={card.imageUrl} alt="Profile" />
              <p className="font-xs font-rubik font-semibold">
                @{card.username}
              </p>
            </div>
            <p className="text-[#DE7794] text-xs font-rubik">
              {card.expiryTime}
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col mb-2">
            <h4 className="font-poppins font-semibold">{card.question}</h4>
            <p className="text-xs font-rubik">{card.tags}</p>
          </div>
          {/* 3rd */}
          <div className="flex w-full gap-4 mb-4">
            <button className="flex w-full text-white items-center rounded-lg bg-[#62D597] border border-[#00FF47] px-3 py-2">
              <div className="flex w-full justify-between items-center gap-4">
                <div className="flex gap-1 items-center">
                  <Image src={Coin} alt="Coin" />
                  <p className="text-xs font-semibold font-rubik">
                    {card.upvotes}
                  </p>
                </div>
                <p className="text-xs font-semibold font-rubik">Yes</p>
              </div>
            </button>
            <button className="flex w-full text-white items-center rounded-lg bg-[#FF8585] border border-[#FF0000] px-3 py-2">
              <div className="flex w-full justify-between items-center gap-4">
                <div className="flex gap-1 items-center">
                  <Image src={Coin} alt="Coin" />
                  <p className="text-xs font-semibold font-rubik">
                    {card.downvotes}
                  </p>
                </div>
                <p className="text-xs font-semibold font-rubik">No</p>
              </div>
            </button>
          </div>
          {/* 4th */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-lg">
              <MdOutlineFileUpload />
              <BiBarChart />
            </div>
            <div className="flex items-center gap-1">
              <Image src={Logo} alt="Logo" />
              <p className="text-xs">{card.engagement}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardComponent;
