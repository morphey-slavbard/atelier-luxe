import { Link } from "react-router-dom";
import { User, ShoppingBag, Menu, X, Search, Heart } from "lucide-react";
import { useState } from "react";
import SearchModal from "@/components/SearchModal";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { items } = useCart();
  const { savedItem } = useWishlist();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="editorial-container flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Left nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/collection" className="editorial-link">Collection</Link>
          <Link to="/stories" className="editorial-link">Stories</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="editorial-heading text-xl md:text-2xl tracking-[0.3em] font-normal">
          MAISON
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground hover:opacity-60 transition-opacity"
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link to="/wishlist" className="text-foreground hover:opacity-60 transition-opacity relative">
            <Heart size={18} strokeWidth={1.5} className={savedItem ? "fill-foreground" : ""} />
            {savedItem && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs font-light rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            )}
          </Link>
          <Link to="/account" className="text-foreground hover:opacity-60 transition-opacity">
            <User size={18} strokeWidth={1.5} />
          </Link>
          <Link to="/basket" className="text-foreground hover:opacity-60 transition-opacity relative">
            <ShoppingBag size={18} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs font-light rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 animate-fade-in">
          <div className="flex flex-col gap-6">
            <Link to="/collection" className="editorial-link" onClick={() => setMenuOpen(false)}>Collection</Link>
            <Link to="/stories" className="editorial-link" onClick={() => setMenuOpen(false)}>Stories</Link>
            <Link to="/wishlist" className="editorial-link" onClick={() => setMenuOpen(false)}>Wishlist</Link>
            <Link to="/basket" className="editorial-link" onClick={() => setMenuOpen(false)}>Basket</Link>
            <Link to="/account" className="editorial-link" onClick={() => setMenuOpen(false)}>Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
