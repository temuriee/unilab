"use client";

import { CATEGORY_ITEMS } from "../data/MenuData";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <nav
      className="w-full bg-white border-b border-gray-200"
      aria-label="Main navigation"
    >
      <div className="lg:max-w-7xl max-w-[811px] max-h-13 min-h-13 mx-auto mt-7 hidden md:flex w-full">
        {/* Scroll wrapper — handles horizontal scroll without clipping dropdown */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full">
          <ul className="flex items-center w-max min-w-full z-50 justify-between">
            {CATEGORY_ITEMS.map((item) => (
              <li key={item.label} className="overflow-visible">
                <CategoryItem item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
