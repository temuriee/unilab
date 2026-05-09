import Image from "next/image";

const Essential = () => {
  return (
    <section className="w-full max-w-227.5  items-center justify-center hidden md:flex">
      <div className="shrink-0">
        <Image
          src={"/essentialLeft.png"}
          alt="Essential Left"
          width={550}
          height={460}
          className="max-h-115 min-h-115 w-full lg:max-w-137.5 max-w-[495.5px] min-w-[495.5px] object-cover"
        />
      </div>
      <div
        className="flex-1 lg:max-w-225.5 lg:min-w-222.5 min-h-115 max-h-115 bg-[#4172DC] flex flex-col justify-center items-center text-center max-w-[495.5px] min-w-[495.5px]"
        style={{ backgroundImage: "url('/test.png')", isolation: "isolate" }}
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
