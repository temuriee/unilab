"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { MenuDropdownProps } from "../types/MenuType";
import Image from "next/image";

export function MenuDropdown({
  item,
  top,
  left,
  onMouseEnter,
  onMouseLeave,
}: MenuDropdownProps) {
  if (!item.megaMenu) return null;

  const { sections, featuredImage } = item.megaMenu;

  const mainSections = sections.slice(0, -1);
  const lastSection = sections[sections.length - 1];
  const hasLastSection = sections.length > 1;

  const dropdown = (
    <div
      style={{
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 9999,
        width: "1100px",
        maxWidth: "95vw",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label={`${item.label} menu`}
    >
      <div className="bg-white border border-gray-200 shadow-xl rounded-b-md p-6 grid grid-cols-[1fr_auto] gap-6">
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

        {/* Right: last section + optional featured image */}
        {hasLastSection && (
          <div className="flex gap-6 border-l border-gray-100 pl-6">
            <div className="min-w-35">
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

            {featuredImage && (
              <Link href={featuredImage.href} className="shrink-0 block">
                <div className="w-70 h-85 rounded-md overflow-hidden bg-gray-100">
                  <Image
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    width={160}
                    height={208}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(dropdown, document.body);
}
