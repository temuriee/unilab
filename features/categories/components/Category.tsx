import Image from "next/image";
import CategoryList from "./CategoryList";
import { Categories } from "./Categories";

const Category = () => {
  return (
    <>
      <div className="w-full bg-[#262626] hidden md:flex">
        <div className="lg:max-w-315 lg:max-h-19.5 lg:min-h-19.5 md:max-w-202.75 md:max-h-10 md:min-h-10 w-full mx-auto flex items-center justify-between">
          {/* //! LEFT SIDE */}
          <div className="lg:max-w-75 max-w-97.5 w-full max-h-6 flex justify-between">
            <div className="flex gap-1 max-w-36.25 min-w-36.25 items-center">
              <Image
                src="/categories.svg"
                alt="Categories Picture"
                width={24}
                height={24}
              />
              <h2 className="font-bold text-xl text-white">Categories</h2>
            </div>
            <div className="flex gap-5">
              <div className="flex justify-center items-center gap-1">
                <span className="text-white text-xs">USD</span>
                <Image
                  src={"/Arrow.svg"}
                  alt="Arrow Picture"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
              <div className="flex justify-center items-center gap-1">
                <span className="text-white text-xs">English</span>
                <Image
                  src={"/Arrow.svg"}
                  alt="Arrow Picture"
                  width={16}
                  height={16}
                  className="invert brightness-0"
                />
              </div>
            </div>
          </div>
          {/* //! MIDDLE SIDE */}
          <div className="hidden max-w-122 max-h-15.5 min-h-15.5 w-full lg:flex pl-18 pr-18 border-r border-l border-[#7B7B7B]">
            <div>
              <Image
                src={"/cosmetic.svg"}
                alt="Men Cosmetic Picture"
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-xs font-bold">
                Weekly Men's Toiletries Coupons.
              </p>
              <p className="text-[#C4C4C4] text-xs">
                We extend exclusive discounts to our male clientele
              </p>
            </div>
          </div>
          {/* //! RIGHT SIDE */}
          <div className="max-w-85 w-full max-h-6 flex justify-between">
            <CategoryList />
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Category;
