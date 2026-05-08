export interface NavItem {
  label: string;
  href?: string;
  megaMenu?: {
    sections: {
      title: string;
      items: { label: string; href: string }[];
    }[];
    featuredImage?: {
      src: string;
      alt: string;
      href: string;
    };
  };
}
