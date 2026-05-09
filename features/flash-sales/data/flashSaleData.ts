import { FlashSaleProduct } from "../types";

const now = new Date();

const addHours = (h: number, m: number, s: number) => {
  const d = new Date(now);
  d.setHours(d.getHours() + h, d.getMinutes() + m, d.getSeconds() + s);
  return d;
};

export const FLASH_SALE_PRODUCTS: FlashSaleProduct[] = [
  {
    id: 1,
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    image: "/BagPhoto.png",
    price: 69.99,
    originalPrice: 129.99,
    discount: 46,
    rating: 4,
    reviewCount: 54,
    endsAt: addHours(12, 43, 12),
  },

  {
    id: 2,
    name: "Reebok",
    description: "Women's Powder sneakers",
    image: "/ShoePhoto.png",
    price: 112.02,
    originalPrice: 129.99,
    discount: 14,
    rating: 4,
    reviewCount: 54,
    endsAt: addHours(2, 5, 32),
  },
  {
    id: 3,
    name: "Patso",
    description: "Shoulder bag-Pink-Plain",
    image: "/PinkBag.png",
    price: 69.99,
    originalPrice: 129.99,
    discount: 46,
    rating: 3,
    reviewCount: 54,
    endsAt: addHours(2, 14, 21),
  },
  {
    id: 4,
    name: "Sketchers",
    description: "Sport-shoe 2102",
    image: "/BlackShoe.png",
    price: 80.0,
    originalPrice: 129.99,
    discount: 38,
    rating: 4,
    reviewCount: 54,
    endsAt: addHours(25, 11, 2),
  },
];
