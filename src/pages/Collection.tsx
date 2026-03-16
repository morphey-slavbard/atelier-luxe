import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Collection = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    setActiveCategory("All");
  }, [searchQuery]);

  const filtered = products.filter((product) => {
    const categoryMatch = activeCategory === "All" || product.category === activeCategory;
    const searchMatch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="editorial-container py-12 md:py-16 text-center">
        <p className="editorial-subheading mb-3">Spring Summer 2026</p>
        <h1 className="font-display text-3xl md:text-5xl font-light tracking-[0.15em] uppercase text-foreground">
          {searchQuery ? `Search Results for "${searchQuery}"` : "The Collection"}
        </h1>
        {searchQuery && (
          <p className="text-muted-foreground mt-4">
            {filtered.length} items found
          </p>
        )}
      </section>

      {/* Filter */}
      <div className="editorial-container pb-8">
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto pb-4 border-b border-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-display text-xs tracking-[0.2em] uppercase whitespace-nowrap pb-2 transition-opacity ${
                activeCategory === cat
                  ? "text-foreground border-b border-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <section className="editorial-container pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-display text-lg font-light text-foreground mb-4">
              No products found
            </p>
            <p className="text-muted-foreground text-sm">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Collection;
