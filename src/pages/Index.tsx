import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-editorial.jpg";
import lookbookImage from "@/assets/editorial-lookbook.jpg";
import rtwImage from "@/assets/editorial-rtw.jpg";
import shoesImage from "@/assets/editorial-shoes.jpg";
import wideImage from "@/assets/editorial-wide.jpg";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featured = products.slice(0, 4);
  const dresses = products.filter((p) => p.category === "Dresses").slice(0, 3);
  const shoes = products.filter((p) => p.category === "Shoes").slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Spring Summer 2026 Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 md:pb-32 text-primary-foreground">
          <p className="editorial-subheading text-primary-foreground mb-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Spring Summer 2026
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.15em] uppercase animate-fade-up" style={{ animationDelay: '0.4s' }}>
            The New Chapter
          </h1>
          <Link
            to="/collection"
            className="mt-8 font-display text-xs tracking-[0.3em] uppercase border-b border-primary-foreground pb-1 hover:opacity-70 transition-opacity animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            Discover the Collection
          </Link>
        </div>
      </section>

      {/* Editorial Text */}
      <section className="editorial-container py-24 md:py-32 text-center">
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed max-w-3xl mx-auto text-foreground">
          A dialogue between heritage and modernity. Each piece is a meditation on form, 
          crafted with an unwavering commitment to excellence.
        </p>
      </section>

      {/* Featured Products */}
      <section className="editorial-container pb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="editorial-heading text-lg">Selected Pieces</h2>
          <Link to="/collection" className="editorial-link">View All</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Ready-to-Wear & Shoes — Two-Split Block */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Ready-to-Wear */}
        <Link to="/collection" className="relative h-[60vh] md:h-[85vh] overflow-hidden group">
          <img
            src={rtwImage}
            alt="Ready-to-Wear Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/25" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 text-primary-foreground text-center px-6">
            <p className="editorial-subheading text-primary-foreground mb-2">Collection</p>
            <h2 className="font-display text-2xl md:text-4xl font-light tracking-[0.15em] uppercase mb-4">
              Ready-to-Wear
            </h2>
            <span className="font-display text-xs tracking-[0.3em] uppercase border-b border-primary-foreground pb-1 group-hover:opacity-70 transition-opacity">
              Explore
            </span>
          </div>
        </Link>

        {/* Shoes */}
        <Link to="/collection" className="relative h-[60vh] md:h-[85vh] overflow-hidden group">
          <img
            src={shoesImage}
            alt="Shoes Collection"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 text-primary-foreground text-center px-6">
            <p className="editorial-subheading text-primary-foreground mb-2">Collection</p>
            <h2 className="font-display text-2xl md:text-4xl font-light tracking-[0.15em] uppercase mb-4">
              Shoes
            </h2>
            <span className="font-display text-xs tracking-[0.3em] uppercase border-b border-primary-foreground pb-1 group-hover:opacity-70 transition-opacity">
              Explore
            </span>
          </div>
        </Link>
      </section>

      {/* Brand Statement */}
      <section className="editorial-container py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="editorial-subheading mb-4">The Maison</p>
            <h2 className="font-display text-3xl md:text-4xl font-light leading-snug text-foreground mb-6">
              Where tradition meets the contemporary spirit
            </h2>
            <p className="editorial-body text-lg leading-relaxed">
              Founded on a belief that true luxury lies in the details, Maison creates pieces 
              that honour the art of dressmaking while embracing the energy of now. Every stitch 
              carries the weight of intention, every silhouette a story of restraint and desire.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {dresses.slice(0, 2).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wide Editorial Banner */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={wideImage}
          alt="Atelier — The Art of Craft"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
          <p className="editorial-subheading text-primary-foreground mb-3">Savoir Faire</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] uppercase">
            The Art of Craft
          </h2>
        </div>
      </section>

      {/* Shoes Highlights */}
      <section className="editorial-container py-24 md:py-32">
        <div className="flex items-center justify-between mb-12">
          <h2 className="editorial-heading text-lg">Shoes</h2>
          <Link to="/collection" className="editorial-link">View All</Link>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {shoes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Lookbook Banner */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src={lookbookImage}
          alt="Autumn Winter Lookbook"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground text-center px-6">
          <p className="editorial-subheading text-primary-foreground mb-3">The Lookbook</p>
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-[0.15em] uppercase mb-6">
            Quiet Luxury
          </h2>
          <span className="font-display text-xs tracking-[0.3em] uppercase border-b border-primary-foreground pb-1 cursor-pointer hover:opacity-70 transition-opacity">
            Explore
          </span>
        </div>
      </section>

      {/* Newsletter */}
      <section className="editorial-container py-24 md:py-32 text-center">
        <p className="editorial-subheading mb-4">Stay Informed</p>
        <h2 className="font-display text-2xl md:text-3xl font-light tracking-wide mb-8 text-foreground">
          Receive our latest stories and collections
        </h2>
        <div className="max-w-md mx-auto flex border-b border-foreground">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-transparent font-display text-sm py-3 outline-none placeholder:text-muted-foreground text-foreground"
          />
          <button className="font-display text-xs tracking-[0.2em] uppercase py-3 px-4 text-foreground hover:opacity-60 transition-opacity">
            Subscribe
          </button>
        </div>
      </section>
    </main>
  );
};

export default Index;
