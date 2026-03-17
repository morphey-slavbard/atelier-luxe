import { Link } from "react-router-dom";
import editorialWide from "@/assets/editorial-wide.jpg";
import editorialLookbook from "@/assets/editorial-lookbook.jpg";
import editorialRTW from "@/assets/editorial-rtw.jpg";
import editorialShoes from "@/assets/editorial-shoes.jpg";
const Story = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="w-full h-[60vh] md:h-[70vh] overflow-hidden relative">
        <img
          src={editorialWide}
          alt="Atelier Luxe Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="editorial-container pb-12 md:pb-16">
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
              The Art of Refinement
            </h1>
            <p className="font-display text-xl text-white/90">
              A legacy of elegance spanning over 50 years
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="editorial-container py-8 border-b border-border">
        <div className="flex items-center gap-2">
          <Link to="/" className="editorial-subheading hover:text-foreground transition-colors">Home</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="editorial-subheading text-foreground">Our Story</span>
        </div>
      </div>

      {/* Story Section 1 */}
      <section className="editorial-container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="editorial-subheading mb-4 text-sm">ORIGINS</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
            Founded on a Vision
          </h2>
          <p className="editorial-body text-base leading-relaxed mb-6">
            In 1972, Atelier Luxe was founded by the visionary designer Margot Beaumont, who believed that true luxury lies in the art of understatement. What began as a small atelier in the heart of Paris has blossomed into an internationally recognized symbol of refined elegance.
          </p>
          <p className="editorial-body text-base leading-relaxed text-muted-foreground">
            Margot's philosophy was simple yet profound: every piece should tell a story of craftsmanship, materials sourced from the finest suppliers, and an unwavering commitment to timeless design. She refused to follow trends, instead creating pieces that would remain relevant for generations.
          </p>
        </div>
        <div className="overflow-hidden aspect-[4/5]">
          <img
            src={editorialLookbook}
            alt="Atelier Luxe Founder"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="editorial-container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="overflow-hidden aspect-[4/5] order-2 md:order-1">
          <img
            src={editorialRTW}
            alt="Atelier Luxe Heritage"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="editorial-subheading mb-4 text-sm">THE GOLDEN ERA</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
            Recognition & Refinement
          </h2>
          <p className="editorial-body text-base leading-relaxed mb-6">
            Throughout the 1980s and 1990s, Atelier Luxe gained recognition among discerning clientele who appreciated the brand's uncompromising approach to quality. Each season brought meticulously curated collections that showcased Italian craftsmanship, French elegance, and innovative design.
          </p>
          <p className="editorial-body text-base leading-relaxed text-muted-foreground">
            The brand became synonymous with the modern woman who values substance over sensation—pieces that transcend fleeting fashion cycles and become treasured staples in one's wardrobe.
          </p>
        </div>
      </section>

      {/* Story Section 3 */}
      <section className="editorial-container py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div>
          <p className="editorial-subheading mb-4 text-sm">GLOBAL EXPANSION</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
            A World Stage
          </h2>
          <p className="editorial-body text-base leading-relaxed mb-6">
            In 2005, Atelier Luxe opened its flagship boutique on the prestigious Champs-Élysées in Paris. This expansion marked a new chapter, establishing a physical presence in the world's most fashionable cities—Milan, New York, Tokyo, and beyond.
          </p>
          <p className="editorial-body text-base leading-relaxed text-muted-foreground">
            Despite international growth, the brand remained faithful to its core values. Each boutique was designed as a sanctuary of elegance, reflecting the Atelier Luxe philosophy of timeless design and exceptional service.
          </p>
        </div>
        <div className="overflow-hidden aspect-[4/5]">
          <img
            src={editorialShoes}
            alt="Atelier Luxe Boutique"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="editorial-container py-16 md:py-24 border-y border-border">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-16 text-center">
          A Timeline of Excellence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Timeline Item 1 */}
          <div className="pb-8 border-b md:border-b-0 md:border-r md:border-border md:pr-8">
            <p className="font-display text-2xl font-light text-foreground mb-3">1972</p>
            <p className="editorial-subheading mb-3">The Beginning</p>
            <p className="editorial-body text-sm text-muted-foreground">
              Margot Beaumont establishes Atelier Luxe in Paris, introducing a revolutionary approach to luxury fashion.
            </p>
          </div>

          {/* Timeline Item 2 */}
          <div className="pb-8 border-b md:border-b-0 md:border-r md:border-border md:pr-8">
            <p className="font-display text-2xl font-light text-foreground mb-3">1985</p>
            <p className="editorial-subheading mb-3">International Recognition</p>
            <p className="editorial-body text-sm text-muted-foreground">
              Atelier Luxe gains international acclaim when featured in major fashion publications worldwide.
            </p>
          </div>

          {/* Timeline Item 3 */}
          <div>
            <p className="font-display text-2xl font-light text-foreground mb-3">2005</p>
            <p className="editorial-subheading mb-3">Global Presence</p>
            <p className="editorial-body text-sm text-muted-foreground">
              Flagship boutiques open in Paris, Milan, and New York, establishing a truly global presence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Timeline Item 4 */}
          <div className="pb-8 border-b md:border-b-0 md:border-r md:border-border md:pr-8">
            <p className="font-display text-2xl font-light text-foreground mb-3">2015</p>
            <p className="editorial-subheading mb-3">Digital Evolution</p>
            <p className="editorial-body text-sm text-muted-foreground">
              Atelier Luxe embraces modern retail, launching an e-commerce platform while maintaining exclusivity.
            </p>
          </div>

          {/* Timeline Item 5 */}
          <div className="pb-8 border-b md:border-b-0 md:border-r md:border-border md:pr-8">
            <p className="font-display text-2xl font-light text-foreground mb-3">2020</p>
            <p className="editorial-subheading mb-3">Sustainability Focus</p>
            <p className="editorial-body text-sm text-muted-foreground">
              The brand commits to sustainable practices, introducing eco-conscious collections and artisanal partnerships.
            </p>
          </div>

          {/* Timeline Item 6 */}
          <div>
            <p className="font-display text-2xl font-light text-foreground mb-3">2026</p>
            <p className="editorial-subheading mb-3">Present Day</p>
            <p className="editorial-body text-sm text-muted-foreground">
              Atelier Luxe continues to define refined elegance, serving a global clientele who appreciates timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="editorial-container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="editorial-subheading mb-4 text-sm">OUR PHILOSOPHY</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-foreground mb-8">
            Timeless Design, Exceptional Craft
          </h2>
          <p className="editorial-body text-base leading-relaxed mb-8 text-muted-foreground">
            At Atelier Luxe, we believe luxury is not about excess—it's about intention. Every piece is designed to last a lifetime, to be passed down through generations, to tell stories of moments lived. We choose materials that improve with age, partner with artisans who take pride in their work, and create collections that transcend seasonal trends.
          </p>
          <p className="editorial-body text-base leading-relaxed text-muted-foreground">
            In a world of constant change, Atelier Luxe stands as a beacon of stability, elegance, and refined taste. We invite you to become part of our story—a story written by those who understand that true luxury is timeless.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="editorial-container py-16 md:py-24 border-t border-border">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light tracking-wide text-foreground mb-8">
            Experience Our Collections
          </h2>
          <Link 
            to="/collection"
            className="inline-block bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-4 px-12 hover:opacity-80 transition-opacity"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Story;
