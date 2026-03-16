import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const SearchDropdown = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(products.slice(0, 4));
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 6));
    } else {
      setSearchResults(products.slice(0, 4));
    }
  }, [searchQuery]);

  return (
    <div ref={searchRef} className="relative flex-1 max-w-md hidden md:flex">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search collection..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setSearchOpen(true)}
          className="w-full bg-secondary/50 border border-border rounded-none text-foreground placeholder:text-muted-foreground px-4 py-2 text-sm hover:bg-secondary transition-colors focus:outline-none focus:ring-1 focus:ring-foreground/20"
        />
        <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery("");
              setSearchResults(products.slice(0, 4));
            }}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Search Dropdown */}
      {searchOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border shadow-lg z-50">
          <div className="divide-y divide-border max-h-96 overflow-y-auto">
            {searchResults.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="flex gap-3 p-4 hover:bg-secondary transition-colors group"
              >
                <div className="w-16 h-20 flex-shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-light text-foreground truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {product.category}
                  </p>
                  <p className="text-sm font-display font-light text-foreground mt-2">
                    €{product.price.toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {searchQuery && searchResults.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-muted-foreground text-sm">
                No results found for "{searchQuery}"
              </p>
            </div>
          )}

          {!searchQuery && (
            <div className="p-4 bg-secondary/30 border-t border-border text-center">
              <Link
                to="/collection"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="editorial-link text-xs"
              >
                View All Products
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
