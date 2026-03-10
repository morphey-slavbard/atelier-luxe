import { Link } from "react-router-dom";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link to="/collection" className="editorial-link">Stories</Link>
        </div>

        {/* Logo */}
        <Link to="/" className="editorial-heading text-xl md:text-2xl tracking-[0.3em] font-normal">
          MAISON
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          <Link to="/account" className="text-foreground hover:opacity-60 transition-opacity">
            <User size={18} strokeWidth={1.5} />
          </Link>
          <button className="text-foreground hover:opacity-60 transition-opacity relative">
            <ShoppingBag size={18} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 animate-fade-in">
          <div className="flex flex-col gap-6">
            <Link to="/collection" className="editorial-link" onClick={() => setMenuOpen(false)}>Collection</Link>
            <Link to="/collection" className="editorial-link" onClick={() => setMenuOpen(false)}>Stories</Link>
            <Link to="/account" className="editorial-link" onClick={() => setMenuOpen(false)}>Account</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
