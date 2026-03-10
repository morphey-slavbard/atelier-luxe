import productCoat from "@/assets/product-coat.jpg";
import productBag from "@/assets/product-bag.jpg";
import productDress from "@/assets/product-dress.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productKnit from "@/assets/product-knit.jpg";
import productTrousers from "@/assets/product-trousers.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  details: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "structured-wool-coat",
    name: "Structured Wool Coat",
    price: 4200,
    category: "Outerwear",
    image: productCoat,
    description: "A masterfully tailored coat in virgin wool with a fluid silhouette. Featuring a notched lapel collar and a single-button closure, this piece embodies understated elegance.",
    details: ["100% Virgin Wool", "Silk lining", "Single-button closure", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "leather-structured-bag",
    name: "Leather Structured Bag",
    price: 3100,
    category: "Accessories",
    image: productBag,
    description: "Crafted from supple calfskin leather, this structured tote features refined hardware and an architectural silhouette that balances form with function.",
    details: ["Calfskin leather", "Gold-tone hardware", "Interior zip pocket", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "silk-evening-dress",
    name: "Silk Evening Dress",
    price: 5800,
    category: "Dresses",
    image: productDress,
    description: "An exquisite evening dress in flowing silk with delicate spaghetti straps and a cinched waist. The floor-length silhouette creates an effortlessly dramatic presence.",
    details: ["100% Silk", "Fully lined", "Concealed zip closure", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "pointed-leather-heels",
    name: "Pointed Leather Heels",
    price: 890,
    category: "Shoes",
    image: productHeels,
    description: "Sleek pointed-toe pumps in polished calfskin leather. The refined 90mm heel offers a perfect balance of sophistication and comfort.",
    details: ["Calfskin leather", "Leather sole", "90mm heel", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "cashmere-knit-sweater",
    name: "Cashmere Knit Sweater",
    price: 1450,
    category: "Knitwear",
    image: productKnit,
    description: "A luxuriously soft crewneck sweater in pure cashmere. The relaxed fit and ribbed trims create a refined yet effortless silhouette.",
    details: ["100% Cashmere", "Ribbed cuffs and hem", "Regular fit", "Made in Scotland"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "tailored-wool-trousers",
    name: "Tailored Wool Trousers",
    price: 1200,
    category: "Trousers",
    image: productTrousers,
    description: "Impeccably tailored trousers in fine wool with a pressed crease and a straight-leg cut. A foundation piece for the modern wardrobe.",
    details: ["98% Wool, 2% Elastane", "Pressed crease", "Belt loops", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export const categories = ["All", "Outerwear", "Accessories", "Dresses", "Shoes", "Knitwear", "Trousers"];
