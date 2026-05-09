"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { CategoryItem as CategoryItemType } from "../types/MenuType";
import { MenuDropdown } from "./MenuDrop";

interface CategoryItemProps {
  item: CategoryItemType;
  isActive?: boolean;
}

export function CategoryItem({ item, isActive }: CategoryItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const hasMegaMenu = Boolean(item.megaMenu);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 120);
  };

  const getDropdownPosition = () => {
    if (!triggerRef.current) return { top: 0, left: 0 };
    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const isMiddle = viewportWidth < 1000;
    const dropdownWidth = isMiddle ? 668 : 1100;
    const rawLeft = rect.left;
    const maxLeft = viewportWidth - dropdownWidth - 16; // 16px margin from right edge
    const left = Math.max(8, Math.min(rawLeft, maxLeft));

    return {
      top: rect.bottom,
      left,
    };
  };

  const triggerClasses = `
    relative flex items-center gap-1 px-3 py-2 text-sm font-medium
    whitespace-nowrap transition-colors duration-150 cursor-pointer
    ${
      isOpen || isActive
        ? "text-orange-500 border-b-2 border-orange-500"
        : "text-gray-800 hover:text-orange-500 border-b-2 border-transparent"
    }
  `;

  const pos = isOpen ? getDropdownPosition() : { top: 0, left: 0 };

  return (
    <div
      ref={triggerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.href && !hasMegaMenu ? (
        <Link href={item.href} className={triggerClasses}>
          <li> {item.label}</li>
        </Link>
      ) : (
        <button
          className={triggerClasses}
          aria-haspopup={hasMegaMenu ? "true" : undefined}
          aria-expanded={hasMegaMenu ? isOpen : undefined}
          onClick={() => hasMegaMenu && setIsOpen((prev) => !prev)}
          type="button"
        >
          {item.label}
        </button>
      )}

      {hasMegaMenu && isOpen && (
        <MenuDropdown
          item={item}
          top={pos.top}
          left={pos.left}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
