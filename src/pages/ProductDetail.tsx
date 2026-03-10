import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  if (!product) {
    return (
      <main className="pt-32 editorial-container text-center">
        <h1 className="editorial-heading text-2xl mb-4">Product not found</h1>
        <Link to="/collection" className="editorial-link">Back to Collection</Link>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="editorial-container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="editorial-subheading hover:text-foreground transition-colors">Home</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <Link to="/collection" className="editorial-subheading hover:text-foreground transition-colors">Collection</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="editorial-subheading text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center py-4 md:py-12">
            <p className="editorial-subheading mb-2">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-4">
              {product.name}
            </h1>
            <p className="font-display text-xl text-foreground mb-8">
              €{product.price.toLocaleString()}
            </p>

            <p className="editorial-body text-sm mb-10 max-w-md">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-8">
              <p className="editorial-subheading mb-4">Select Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-display text-xs tracking-wider min-w-[48px] py-3 px-4 border transition-all ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to bag */}
            <button className="w-full md:max-w-sm bg-foreground text-background font-display text-xs tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity mb-8">
              Add to Bag
            </button>

            {/* Details */}
            <div className="border-t border-border pt-8">
              <p className="editorial-subheading mb-4">Details</p>
              <ul className="space-y-2">
                {product.details.map((detail, i) => (
                  <li key={i} className="font-display text-sm font-light text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="editorial-container py-24 border-t border-border mt-16">
        <h2 className="editorial-heading text-lg mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.filter((p) => p.id !== product.id).slice(0, 4).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="editorial-card block">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.name} className="editorial-card-image" loading="lazy" />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-sm font-light tracking-wide text-foreground">{p.name}</h3>
                <p className="font-display text-xs text-muted-foreground mt-1">€{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
