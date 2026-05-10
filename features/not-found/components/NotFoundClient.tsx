"use client";

import { usePathname } from "next/navigation";
import { NoResults } from "./NoResults";

export function NotFoundClient() {
  const pathname = usePathname();

  return (
    <main className="w-full max-w-7xl mx-auto  flex items-center justify-center">
      <NoResults searchQuery={pathname} />
    </main>
  );
}
