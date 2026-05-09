import { PROMO_BANNERS } from "../data/promoBannersData";
import { PromoBannerCard } from "./PromoBannerCard";

interface PromoBannersProps {
  slice?: [number, number];
}

export function PromoBanners({ slice }: PromoBannersProps) {
  const banners = slice
    ? PROMO_BANNERS.slice(slice[0], slice[1])
    : PROMO_BANNERS.slice(0, 2);

  return (
    <section className="w-full max-w-7xl mx-auto hidden md:flex justify-center mt-17">
      <div className="flex md:flex-row gap-4 max-h-[470px] lg:h-[380px]">
        {banners.map((banner) => (
          <PromoBannerCard key={banner.id} banner={banner} />
        ))}
      </div>
    </section>
  );
}
