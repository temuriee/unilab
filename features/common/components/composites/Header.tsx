"use client";
import Image from "next/image";
import { listData } from "../../data/ListData";
import Link from "next/link";
import { mediaData } from "../../data/MediaData";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <div className="max-w-109.5 min-w-109.5 md:flex-col lg:flex-row md:max-w-202.75 md:min-w-202.75 lg:max-w-315 lg:min-w-315 md:max-h-24 md:min-h-24 flex items-center justify-center lg:gap-20 gap-3 min-h-32 max-h-32">
      <div className="flex lg:gap-7.25 lg:justify-start md:items-center md:justify-between md:gap-71.75 flex-col md:flex-row justify-end md:max-w-202.75 md:min-w-202.75 lg:max-w-138.25 lg:min-w-138.25">
        {/* //!BurgerMenu */}
        <button
          className="text-[#023047] hover:text-white md:hidden flex"
          onClick={() => setMobileMenuIsOpen((prev) => !prev)}
        >
          {mobileMenuIsOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </button>
        {/* //! ----- Logo Section */}
        <div className="flex gap-1.5 md:max-w-44.75 md:min-w-44.75 max-w-33.25 max-h-6.5 md:max-h-8.25 items-center lg:justify-center ">
          <Image
            src={"/marketLogo.svg"}
            alt="MarketLogo"
            width={49}
            height={33}
            className="md:max-w-12.25 md:max-h-8.25 max-w-10 max-h-6.5 min-w-10 min-h-6.5 "
          />
          <h2 className="font-bold text-[22px]">Luminae</h2>
        </div>
        {/* //! ------- Market Section */}
        <div className="flex md:hidden">
          <div>
            <Image
              src={"/Cards.svg"}
              alt="Card Picture"
              width={24}
              height={24}
            />
            <div className="max-w-6 max-h-6  rounded-full bg-[#3DC47E] flex justify-center items-center">
              <span>3</span>
            </div>
          </div>
        </div>
        {/* //! ------ Search Section */}
        <div className="min-w-109.5 md:max-w-86.25 md:min-w-86.25 max-h-10 min-h-10 flex  gap-3  border-[1.4] border-[#D9D9D9] rounded-sm items-center pl-3">
          <div className="max-w-69.25 max-h-6 flex items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search Products"
              className="max-w-38 max-h-5"
            />

            <div className="max-w-27.25  max-h-6 flex items-center ">
              <h3 className="text-sm">All categories</h3>
              <Image
                src={"/Arrow.svg"}
                alt="Arrow Picture"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="border-l-[1.4] border-[#E9E9E9] pl-3">
            <Image
              src={"/Search.svg"}
              alt="Search Picture"
              width={20}
              height={20}
              className="min-h-5 min-w-5"
            />
          </div>
        </div>
      </div>
      <div className="md:flex lg:gap-20 md:gap-76.75 md:justify-between hidden ">
        {/* //! ------ List Section */}
        <div className="max-w-105 min-w-105 max-h-5">
          <ul className="flex justify-between">
            {listData.map((e) => (
              <li key={e.href}>
                <Link className="text-sm text-[#555555]" href={e.href}>
                  {e.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* //! ------ SocialMedia Section */}
        <div className="max-h-6 min-h-6 max-w-[127.5px] min-w-[127.5px] md:max-w-21 md:min-w-21 ">
          <ul className="flex justify-end gap-3 items-center">
            {mediaData.map((e) => (
              <li key={e.href}>
                <a href={e.href} target="_blank">
                  <Image
                    src={e.img}
                    alt="Media Pictures"
                    width={e.img === "/Facebook.svg" ? 12 : 24}
                    height={e.img === "/Facebook.svg" ? 18 : 24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
