import { FooterColumn } from "../types";

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Store", href: "/store" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Career Opportunities",
    links: [
      { label: "Selling Programs", href: "/careers/selling" },
      { label: "Advertise", href: "/careers/advertise" },
      { label: "Cooperation", href: "/careers/cooperation" },
    ],
  },
  {
    title: "How to Buy",
    links: [
      { label: "Making Payments", href: "/help/payments" },
      { label: "Delivery Options", href: "/help/delivery" },
      { label: "Buyer Protection", href: "/help/buyer-protection" },
      { label: "New User Guide", href: "/help/new-user" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Contacts Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { href: "https://instagram.com", icon: "instagram" },
  { href: "https://facebook.com", icon: "facebook" },
  { href: "https://telegram.me", icon: "telegram" },
];
