export interface CategoryItem {
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

export interface MenuDropdownProps {
  item: CategoryItem;
  top: number;
  left: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
