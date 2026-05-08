"use client";

import Link from "next/link";
import { NavItem } from "../types/MenuType";

interface MegaMenuDropdownProps {
  item: NavItem;
}

export function MegaMenuDropdown({ item }: MegaMenuDropdownProps) {
  if (!item.megaMenu) return null;

  const { sections, featuredImage } = item.megaMenu;

  // Separate the last section to display as a wider column (like "Clothes")
  const mainSections = sections.slice(0, -1);
  const lastSection = sections[sections.length - 1];
  const hasLastSection = sections.length > 1;

  return (
    <div
      className="
        absolute top-full left-0
        w-[900px] max-w-[95vw]
        bg-white
        border border-gray-200
        shadow-xl
        rounded-b-md
        z-50
        p-6
        grid grid-cols-[1fr_auto]
        gap-6
      "
      role="region"
      aria-label={`${item.label} menu`}
    >
      {/* Left: sections grid */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
        {mainSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-1.5">
              {section.items.map((subItem) => (
                <li key={subItem.label}>
                  <Link
                    href={subItem.href}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-150"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Right: last wider section + optional featured image */}
      {hasLastSection && (
        <div className="flex gap-6 border-l border-gray-100 pl-6">
          {/* Last section (e.g. "Clothes") */}
          <div className="min-w-[140px]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">
              {lastSection.title}
            </h3>
            <ul className="space-y-1.5">
              {lastSection.items.map((subItem) => (
                <li key={subItem.label}>
                  <Link
                    href={subItem.href}
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-150"
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured image */}
          {featuredImage && (
            <Link href={featuredImage.href} className="shrink-0 block">
              <div className="w-40 h-52 rounded-md overflow-hidden bg-gray-100">
                <img
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
