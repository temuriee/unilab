import Image from "next/image";

const Essential = () => {
  return (
    <section className="w-full max-w-[991px] lg:max-w-[1440px] relative  items-center justify-center hidden md:flex">
      <div className="shrink-0 relative">
        <Image
          src={"/essentialLeft.png"}
          alt="Essential Left"
          width={550}
          height={460}
          className="max-h-115 min-h-115 w-full lg:max-w-137.5 max-w-[495.5px] min-w-[495.5px] object-cover"
        />
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-[-115px] bg-white shadow-lg text-center min-w-[180px] z-10   overflow-hidden max-w-[228px] min-w-[228px] max-h-[163px] min-h-[163px]  flex-col ">
          <div className="px-6 py-4 max-h-[123px] min-h-[123px] flex justify-center items-center flex-col">
            <h3 className="text-[#262626] font-bold text-xl">
              Summer Essentials
            </h3>
            <p className="text-[#FF2E00] font-bold text-xl mt-1">20% off</p>
          </div>
          <div className="bg-[#262626] max-h-10 min-h-10 flex justify-center items-center">
            <p className="text-white text-xs">19 Jul-30 Jul</p>
          </div>
        </div>
      </div>
      <div
        className="flex-1 lg:max-w-225.5 lg:min-w-222.5 min-h-115 max-h-115 bg-[#4172DC] flex flex-col justify-center items-center text-center max-w-[495.5px] min-w-[495.5px]"
        style={{
          backgroundImage: "url('/EssentialRight.png')",
          isolation: "isolate",
        }}
      >
        <div className="flex justify-center items-center flex-col max-w-[315.5px] lg:max-w-118 ">
          <h2 className="text-white font-bold text-[32px]">
            KIMONOS, CAFTANS & PAREOS
          </h2>
          <p className="text-white text-[28px] font-medium mt-8 mb-8">
            Poolside glam included From $4.99
          </p>
          <button className="bg-[#4172DC] w-61 pr-8 pl-8 pt-4 pb-4 text-white font-medium justify-center rounded-sm flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <Image src={"/Box.svg"} alt="Shop Now" width={24} height={24} />
            <span>SHOP NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Essential;
