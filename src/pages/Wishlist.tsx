import { Link } from "react-router-dom";
import { Heart, Trash2 } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  const { savedItem, setSavedItem } = useWishlist();

  // Get complementary products based on the saved item's category
  const getComplementaryProducts = () => {
    if (!savedItem) return products.slice(0, 3);

    // Define complementary categories
    const complementaryMap: Record<string, string[]> = {
      "Outerwear": ["Accessories", "Shoes"],
      "Dresses": ["Shoes", "Accessories", "Accessories"],
      "Accessories": ["Outerwear", "Dresses", "Shoes"],
      "Shoes": ["Dresses", "Accessories", "Outerwear"],
    };

    const complementaryCategories = complementaryMap[savedItem.category] || ["Accessories", "Shoes"];
    
    // Get products from complementary categories
    const complementary = products.filter(
      (product) =>
        product.id !== savedItem.id &&
        complementaryCategories.includes(product.category)
    );

    return complementary.slice(0, 3);
  };

  const recommendations = getComplementaryProducts();

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="editorial-container py-12 md:py-16 text-center">
        <p className="editorial-subheading mb-3">Your Collection</p>
        <h1 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-foreground">
          Saved Item
        </h1>
      </section>

      {savedItem ? (
        <div className="editorial-container pb-24">
          {/* Saved Item */}
          <section className="mb-16">
            <h2 className="editorial-heading text-lg mb-6">Your Selection</h2>
            <div className="flex gap-6 md:gap-8 items-start">
              {/* Product Image */}
              <div className="relative group flex-shrink-0 w-full md:w-1/3">
                <div className="overflow-hidden aspect-[3/4] bg-secondary">
                  <img
                    src={savedItem.image}
                    alt={savedItem.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <button
                  onClick={() => setSavedItem(null)}
                  className="absolute top-2 right-2 z-10 bg-background/90 backdrop-blur-sm p-1.5 rounded-none border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                >
                  <Trash2 size={14} strokeWidth={1} />
                </button>
              </div>

              {/* Item Info */}
              <div className="flex flex-col justify-start flex-1 md:pt-6">
                <p className="editorial-subheading mb-2 text-xs">{savedItem.category}</p>
                <h3 className="font-display text-lg md:text-xl font-light tracking-wide text-foreground mb-2">
                  {savedItem.name}
                </h3>
                <p className="font-display text-base text-foreground mb-3">
                  €{savedItem.price.toLocaleString()}
                </p>
                <p className="text-xs md:text-sm leading-relaxed mb-4 text-muted-foreground line-clamp-3">
                  {savedItem.description}
                </p>
                <Link
                  to={`/product/${savedItem.id}`}
                  className="inline-block bg-foreground text-background font-display text-xs tracking-[0.3em] uppercase py-2 px-6 hover:opacity-80 transition-opacity w-fit"
                >
                  View Details
                </Link>
              </div>
            </div>
          </section>

          {/* Complementary Products */}
          {recommendations.length > 0 && (
            <section>
              <h2 className="editorial-heading text-lg mb-6">
                Complementary Items to Style With
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                {recommendations.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      ) : (
        <section className="editorial-container py-24 text-center">
          <div className="mb-8">
            <Heart size={48} className="mx-auto text-muted-foreground mb-6" strokeWidth={1} />
            <p className="text-muted-foreground mb-8">You haven't saved any items yet</p>
          </div>
          <p className="text-sm text-muted-foreground mb-8">
            Click the heart icon on any product to save it and discover complementary pieces
          </p>
          <Link
            to="/collection"
            className="inline-block bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-3 px-8 hover:opacity-80 transition-opacity"
          >
            Browse Collection
          </Link>
        </section>
      )}
    </main>
  );
};

export default Wishlist;
