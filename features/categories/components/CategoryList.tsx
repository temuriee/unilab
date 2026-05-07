import Image from "next/image";
import { CategoryListData } from "../data/CategoryListData";

const CategoryList = () => {
  return (
    <div className="flex justify-between space-x-5">
      {CategoryListData.map((category) => (
        <div
          key={category.description}
          className="flex max-w-25 min-w-25 gap-1 items-center"
        >
          <Image
            src={category.imageUrl}
            alt={category.description}
            height={24}
            width={24}
            className={`${category.description === "Card" ? "invert brightness-0" : ""}`}
          />
          <p className="text-white text-sm">{category.description}</p>
          {category.description === "Card" && (
            <div className="max-w-6 max-h-6 min-w-6 min-h-6 rounded-full bg-[#3DC47E] flex justify-center items-center ml-2">
              <span>3</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
