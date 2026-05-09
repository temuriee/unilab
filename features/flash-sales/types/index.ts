export interface FlashSaleProduct {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  endsAt: Date;
}
