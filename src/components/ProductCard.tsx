import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
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
  );
};

export default ProductCard;
