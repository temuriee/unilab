import Image from "next/image";

const Essential = () => {
  return (
    <main className="max-w-360 w-full flex items-center justify-center">
      <div>
        <Image
          src={"/essentialLeft.png"}
          alt="Essential Left"
          width={550}
          height={460}
          className="max-h-115 min-h-115 max-w-137.5 min-w-137.5"
        />
      </div>
      <div className="bg-[url('/test.png')] bg-[#4172DC] max-w-222.5 min-w-222.5 min-h-115 max-h-115 flex flex-col justify-center items-center text-center">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-white font-bold text-[32px]">
            KIMONOS, CAFTANS & PAREOS
          </h2>
          <p className="text-white text-[28px] font-medium mt-8 mb-8">
            Poolside glam included From $4.99
          </p>
          <button className="bg-[#4172DC] max-w-61 min-w-61 pr-8 pl-8 pt-4 pb-4 text-white font-medium justify-center rounded-sm flex items-center gap-2 cursor-pointer hover:scale-105 hover:transition-transform duration-300 hover:ease-in-out">
            <Image src={"/Box.svg"} alt="Shop Now" width={24} height={24} />
            <span>SHOP NOW</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Essential;
