import productCoat from "@/assets/product-coat.jpg";
import productBag from "@/assets/product-bag.jpg";
import productDress from "@/assets/product-dress.jpg";
import productHeels from "@/assets/product-heels.jpg";
import productKnit from "@/assets/product-knit.jpg";
import productTrousers from "@/assets/product-trousers.jpg";
import productOvercoat from "@/assets/product-overcoat.jpg";
import productCrossbody from "@/assets/product-crossbody.jpg";
import productWrapDress from "@/assets/product-wrap-dress.jpg";
import productBoots from "@/assets/product-boots.jpg";
import productTurtleneck from "@/assets/product-turtleneck.jpg";
import productWideTrousers from "@/assets/product-wide-trousers.jpg";
import productBlazer from "@/assets/product-blazer.jpg";
import productScarf from "@/assets/product-scarf.jpg";
import productCocktailDress from "@/assets/product-cocktail-dress.jpg";
import productLoafers from "@/assets/product-loafers.jpg";
import productCardigan from "@/assets/product-cardigan.jpg";
import productCigaretteTrousers from "@/assets/product-cigarette-trousers.jpg";

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
  // Outerwear
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
    id: "cashmere-overcoat",
    name: "Double-Breasted Cashmere Overcoat",
    price: 5600,
    category: "Outerwear",
    image: productOvercoat,
    description: "An enveloping double-breasted overcoat in luxurious camel cashmere. The elongated silhouette and wide lapels create a commanding yet refined presence.",
    details: ["100% Cashmere", "Horn buttons", "Welt pockets", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "tailored-navy-blazer",
    name: "Tailored Navy Blazer",
    price: 2800,
    category: "Outerwear",
    image: productBlazer,
    description: "An impeccably structured single-button blazer in midnight navy wool. The sharp shoulders and nipped waist create a powerful, feminine silhouette.",
    details: ["100% Virgin Wool", "Viscose lining", "Flap pockets", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },

  // Accessories
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
    id: "chain-crossbody-bag",
    name: "Chain Crossbody Bag",
    price: 2400,
    category: "Accessories",
    image: productCrossbody,
    description: "A sleek envelope crossbody in polished calfskin with an elegant gold chain strap. The compact form holds essentials with effortless sophistication.",
    details: ["Calfskin leather", "Gold chain strap", "Magnetic closure", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "printed-silk-scarf",
    name: "Printed Silk Scarf",
    price: 680,
    category: "Accessories",
    image: productScarf,
    description: "A hand-rolled silk twill scarf featuring an original artistic print. Versatile enough to wear as a headscarf, neck tie, or draped from a bag.",
    details: ["100% Silk twill", "Hand-rolled edges", "90 x 90 cm", "Made in France"],
    sizes: ["One Size"],
  },

  // Dresses
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
    id: "ivory-wrap-dress",
    name: "Ivory Silk Wrap Dress",
    price: 3200,
    category: "Dresses",
    image: productWrapDress,
    description: "A flowing midi wrap dress in ivory silk crêpe with billowing sleeves and a self-tie waist. The fluid drape moves gracefully with every step.",
    details: ["100% Silk crêpe", "Self-tie closure", "Midi length", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "black-cocktail-dress",
    name: "Embellished Cocktail Dress",
    price: 4500,
    category: "Dresses",
    image: productCocktailDress,
    description: "A striking cocktail dress in black chiffon with a plunging V-neckline and a crystal-embellished bodice. The A-line skirt creates timeless drama.",
    details: ["Silk chiffon", "Crystal embellishment", "Fully lined", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },

  // Shoes
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
    id: "suede-chelsea-boots",
    name: "Suede Chelsea Boots",
    price: 1100,
    category: "Shoes",
    image: productBoots,
    description: "Classic Chelsea boots reimagined in supple tan suede with a refined block heel. Elastic side panels ensure a sleek, seamless silhouette.",
    details: ["Suede upper", "Leather sole", "50mm block heel", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "burgundy-leather-loafers",
    name: "Burgundy Leather Loafers",
    price: 780,
    category: "Shoes",
    image: productLoafers,
    description: "Timeless penny loafers in rich burgundy polished leather. The Goodyear-welted construction ensures enduring quality and comfort.",
    details: ["Polished calfskin", "Goodyear welt", "Leather sole", "Made in England"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },

  // Knitwear
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
    id: "ribbed-turtleneck",
    name: "Ribbed Wool Turtleneck",
    price: 980,
    category: "Knitwear",
    image: productTurtleneck,
    description: "A sculptural ribbed turtleneck in fine merino wool. The body-skimming fit and dramatic funnel neck create a modern, architectural look.",
    details: ["100% Merino Wool", "Ribbed construction", "Slim fit", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "mohair-cardigan",
    name: "Mohair Oversized Cardigan",
    price: 1680,
    category: "Knitwear",
    image: productCardigan,
    description: "A cloud-soft oversized cardigan in brushed mohair blend. The relaxed proportions and patch pockets offer effortless, cocooning warmth.",
    details: ["70% Mohair, 30% Wool", "Button closure", "Patch pockets", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },

  // Trousers
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
  {
    id: "wide-leg-pleated-trousers",
    name: "Wide-Leg Pleated Trousers",
    price: 1350,
    category: "Trousers",
    image: productWideTrousers,
    description: "Dramatic wide-leg trousers with deep front pleats in fluid black wool. The high waist and sweeping silhouette create an effortlessly elegant line.",
    details: ["100% Virgin Wool", "Front pleats", "High waist", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "cream-cigarette-trousers",
    name: "Cream Cigarette Trousers",
    price: 1100,
    category: "Trousers",
    image: productCigaretteTrousers,
    description: "Slim cigarette trousers in cream stretch wool with a clean, tapered leg. The minimalist design makes them a versatile wardrobe essential.",
    details: ["96% Wool, 4% Elastane", "Tapered leg", "Side zip", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

export const categories = ["All", "Outerwear", "Accessories", "Dresses", "Shoes", "Knitwear", "Trousers"];
