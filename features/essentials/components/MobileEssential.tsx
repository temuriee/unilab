import Image from "next/image";

const MobileEssential = () => {
  return (
    <section className="max-h-145 max-w-109.5 min-h-145 min-w-109.5 md:hidden flex flex-col mt-12 gap-5">
      <div className="max-w-109.5 max-h-70 min-h-70 min-w-109.5 flex ">
        <div className="w-full max-w-1/2 bg-[#BF2E3B] min-h-70 max-h-70 flex flex-col justify-center items-start gap-4 text-start pl-5">
          <div className="max-w-45 max-h-43 flex gap-2 flex-col">
            <h2 className="font-extrabold text-2xl text-white leading-11.5">
              Never-Ending Summer
            </h2>
            <p className="text-white text-[18px] leading-9 ">
              Throwback Shirts & all-day dressed
            </p>
          </div>

          <a href="#" className="text-white underline text-[18px]">
            Explore all category
          </a>
        </div>
        <div>
          <Image
            src={"/SummerGirl.png"}
            alt="Summer Girl"
            width={219}
            height={280}
            className="max-w-54.75 max-h-70 object-contain"
          />
        </div>
      </div>
      {/* //!-------------------------------- */}
      <div className="max-w-109.5 max-h-70 flex">
        <div className="w-full max-w-1/2 bg-[#0186C4] min-h-70 max-h-70 flex flex-col justify-center items-start gap-4 text-start pl-5">
          <div className="max-w-45 max-h-43 flex gap-2 flex-col">
            <h1 className="font-extrabold text-2xl text-white leading-11.5">
              Best Lovin Sellers
            </h1>
            <p className="text-white text-[18px] leading-9 ">
              Bikini & Poolside glam include
            </p>
          </div>
          <a href="#" className="text-white underline text-[18px]">
            Explore all category
          </a>
        </div>
        <div>
          <Image
            src={"/LovinGirl.png"}
            alt="Best Sellers"
            width={219}
            height={280}
            className="max-w-54.75 max-h-70 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileEssential;
