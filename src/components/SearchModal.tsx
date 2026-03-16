import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(products.slice(0, 8));
  const modalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results.slice(0, 8));
    } else {
      setSearchResults(products.slice(0, 8));
    }
  }, [searchQuery]);

  if (!isOpen) return null;

  const handleViewAll = () => {
    navigate(`/collection?search=${encodeURIComponent(searchQuery)}`);
    onClose();
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleViewAll();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="absolute top-20 right-6 md:right-12 w-80 md:w-96 bg-background border border-border shadow-xl rounded-none max-h-[600px] overflow-hidden flex flex-col"
      >
        {/* Search Input */}
        <div className="p-4 border-b border-border sticky top-0 bg-background">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="w-full bg-secondary/50 border border-border rounded-none text-foreground placeholder:text-muted-foreground pl-9 pr-3 py-2.5 text-sm hover:bg-secondary transition-colors focus:outline-none focus:ring-1 focus:ring-foreground/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Results/Recommendations */}
        <div className="overflow-y-auto flex-1">
          {searchResults.length > 0 ? (
            <div className="divide-y divide-border">
              <div className="px-4 py-3">
                <p className="text-xs text-muted-foreground font-display tracking-wide uppercase mb-3">
                  {searchQuery ? "Search Results" : "Trending"}
                </p>
              </div>

              {searchResults.map((product) => (
                <button
                  key={product.id}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    onClose();
                    setSearchQuery("");
                  }}
                  className="w-full flex gap-3 p-4 hover:bg-secondary transition-colors text-left group"
                >
                  <div className="w-14 h-16 flex-shrink-0 overflow-hidden bg-secondary">
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
                </button>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <p className="text-muted-foreground text-sm">
                No results found for "{searchQuery}"
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {searchResults.length > 0 && (
          <div className="p-4 border-t border-border sticky bottom-0 bg-background">
            <button
              onClick={handleViewAll}
              className="w-full text-center py-2.5 bg-foreground/5 hover:bg-foreground/10 transition-colors font-display text-sm font-light text-foreground"
            >
              View All Results {searchQuery && `for "${searchQuery}"`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
