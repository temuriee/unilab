import Image from "next/image";
import Link from "next/link";
import { PromoBanner } from "../types";

interface PromoBannerCardProps {
  banner: PromoBanner;
}

export function PromoBannerCard({ banner }: PromoBannerCardProps) {
  return (
    <div className="flex flex-1 overflow-hidden max-w-[395.5px] min-w-[395.5px] max-h-[470px] min-h-[470px] lg:max-w-[620px] lg:max-h-[383px] lg:min-w-[620px] lg:min-h-[383px] ">
      {/* Text side */}
      <div
        className={`flex flex-col justify-center gap-4 px-6 py-8 md:px-8 lg:px-10 max-w-[197.75px] min-w-[197.75px]  max-h-[467px] min-h-[467px] lg:max-w-[310px] lg:max-h-[383px] lg:min-h-[383px] lg:min-w-[310px] bg-[${banner.bgColor}]`}
      >
        <h2 className="text-white font-extrabold text-4xl md:text-2xl lg:text-3xl leading-tight">
          {banner.title}
        </h2>
        <p className="text-white/90 text-2xl ">{banner.description}</p>
        <Link
          href={banner.linkHref}
          className="text-white underline text-[18px] mt-2 hover:text-white/70 transition-colors duration-150 "
        >
          {banner.linkText}
        </Link>
      </div>

      {/* Image side */}
      <div className="flex flex-1 relative overflow-hidden">
        <Image
          src={banner.image}
          alt={banner.imageAlt}
          fill
          className="object-cover object-top max-h-[467px]"
        />
      </div>
    </div>
  );
}
