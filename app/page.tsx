import Essential from "@/features/essentials/components/Essential";
import MobileEssential from "@/features/essentials/components/MobileEssential";
import { FlashSales } from "@/features/flash-sales/components/FlashSales";
import { ProductHighlight } from "@/features/product-highlight/components/ProductHighlight";
import { ProductShowcase } from "@/features/product-showcase/components/ProductShowcase";
import { PromoBanners } from "@/features/promo-banners/components/PromoBanners";
import { Top100 } from "@/features/top100/components/Top100";

const Home = () => {
  return (
    <div>
      <Essential />
      <MobileEssential />
      <FlashSales />
      <ProductShowcase />
      <Top100 />
      <PromoBanners />
      <ProductHighlight />
      <PromoBanners slice={[2, 4]} />
    </div>
  );
};

export default Home;
