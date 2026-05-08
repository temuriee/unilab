import { NavItem } from "../types/MenuType";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Woman",
    megaMenu: {
      sections: [
        {
          title: "Shoe & Bag",
          items: [
            { label: "Casual Shoes", href: "/woman/casual-shoes" },
            { label: "Boots", href: "/woman/boots" },
            { label: "Sandals", href: "/woman/sandals" },
            { label: "Slippers", href: "/woman/slippers" },
          ],
        },
        {
          title: "Luxury & Designer",
          items: [
            { label: "Towels", href: "/woman/towels" },
            { label: "Bathroom Scales", href: "/woman/bathroom-scales" },
            { label: "Bath Mats", href: "/woman/bath-mats" },
            { label: "Shower Caps", href: "/woman/shower-caps" },
          ],
        },
        {
          title: "Home Textile",
          items: [
            { label: "Bedding", href: "/woman/bedding" },
            { label: "Pillows", href: "/woman/pillows" },
            {
              label: "Handkerchief Towels",
              href: "/woman/handkerchief-towels",
            },
            { label: "Curtain", href: "/woman/curtain" },
          ],
        },
        {
          title: "Cosmetics",
          items: [
            { label: "Shampoo and Conditioner", href: "/woman/shampoo" },
            { label: "Styling Products", href: "/woman/styling-products" },
            { label: "Hair Accessories", href: "/woman/hair-accessories" },
            { label: "Men's Grooming", href: "/woman/mens-grooming" },
          ],
        },
        {
          title: "Party Supplies",
          items: [
            { label: "Event & Party", href: "/woman/event-party" },
            { label: "Christmas", href: "/woman/christmas" },
            {
              label: "Artificial Decorations",
              href: "/woman/artificial-decorations",
            },
            { label: "Wedding", href: "/woman/wedding" },
          ],
        },
        {
          title: "Sport & Outdoors",
          items: [
            { label: "Team Sports", href: "/woman/team-sports" },
            { label: "Water Sports", href: "/woman/water-sports" },
            { label: "Outdoor Recreation", href: "/woman/outdoor-recreation" },
            { label: "Fitness Equipment", href: "/woman/fitness-equipment" },
          ],
        },
        {
          title: "Clothes",
          items: [
            { label: "Bottoms", href: "/woman/bottoms" },
            { label: "Women's Clothing", href: "/woman/womens-clothing" },
            { label: "T-Shirts and Tops", href: "/woman/tshirts-tops" },
            { label: "Dresses", href: "/woman/dresses" },
            { label: "Outerwear", href: "/woman/outerwear" },
            { label: "Formal Wear", href: "/woman/formal-wear" },
            { label: "Casual Wear", href: "/woman/casual-wear" },
            {
              label: "Seasonal Collections",
              href: "/woman/seasonal-collections",
            },
            { label: "Sports Bras", href: "/woman/sports-bras" },
            { label: "Workout Tops", href: "/woman/workout-tops" },
            { label: "Fall Wardrobe", href: "/woman/fall-wardrobe" },
          ],
        },
      ],
    },
  },
  {
    label: "Male",
    megaMenu: {
      sections: [
        {
          title: "Clothing",
          items: [
            { label: "T-Shirts", href: "/male/tshirts" },
            { label: "Jeans", href: "/male/jeans" },
            { label: "Suits", href: "/male/suits" },
            { label: "Activewear", href: "/male/activewear" },
          ],
        },
        {
          title: "Shoes",
          items: [
            { label: "Sneakers", href: "/male/sneakers" },
            { label: "Formal Shoes", href: "/male/formal-shoes" },
            { label: "Boots", href: "/male/boots" },
            { label: "Sandals", href: "/male/sandals" },
          ],
        },
      ],
    },
  },
  { label: "Mother-Child", href: "/mother-child" },
  { label: "Home & Furniture", href: "/home-furniture" },
  { label: "Super Market", href: "/supermarket" },
  { label: "Cosmetics", href: "/cosmetics" },
  { label: "Shoe & Bag", href: "/shoe-bag" },
  { label: "Electronic", href: "/electronic" },
  { label: "Sport & Outdoor", href: "/sport-outdoor" },
  { label: "Best Seller", href: "/best-seller" },
];
