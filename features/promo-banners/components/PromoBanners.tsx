import { PROMO_BANNERS } from "../data/promoBannersData";
import { PromoBannerCard } from "./PromoBannerCard";

export function PromoBanners() {
  return (
    <section className="w-full lg:max-w-7xl max-w-[811px] max-h-[470px] min-h-[470px] hidden md:flex mx-auto mt-18">
      <div className="flex  md:flex-row gap-5 ">
        {PROMO_BANNERS.map((banner) => (
          <PromoBannerCard key={banner.id} banner={banner} />
        ))}
      </div>
    </section>
  );
}
