import { CategoriesListData } from "../data/CategoriesData";

const Categories = () => {
  return (
    <div className="hidden md:flex lg:max-w-315 md:max-w-202.75 max-h-13 min-h-13 w-full mx-auto items-center justify-between mt-7">
      {CategoriesListData.map((category) => (
        <div key={category}>
          <p className="text-[#555555] hover:text-[#FF7A00] transition-all ease-in-out text-sm cursor-pointer ">
            {category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
