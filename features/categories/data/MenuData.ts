import { CategoryItem } from "../types/MenuType";

export const CATEGORY_ITEMS: CategoryItem[] = [
  {
    label: "Woman",
    megaMenu: {
      featuredImage: {
        src: "/WomanPhoto.png",
        alt: "Woman fashion collection",
        href: "/woman",
      },
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
        {
          title: "Accessories",
          items: [
            { label: "Watches", href: "/male/watches" },
            { label: "Belts", href: "/male/belts" },
            { label: "Wallets", href: "/male/wallets" },
            { label: "Sunglasses", href: "/male/sunglasses" },
          ],
        },
        {
          title: "Grooming",
          items: [
            { label: "Shaving", href: "/male/shaving" },
            { label: "Skincare", href: "/male/skincare" },
            { label: "Fragrances", href: "/male/fragrances" },
            { label: "Hair Care", href: "/male/hair-care" },
          ],
        },
        {
          title: "Sport",
          items: [
            { label: "Gym Wear", href: "/male/gym-wear" },
            { label: "Running", href: "/male/running" },
            { label: "Swimwear", href: "/male/swimwear" },
            { label: "Outdoor Gear", href: "/male/outdoor-gear" },
          ],
        },
        {
          title: "All Clothing",
          items: [
            { label: "Jackets & Coats", href: "/male/jackets" },
            { label: "Hoodies", href: "/male/hoodies" },
            { label: "Shorts", href: "/male/shorts" },
            { label: "Underwear", href: "/male/underwear" },
            { label: "Socks", href: "/male/socks" },
            { label: "Swimwear", href: "/male/swimwear" },
            { label: "Formal Wear", href: "/male/formal-wear" },
            { label: "Casual Wear", href: "/male/casual-wear" },
          ],
        },
      ],
    },
  },
  {
    label: "Mother-Child",
    megaMenu: {
      sections: [
        {
          title: "Baby Clothing",
          items: [
            { label: "Newborn (0-3M)", href: "/mother-child/newborn" },
            { label: "Baby Bodysuits", href: "/mother-child/bodysuits" },
            { label: "Sleepwear", href: "/mother-child/sleepwear" },
            { label: "Baby Sets", href: "/mother-child/baby-sets" },
          ],
        },
        {
          title: "Kids Clothing",
          items: [
            { label: "Girls (2-14)", href: "/mother-child/girls" },
            { label: "Boys (2-14)", href: "/mother-child/boys" },
            { label: "School Uniforms", href: "/mother-child/uniforms" },
            { label: "Seasonal Wear", href: "/mother-child/seasonal" },
          ],
        },
        {
          title: "Maternity",
          items: [
            {
              label: "Maternity Dresses",
              href: "/mother-child/maternity-dresses",
            },
            { label: "Nursing Tops", href: "/mother-child/nursing-tops" },
            { label: "Maternity Pants", href: "/mother-child/maternity-pants" },
            { label: "Maternity Lingerie", href: "/mother-child/lingerie" },
          ],
        },
        {
          title: "Baby Gear",
          items: [
            { label: "Strollers", href: "/mother-child/strollers" },
            { label: "Car Seats", href: "/mother-child/car-seats" },
            { label: "Baby Carriers", href: "/mother-child/carriers" },
            { label: "Baby Monitors", href: "/mother-child/monitors" },
          ],
        },
        {
          title: "Feeding",
          items: [
            { label: "Breast Pumps", href: "/mother-child/breast-pumps" },
            { label: "Baby Bottles", href: "/mother-child/bottles" },
            { label: "High Chairs", href: "/mother-child/high-chairs" },
            { label: "Baby Food", href: "/mother-child/baby-food" },
          ],
        },
        {
          title: "Toys & Education",
          items: [
            { label: "Educational Toys", href: "/mother-child/educational" },
            { label: "Outdoor Toys", href: "/mother-child/outdoor-toys" },
            { label: "Books", href: "/mother-child/books" },
            { label: "Arts & Crafts", href: "/mother-child/arts-crafts" },
            { label: "Puzzles", href: "/mother-child/puzzles" },
            { label: "Board Games", href: "/mother-child/board-games" },
          ],
        },
      ],
    },
  },
  {
    label: "Home & Furniture",
    megaMenu: {
      sections: [
        {
          title: "Living Room",
          items: [
            { label: "Sofas & Couches", href: "/home/sofas" },
            { label: "Coffee Tables", href: "/home/coffee-tables" },
            { label: "TV Units", href: "/home/tv-units" },
            { label: "Armchairs", href: "/home/armchairs" },
          ],
        },
        {
          title: "Bedroom",
          items: [
            { label: "Beds & Frames", href: "/home/beds" },
            { label: "Wardrobes", href: "/home/wardrobes" },
            { label: "Dressers", href: "/home/dressers" },
            { label: "Nightstands", href: "/home/nightstands" },
          ],
        },
        {
          title: "Kitchen & Dining",
          items: [
            { label: "Dining Tables", href: "/home/dining-tables" },
            { label: "Dining Chairs", href: "/home/dining-chairs" },
            { label: "Kitchen Storage", href: "/home/kitchen-storage" },
            { label: "Bar Stools", href: "/home/bar-stools" },
          ],
        },
        {
          title: "Home Decor",
          items: [
            { label: "Rugs & Carpets", href: "/home/rugs" },
            { label: "Curtains & Blinds", href: "/home/curtains" },
            { label: "Wall Art", href: "/home/wall-art" },
            { label: "Mirrors", href: "/home/mirrors" },
          ],
        },
        {
          title: "Lighting",
          items: [
            { label: "Ceiling Lights", href: "/home/ceiling-lights" },
            { label: "Floor Lamps", href: "/home/floor-lamps" },
            { label: "Table Lamps", href: "/home/table-lamps" },
            { label: "Smart Lighting", href: "/home/smart-lighting" },
          ],
        },
        {
          title: "Storage",
          items: [
            { label: "Bookshelves", href: "/home/bookshelves" },
            { label: "Storage Boxes", href: "/home/storage-boxes" },
            { label: "Cabinets", href: "/home/cabinets" },
            { label: "Coat Racks", href: "/home/coat-racks" },
            { label: "Shoe Racks", href: "/home/shoe-racks" },
            { label: "Drawer Units", href: "/home/drawer-units" },
          ],
        },
      ],
    },
  },
  {
    label: "Super Market",
    megaMenu: {
      sections: [
        {
          title: "Fresh Produce",
          items: [
            { label: "Fruits", href: "/supermarket/fruits" },
            { label: "Vegetables", href: "/supermarket/vegetables" },
            { label: "Herbs & Spices", href: "/supermarket/herbs" },
            { label: "Organic", href: "/supermarket/organic" },
          ],
        },
        {
          title: "Dairy & Eggs",
          items: [
            { label: "Milk", href: "/supermarket/milk" },
            { label: "Cheese", href: "/supermarket/cheese" },
            { label: "Yogurt", href: "/supermarket/yogurt" },
            { label: "Eggs", href: "/supermarket/eggs" },
          ],
        },
        {
          title: "Meat & Seafood",
          items: [
            { label: "Chicken", href: "/supermarket/chicken" },
            { label: "Beef & Lamb", href: "/supermarket/beef-lamb" },
            { label: "Fish", href: "/supermarket/fish" },
            { label: "Deli Meats", href: "/supermarket/deli" },
          ],
        },
        {
          title: "Bakery",
          items: [
            { label: "Bread", href: "/supermarket/bread" },
            { label: "Pastries", href: "/supermarket/pastries" },
            { label: "Cakes", href: "/supermarket/cakes" },
            { label: "Cookies", href: "/supermarket/cookies" },
          ],
        },
        {
          title: "Beverages",
          items: [
            { label: "Water", href: "/supermarket/water" },
            { label: "Juices", href: "/supermarket/juices" },
            { label: "Soft Drinks", href: "/supermarket/soft-drinks" },
            { label: "Coffee & Tea", href: "/supermarket/coffee-tea" },
          ],
        },
        {
          title: "Pantry & Snacks",
          items: [
            { label: "Pasta & Rice", href: "/supermarket/pasta-rice" },
            { label: "Canned Goods", href: "/supermarket/canned" },
            { label: "Chips & Snacks", href: "/supermarket/snacks" },
            { label: "Breakfast Cereals", href: "/supermarket/cereals" },
            { label: "Condiments", href: "/supermarket/condiments" },
            { label: "Cooking Oils", href: "/supermarket/oils" },
          ],
        },
      ],
    },
  },
  {
    label: "Cosmetics",
    megaMenu: {
      sections: [
        {
          title: "Skincare",
          items: [
            { label: "Moisturizers", href: "/cosmetics/moisturizers" },
            { label: "Serums", href: "/cosmetics/serums" },
            { label: "Sunscreen", href: "/cosmetics/sunscreen" },
            { label: "Face Masks", href: "/cosmetics/face-masks" },
          ],
        },
        {
          title: "Makeup",
          items: [
            { label: "Foundation", href: "/cosmetics/foundation" },
            { label: "Lipstick", href: "/cosmetics/lipstick" },
            { label: "Mascara", href: "/cosmetics/mascara" },
            { label: "Eyeshadow", href: "/cosmetics/eyeshadow" },
          ],
        },
        {
          title: "Hair Care",
          items: [
            { label: "Shampoo", href: "/cosmetics/shampoo" },
            { label: "Conditioner", href: "/cosmetics/conditioner" },
            { label: "Hair Masks", href: "/cosmetics/hair-masks" },
            { label: "Styling Products", href: "/cosmetics/styling" },
          ],
        },
        {
          title: "Fragrance",
          items: [
            { label: "Perfumes", href: "/cosmetics/perfumes" },
            { label: "Body Mists", href: "/cosmetics/body-mists" },
            { label: "Deodorants", href: "/cosmetics/deodorants" },
            { label: "Gift Sets", href: "/cosmetics/gift-sets" },
          ],
        },
        {
          title: "Body Care",
          items: [
            { label: "Body Lotions", href: "/cosmetics/body-lotions" },
            { label: "Scrubs", href: "/cosmetics/scrubs" },
            { label: "Bath & Shower", href: "/cosmetics/bath-shower" },
            { label: "Hand Cream", href: "/cosmetics/hand-cream" },
          ],
        },
        {
          title: "Tools & Brushes",
          items: [
            { label: "Makeup Brushes", href: "/cosmetics/brushes" },
            { label: "Sponges", href: "/cosmetics/sponges" },
            { label: "Eyelash Curlers", href: "/cosmetics/eyelash-curlers" },
            { label: "Nail Tools", href: "/cosmetics/nail-tools" },
            { label: "Hair Tools", href: "/cosmetics/hair-tools" },
            { label: "Skin Devices", href: "/cosmetics/skin-devices" },
          ],
        },
      ],
    },
  },
  {
    label: "Shoe & Bag",
    megaMenu: {
      sections: [
        {
          title: "Women's Shoes",
          items: [
            { label: "Heels", href: "/shoe-bag/heels" },
            { label: "Flats", href: "/shoe-bag/flats" },
            { label: "Sneakers", href: "/shoe-bag/womens-sneakers" },
            { label: "Boots", href: "/shoe-bag/womens-boots" },
          ],
        },
        {
          title: "Men's Shoes",
          items: [
            { label: "Formal Shoes", href: "/shoe-bag/mens-formal" },
            { label: "Sneakers", href: "/shoe-bag/mens-sneakers" },
            { label: "Loafers", href: "/shoe-bag/loafers" },
            { label: "Boots", href: "/shoe-bag/mens-boots" },
          ],
        },
        {
          title: "Handbags",
          items: [
            { label: "Tote Bags", href: "/shoe-bag/tote" },
            { label: "Shoulder Bags", href: "/shoe-bag/shoulder" },
            { label: "Clutches", href: "/shoe-bag/clutches" },
            { label: "Crossbody Bags", href: "/shoe-bag/crossbody" },
          ],
        },
        {
          title: "Backpacks",
          items: [
            { label: "Casual Backpacks", href: "/shoe-bag/casual-backpacks" },
            { label: "Laptop Bags", href: "/shoe-bag/laptop-bags" },
            { label: "Travel Backpacks", href: "/shoe-bag/travel-backpacks" },
            { label: "Mini Backpacks", href: "/shoe-bag/mini-backpacks" },
          ],
        },
        {
          title: "Luggage",
          items: [
            { label: "Carry-On", href: "/shoe-bag/carry-on" },
            { label: "Check-In", href: "/shoe-bag/check-in" },
            { label: "Travel Sets", href: "/shoe-bag/travel-sets" },
            { label: "Duffle Bags", href: "/shoe-bag/duffle" },
          ],
        },
        {
          title: "All Bags",
          items: [
            { label: "Designer Bags", href: "/shoe-bag/designer" },
            { label: "Wallet & Purses", href: "/shoe-bag/wallets" },
            { label: "Belt Bags", href: "/shoe-bag/belt-bags" },
            { label: "Beach Bags", href: "/shoe-bag/beach-bags" },
            { label: "Gym Bags", href: "/shoe-bag/gym-bags" },
            { label: "Kids Bags", href: "/shoe-bag/kids-bags" },
          ],
        },
      ],
    },
  },
  {
    label: "Electronic",
    megaMenu: {
      sections: [
        {
          title: "Phones & Tablets",
          items: [
            { label: "Smartphones", href: "/electronic/smartphones" },
            { label: "Tablets", href: "/electronic/tablets" },
            { label: "Phone Cases", href: "/electronic/phone-cases" },
            {
              label: "Screen Protectors",
              href: "/electronic/screen-protectors",
            },
          ],
        },
        {
          title: "Computers",
          items: [
            { label: "Laptops", href: "/electronic/laptops" },
            { label: "Desktops", href: "/electronic/desktops" },
            { label: "Monitors", href: "/electronic/monitors" },
            { label: "Keyboards & Mice", href: "/electronic/peripherals" },
          ],
        },
        {
          title: "Audio",
          items: [
            { label: "Headphones", href: "/electronic/headphones" },
            { label: "Earbuds", href: "/electronic/earbuds" },
            { label: "Speakers", href: "/electronic/speakers" },
            { label: "Soundbars", href: "/electronic/soundbars" },
          ],
        },
        {
          title: "TV & Home Cinema",
          items: [
            { label: "Smart TVs", href: "/electronic/tvs" },
            { label: "Projectors", href: "/electronic/projectors" },
            { label: "Streaming Devices", href: "/electronic/streaming" },
            { label: "Remote Controls", href: "/electronic/remotes" },
          ],
        },
        {
          title: "Cameras",
          items: [
            { label: "DSLR Cameras", href: "/electronic/dslr" },
            { label: "Mirrorless", href: "/electronic/mirrorless" },
            { label: "Action Cameras", href: "/electronic/action-cameras" },
            {
              label: "Camera Accessories",
              href: "/electronic/camera-accessories",
            },
          ],
        },
        {
          title: "Smart Home",
          items: [
            { label: "Smart Speakers", href: "/electronic/smart-speakers" },
            { label: "Smart Bulbs", href: "/electronic/smart-bulbs" },
            { label: "Robot Vacuums", href: "/electronic/robot-vacuums" },
            { label: "Security Cameras", href: "/electronic/security" },
            { label: "Smart Plugs", href: "/electronic/smart-plugs" },
            { label: "Wearables", href: "/electronic/wearables" },
          ],
        },
      ],
    },
  },
  {
    label: "Sport & Outdoor",
    megaMenu: {
      sections: [
        {
          title: "Fitness",
          items: [
            { label: "Gym Equipment", href: "/sport/gym-equipment" },
            { label: "Yoga & Pilates", href: "/sport/yoga" },
            { label: "Cardio Machines", href: "/sport/cardio" },
            { label: "Weights", href: "/sport/weights" },
          ],
        },
        {
          title: "Team Sports",
          items: [
            { label: "Football", href: "/sport/football" },
            { label: "Basketball", href: "/sport/basketball" },
            { label: "Volleyball", href: "/sport/volleyball" },
            { label: "Tennis", href: "/sport/tennis" },
          ],
        },
        {
          title: "Outdoor Activities",
          items: [
            { label: "Camping", href: "/sport/camping" },
            { label: "Hiking", href: "/sport/hiking" },
            { label: "Cycling", href: "/sport/cycling" },
            { label: "Climbing", href: "/sport/climbing" },
          ],
        },
        {
          title: "Water Sports",
          items: [
            { label: "Swimming", href: "/sport/swimming" },
            { label: "Surfing", href: "/sport/surfing" },
            { label: "Diving", href: "/sport/diving" },
            { label: "Kayaking", href: "/sport/kayaking" },
          ],
        },
        {
          title: "Winter Sports",
          items: [
            { label: "Skiing", href: "/sport/skiing" },
            { label: "Snowboarding", href: "/sport/snowboarding" },
            { label: "Ice Skating", href: "/sport/ice-skating" },
            { label: "Winter Gear", href: "/sport/winter-gear" },
          ],
        },
        {
          title: "Sports Clothing",
          items: [
            { label: "Running Shoes", href: "/sport/running-shoes" },
            { label: "Sports Tops", href: "/sport/sports-tops" },
            { label: "Leggings", href: "/sport/leggings" },
            { label: "Sports Bras", href: "/sport/sports-bras" },
            { label: "Compression Wear", href: "/sport/compression" },
            { label: "Sports Socks", href: "/sport/socks" },
          ],
        },
      ],
    },
  },
  {
    label: "Best Seller",
    megaMenu: {
      sections: [
        {
          title: "Top Rated",
          items: [
            { label: "Most Reviewed", href: "/best-seller/most-reviewed" },
            { label: "Editor's Picks", href: "/best-seller/editors-picks" },
            { label: "Award Winners", href: "/best-seller/award-winners" },
            { label: "Staff Favorites", href: "/best-seller/staff-favorites" },
          ],
        },
        {
          title: "Trending Now",
          items: [
            { label: "This Week", href: "/best-seller/this-week" },
            { label: "This Month", href: "/best-seller/this-month" },
            { label: "New Arrivals", href: "/best-seller/new-arrivals" },
            { label: "Coming Soon", href: "/best-seller/coming-soon" },
          ],
        },
        {
          title: "By Category",
          items: [
            { label: "Fashion", href: "/best-seller/fashion" },
            { label: "Electronics", href: "/best-seller/electronics" },
            { label: "Home & Living", href: "/best-seller/home" },
            { label: "Beauty", href: "/best-seller/beauty" },
          ],
        },
        {
          title: "Deals",
          items: [
            { label: "Flash Sales", href: "/best-seller/flash-sales" },
            { label: "Bundle Offers", href: "/best-seller/bundles" },
            { label: "Clearance", href: "/best-seller/clearance" },
            { label: "Vouchers", href: "/best-seller/vouchers" },
          ],
        },
        {
          title: "By Price",
          items: [
            { label: "Under $25", href: "/best-seller/under-25" },
            { label: "Under $50", href: "/best-seller/under-50" },
            { label: "Under $100", href: "/best-seller/under-100" },
            { label: "Luxury Picks", href: "/best-seller/luxury" },
          ],
        },
        {
          title: "Collections",
          items: [
            { label: "Gift Ideas", href: "/best-seller/gifts" },
            { label: "Seasonal Picks", href: "/best-seller/seasonal" },
            { label: "Limited Edition", href: "/best-seller/limited" },
            { label: "Exclusive Brands", href: "/best-seller/exclusive" },
            {
              label: "Customer Favorites",
              href: "/best-seller/customer-favorites",
            },
            { label: "Shop All", href: "/best-seller" },
          ],
        },
      ],
    },
  },
];
