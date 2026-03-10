import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="editorial-container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl tracking-[0.3em] font-light uppercase mb-6">MAISON</h3>
            <p className="font-display text-sm font-light leading-relaxed opacity-70">
              Where timeless craft meets contemporary vision.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-6 opacity-50">Collections</h4>
            <div className="flex flex-col gap-3">
              <Link to="/collection" className="font-display text-sm font-light opacity-70 hover:opacity-100 transition-opacity">Ready-to-Wear</Link>
              <Link to="/collection" className="font-display text-sm font-light opacity-70 hover:opacity-100 transition-opacity">Accessories</Link>
              <Link to="/collection" className="font-display text-sm font-light opacity-70 hover:opacity-100 transition-opacity">Shoes</Link>
            </div>
          </div>

          {/* House */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-6 opacity-50">Maison</h4>
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm font-light opacity-70">Our Heritage</span>
              <span className="font-display text-sm font-light opacity-70">Ateliers</span>
              <span className="font-display text-sm font-light opacity-70">Sustainability</span>
            </div>
          </div>

          {/* Client Services */}
          <div>
            <h4 className="font-display text-xs tracking-[0.2em] uppercase mb-6 opacity-50">Client Services</h4>
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm font-light opacity-70">Contact Us</span>
              <span className="font-display text-sm font-light opacity-70">Shipping & Returns</span>
              <span className="font-display text-sm font-light opacity-70">Care Guide</span>
            </div>
          </div>
        </div>

        <div className="editorial-divider mt-16 mb-8 opacity-20" />
        <p className="font-display text-xs tracking-widest opacity-40 text-center">
          © 2026 MAISON. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
