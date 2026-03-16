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
import productTrench from "@/assets/product-trench.jpg";
import productPuffer from "@/assets/product-puffer.jpg";
import productCape from "@/assets/product-cape.jpg";
import productShearling from "@/assets/product-shearling.jpg";
import productSlipDress from "@/assets/product-slip-dress.jpg";
import productShirtDress from "@/assets/product-shirt-dress.jpg";
import productVelvetDress from "@/assets/product-velvet-dress.jpg";
import productPleatedDress from "@/assets/product-pleated-dress.jpg";
import productLaceGown from "@/assets/product-lace-gown.jpg";
import productVest from "@/assets/product-vest.jpg";
import productSlingback from "@/assets/product-slingback.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productSandals from "@/assets/product-sandals.jpg";
import productRidingBoots from "@/assets/product-riding-boots.jpg";
import productBalletFlats from "@/assets/product-ballet-flats.jpg";
import productCableKnit from "@/assets/product-cable-knit.jpg";
import productBreton from "@/assets/product-breton.jpg";
import productOpenweave from "@/assets/product-openweave.jpg";
import productVneckKnit from "@/assets/product-vneck-knit.jpg";
import productCroppedKnit from "@/assets/product-cropped-knit.jpg";
import productCargoTrousers from "@/assets/product-cargo-trousers.jpg";
import productPinstripe from "@/assets/product-pinstripe.jpg";
import productCulottes from "@/assets/product-culottes.jpg";
import productGreyTrousers from "@/assets/product-grey-trousers.jpg";
import productTweedTrousers from "@/assets/product-tweed-trousers.jpg";
import productBelt from "@/assets/product-belt.jpg";
import productSunglasses from "@/assets/product-sunglasses.jpg";
import productGloves from "@/assets/product-gloves.jpg";
import productNecklace from "@/assets/product-necklace.jpg";
import productClutch from "@/assets/product-clutch.jpg";
import productBeanie from "@/assets/product-beanie.jpg";

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
  // ── Outerwear (9) ──
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
  {
    id: "belted-trench-coat",
    name: "Belted Trench Coat",
    price: 3800,
    category: "Outerwear",
    image: productTrench,
    description: "A timeless belted trench coat in camel gabardine. The midi length and self-tie belt create a polished silhouette that transcends seasons.",
    details: ["Cotton gabardine", "Self-tie belt", "Storm flap", "Made in England"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "quilted-puffer-jacket",
    name: "Quilted Puffer Jacket",
    price: 2200,
    category: "Outerwear",
    image: productPuffer,
    description: "A modern puffer jacket in matte black nylon with a sculptural silhouette. High-fill goose down ensures exceptional warmth without bulk.",
    details: ["Nylon shell", "90% Goose down", "Stand collar", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "wool-cape-coat",
    name: "Wool Cape Coat",
    price: 4600,
    category: "Outerwear",
    image: productCape,
    description: "A dramatic oversized cape coat in dove grey wool with a cocoon silhouette. The voluminous proportions create an effortlessly striking presence.",
    details: ["Virgin wool blend", "Cocoon silhouette", "Concealed closure", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "shearling-jacket",
    name: "Shearling-Lined Leather Jacket",
    price: 6200,
    category: "Outerwear",
    image: productShearling,
    description: "A refined aviator jacket in cream leather with plush shearling lining. The asymmetric zip and oversized collar add a contemporary edge.",
    details: ["Lambskin leather", "Shearling lining", "Asymmetric zip", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "wool-vest",
    name: "Tailored Wool Vest",
    price: 1600,
    category: "Outerwear",
    image: productVest,
    description: "A sharp tailored vest in beige wool that layers effortlessly over shirts and knits. The minimalist cut offers versatile, modern suiting.",
    details: ["100% Virgin Wool", "Button closure", "Welt pockets", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "cashmere-wrap-coat",
    name: "Cashmere Wrap Coat",
    price: 5100,
    category: "Outerwear",
    image: productCape,
    description: "A luxurious wrap coat in soft grey cashmere with a draped collar. The belted waist and fluid lines create an effortlessly elegant silhouette.",
    details: ["100% Cashmere", "Self-tie belt", "Shawl collar", "Made in Italy"],
    sizes: ["XS", "S", "M", "L"],
  },

  // ── Accessories (9) ──
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
  {
    id: "gold-chain-belt",
    name: "Gold Chain Belt",
    price: 890,
    category: "Accessories",
    image: productBelt,
    description: "A statement chain belt in polished gold-tone metal. The chunky curb-link design adds a bold accent to any waistline.",
    details: ["Gold-tone metal", "Adjustable length", "Hook closure", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "tortoiseshell-sunglasses",
    name: "Tortoiseshell Sunglasses",
    price: 520,
    category: "Accessories",
    image: productSunglasses,
    description: "Oversized round sunglasses in rich tortoiseshell acetate with gradient brown lenses. A timeless silhouette that flatters every face shape.",
    details: ["Acetate frame", "UV400 protection", "Gradient lenses", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "leather-gloves",
    name: "Leather Gloves",
    price: 450,
    category: "Accessories",
    image: productGloves,
    description: "Exquisitely soft gloves in supple lambskin leather with a cashmere lining. The sleek, unadorned design is the epitome of quiet luxury.",
    details: ["Lambskin leather", "Cashmere lining", "Slip-on style", "Made in Italy"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "pearl-gold-necklace",
    name: "Pearl & Gold Necklace",
    price: 1200,
    category: "Accessories",
    image: productNecklace,
    description: "A delicate necklace combining freshwater pearls with a fine gold chain. The understated design can be worn alone or layered for a richer look.",
    details: ["18K gold-plated", "Freshwater pearls", "Adjustable chain", "Made in France"],
    sizes: ["One Size"],
  },
  {
    id: "woven-leather-clutch",
    name: "Woven Leather Clutch",
    price: 1600,
    category: "Accessories",
    image: productClutch,
    description: "A compact clutch in hand-woven calfskin leather with a detachable wrist strap. The intricate weave adds texture and artisanal character.",
    details: ["Hand-woven calfskin", "Zip closure", "Wrist strap", "Made in Italy"],
    sizes: ["One Size"],
  },
  {
    id: "cashmere-beanie",
    name: "Cashmere Ribbed Beanie",
    price: 320,
    category: "Accessories",
    image: productBeanie,
    description: "A cozy ribbed beanie in pure cashmere. The turn-up brim and relaxed crown offer warmth with refined simplicity.",
    details: ["100% Cashmere", "Ribbed construction", "Turn-up brim", "Made in Scotland"],
    sizes: ["One Size"],
  },

  // ── Dresses (9) ──
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
  {
    id: "olive-slip-dress",
    name: "Olive Satin Slip Dress",
    price: 2800,
    category: "Dresses",
    image: productSlipDress,
    description: "A bias-cut slip dress in deep olive silk satin that skims the body with effortless sensuality. The cowl neckline and floor-length hem evoke old Hollywood glamour.",
    details: ["100% Silk satin", "Bias cut", "Adjustable straps", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "white-shirt-dress",
    name: "Belted Shirt Dress",
    price: 2100,
    category: "Dresses",
    image: productShirtDress,
    description: "A crisp white shirt dress with utilitarian chest pockets and a cinched gold-buckle belt. The relaxed yet tailored fit bridges casual and polished.",
    details: ["Cotton poplin", "Gold-tone buckle belt", "Chest pockets", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "burgundy-velvet-dress",
    name: "Burgundy Velvet Midi Dress",
    price: 3600,
    category: "Dresses",
    image: productVelvetDress,
    description: "A rich burgundy velvet midi dress with a plunging V-neckline and flowing skirt. The luxurious fabric catches light with every movement.",
    details: ["Silk velvet", "Fully lined", "Midi length", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "gold-pleated-gown",
    name: "Pleated Gold Lamé Gown",
    price: 7200,
    category: "Dresses",
    image: productPleatedDress,
    description: "A show-stopping floor-length gown in gold lamé with allover knife pleats. The halter neckline and cinched waist create a goddess-like silhouette.",
    details: ["Metallic silk blend", "Knife pleats", "Halter neckline", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "black-lace-gown",
    name: "Black Lace Evening Gown",
    price: 8400,
    category: "Dresses",
    image: productLaceGown,
    description: "An exquisite black lace gown with intricate floral motifs, bell sleeves, and a dramatic floor-length silhouette. The sheer panelling adds allure with restraint.",
    details: ["French Chantilly lace", "Silk lining", "Bell sleeves", "Made in France"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "draped-midi-dress",
    name: "Draped Asymmetric Dress",
    price: 3900,
    category: "Dresses",
    image: productSlipDress,
    description: "A sculptural dress with an asymmetric hemline and expertly draped bodice. The one-shoulder design creates a striking architectural silhouette.",
    details: ["Stretch crêpe", "Asymmetric hem", "Concealed zip", "Made in Italy"],
    sizes: ["XS", "S", "M", "L"],
  },

  // ── Shoes (9) ──
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
  {
    id: "satin-slingback-heels",
    name: "Satin Slingback Heels",
    price: 950,
    category: "Shoes",
    image: productSlingback,
    description: "Elegant slingback pumps in black satin with a sharp pointed toe. The adjustable strap and 85mm heel create a refined evening silhouette.",
    details: ["Satin upper", "Leather sole", "85mm heel", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "white-leather-sneakers",
    name: "White Leather Sneakers",
    price: 620,
    category: "Shoes",
    image: productSneakers,
    description: "Minimalist low-top sneakers in pristine white calfskin leather. The clean lines and tonal stitching embody refined casual luxury.",
    details: ["Calfskin leather", "Rubber sole", "Tonal stitching", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "nude-strappy-sandals",
    name: "Nude Strappy Sandals",
    price: 850,
    category: "Shoes",
    image: productSandals,
    description: "Delicate strappy sandals in nude leather with a crossing ankle strap and slender heel. Designed to elongate and complement every outfit.",
    details: ["Calfskin leather", "Leather sole", "80mm heel", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "leather-riding-boots",
    name: "Leather Riding Boots",
    price: 1400,
    category: "Shoes",
    image: productRidingBoots,
    description: "Knee-high riding boots in smooth black calfskin with a low stacked heel. The equestrian-inspired design offers timeless sophistication.",
    details: ["Calfskin leather", "Stacked heel", "Side zip", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "metallic-ballet-flats",
    name: "Metallic Ballet Flats",
    price: 560,
    category: "Shoes",
    image: productBalletFlats,
    description: "Classic ballet flats reimagined in silver metallic leather. The soft, flexible sole and elegant pointed toe make them an everyday essential.",
    details: ["Metallic leather", "Leather sole", "Padded insole", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  {
    id: "platform-leather-boots",
    name: "Platform Leather Boots",
    price: 1250,
    category: "Shoes",
    image: productRidingBoots,
    description: "Bold platform boots in black polished leather with a chunky lug sole. The 60mm platform adds height while maintaining stability and comfort.",
    details: ["Polished leather", "Lug sole", "60mm platform", "Made in Italy"],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },

  // ── Knitwear (9) ──
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
  {
    id: "cable-knit-sweater",
    name: "Cable-Knit Oversized Sweater",
    price: 1350,
    category: "Knitwear",
    image: productCableKnit,
    description: "A heritage-inspired oversized sweater with intricate cable-knit detailing in cream wool. The mock neck and dropped shoulders add a modern edge.",
    details: ["100% Merino Wool", "Cable-knit pattern", "Mock neck", "Made in Ireland"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "breton-striped-knit",
    name: "Breton Striped Knit",
    price: 780,
    category: "Knitwear",
    image: productBreton,
    description: "A classic Breton-striped top in navy and white cotton knit. The relaxed fit and boat neckline offer effortless French-inspired style.",
    details: ["100% Cotton", "Boat neckline", "Regular fit", "Made in France"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "openweave-knit-top",
    name: "Open-Weave Knit Top",
    price: 920,
    category: "Knitwear",
    image: productOpenweave,
    description: "A delicate open-weave top in beige cotton-linen blend. The airy construction and fitted silhouette make it a refined layering piece for warmer months.",
    details: ["Cotton-linen blend", "Open-weave construction", "Slim fit", "Made in Italy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "camel-vneck-sweater",
    name: "Camel V-Neck Sweater",
    price: 1100,
    category: "Knitwear",
    image: productVneckKnit,
    description: "A refined V-neck sweater in warm camel merino wool. The relaxed fit and deep V create a versatile piece that pairs beautifully with everything.",
    details: ["100% Merino Wool", "V-neckline", "Relaxed fit", "Made in Scotland"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "lavender-cropped-knit",
    name: "Lavender Cropped Knit",
    price: 850,
    category: "Knitwear",
    image: productCroppedKnit,
    description: "A playful cropped knit top in soft lavender with ribbed detailing and short sleeves. The fitted silhouette pairs perfectly with high-waisted trousers.",
    details: ["Wool-cotton blend", "Ribbed construction", "Cropped length", "Made in Italy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "merino-polo-knit",
    name: "Merino Polo Knit",
    price: 960,
    category: "Knitwear",
    image: productVneckKnit,
    description: "A refined polo-collar knit in fine merino wool with a half-zip closure. The clean lines and tailored fit bridge casual and elevated dressing.",
    details: ["100% Merino Wool", "Half-zip closure", "Polo collar", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },

  // ── Trousers (9) ──
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
  {
    id: "olive-cargo-trousers",
    name: "Olive Cargo Trousers",
    price: 1250,
    category: "Trousers",
    image: productCargoTrousers,
    description: "Elevated cargo trousers in olive cotton twill with streamlined flap pockets. The tapered leg and gathered ankle create a polished utility silhouette.",
    details: ["Cotton twill", "Cargo pockets", "Elasticated ankle", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "navy-pinstripe-trousers",
    name: "Navy Pinstripe Trousers",
    price: 1400,
    category: "Trousers",
    image: productPinstripe,
    description: "Sharp slim-fit trousers in navy pinstripe wool. The classic menswear pattern is reimagined with a feminine high-waist and cropped ankle length.",
    details: ["100% Virgin Wool", "Pinstripe pattern", "High waist", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "camel-culottes",
    name: "Camel Wool Culottes",
    price: 1150,
    category: "Trousers",
    image: productCulottes,
    description: "Cropped culottes in warm camel wool with a high waist and wide leg. The midi length and fluid drape create an effortlessly chic silhouette.",
    details: ["100% Wool", "High waist", "Wide leg", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "grey-pleated-trousers",
    name: "Grey Pleated Wide Trousers",
    price: 1300,
    category: "Trousers",
    image: productGreyTrousers,
    description: "Refined wide-leg trousers in grey flannel with single front pleats. The full-length leg creates a commanding, elongated silhouette.",
    details: ["Wool flannel", "Single pleat", "Full length", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "black-tweed-trousers",
    name: "Black Tweed Cropped Trousers",
    price: 1450,
    category: "Trousers",
    image: productTweedTrousers,
    description: "Cropped trousers in textured black tweed with a straight-leg cut. The refined fabric and clean lines bridge casual and formal with ease.",
    details: ["Tweed wool blend", "Cropped length", "Straight leg", "Made in France"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "silk-palazzo-trousers",
    name: "Silk Palazzo Trousers",
    price: 1800,
    category: "Trousers",
    image: productWideTrousers,
    description: "Flowing palazzo trousers in heavyweight silk with dramatic volume. The high-rise waist and sweeping legs create an unmistakably luxurious presence.",
    details: ["100% Silk", "High rise", "Wide palazzo leg", "Made in Italy"],
    sizes: ["XS", "S", "M", "L"],
  },
];

export const categories = ["All", "Outerwear", "Accessories", "Dresses", "Shoes", "Knitwear", "Trousers"];
