import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { savedItem, setSavedItem } = useWishlist();
  const isSaved = savedItem?.id === product.id;

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSavedItem(isSaved ? null : product);
  };

  return (
    <div className="relative group">
      <Link to={`/product/${product.id}`} className="editorial-card block">
        <div className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="editorial-card-image"
            loading="lazy"
          />
        </div>
        <div className="pt-4 pb-2">
          <p className="editorial-subheading mb-1">{product.category}</p>
          <h3 className="font-display text-base font-light tracking-wide text-foreground">{product.name}</h3>
          <p className="font-display text-sm text-muted-foreground mt-1">
            €{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
      <button
        onClick={handleSaveClick}
        className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm p-2 rounded-none border border-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
        aria-label={isSaved ? "Remove from saved" : "Save item"}
      >
        <Heart
          size={18}
          strokeWidth={1.5}
          className={isSaved ? "text-foreground fill-foreground" : "text-foreground"}
        />
      </button>
    </div>
  );
};

export default ProductCard;
