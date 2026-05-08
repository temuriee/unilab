"use client";

import { CATEGORY_ITEMS } from "../data/MenuData";
import { CategoryItem } from "./CategoryItem";

export function Categories() {
  return (
    <nav
      className="relative w-full bg-white border-b border-gray-200"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl max-h-13 min-h-13 mx-auto px-4 overflow-visible mt-7 ">
        <ul className="flex items-center overflow-x-auto overflow-y-visible z-50 scrollbar-hide justify-between">
          {CATEGORY_ITEMS.map((item) => (
            <li key={item.label} className="overflow-visible">
              <CategoryItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
