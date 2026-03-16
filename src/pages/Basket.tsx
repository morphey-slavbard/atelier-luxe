import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const Basket = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 250 ? 0 : 25;
  const tax = subtotal * 0.2;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <main className="pt-20 md:pt-24">
        <section className="editorial-container py-16 md:py-24 text-center">
          <p className="editorial-subheading mb-3">Shopping Bag</p>
          <h1 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-foreground mb-8">
            Your Basket
          </h1>
          <p className="text-muted-foreground mb-8">Your basket is currently empty</p>
          <Link
            to="/collection"
            className="inline-block bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-3 px-8 hover:opacity-80 transition-opacity"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <section className="editorial-container py-12 md:py-16 text-center">
        <p className="editorial-subheading mb-3">Shopping Bag</p>
        <h1 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-foreground">
          Your Basket
        </h1>
      </section>

      <div className="editorial-container pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="border-t border-border pt-8">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="grid grid-cols-3 gap-6 md:gap-8 py-8 border-b border-border"
              >
                {/* Product Image */}
                <div className="col-span-1">
                  <Link to={`/product/${item.product.id}`}>
                    <div className="aspect-[3/4] overflow-hidden bg-secondary">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  </Link>
                </div>

                {/* Product Info & Controls */}
                <div className="col-span-2 flex flex-col justify-between">
                  <div>
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-display text-base md:text-lg font-light text-foreground hover:opacity-70 transition-opacity"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.product.category}
                    </p>
                    {item.size && (
                      <p className="text-sm text-muted-foreground mt-1">
                        Size: {item.size}
                      </p>
                    )}
                    <p className="font-display text-lg font-light text-foreground mt-3">
                      €{item.product.price.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls & Remove */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4 border border-border">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-display text-sm font-light w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Trash2 size={18} strokeWidth={1} />
                    </button>

                    <p className="font-display text-sm font-light text-foreground min-w-[60px] text-right">
                      €{(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-secondary/30 border border-border p-8">
            <h3 className="font-display text-lg font-light text-foreground mb-8">
              Order Summary
            </h3>

            <div className="space-y-4 mb-8 pb-6 border-b border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display">€{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  Shipping {subtotal > 250 ? "(Free)" : ""}
                </span>
                <span className="font-display">
                  {shipping === 0 ? "Free" : `€${shipping}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax (20%)</span>
                <span className="font-display">€{tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <span className="font-display text-lg font-light">Total</span>
              <span className="font-display text-2xl font-light">
                €{total.toLocaleString()}
              </span>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-4 text-center hover:opacity-80 transition-opacity mb-6"
            >
              Proceed to Checkout
            </Link>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-3">Or pay with</p>
              <button className="w-full flex items-center justify-center gap-2 py-3 border border-border hover:bg-secondary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.5C6.22 22.5 1.5 17.78 1.5 12S6.22 1.5 12 1.5 22.5 6.22 22.5 12 17.78 22.5 12 22.5z" />
                </svg>
                <span className="text-sm">Apple Pay</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 border border-border hover:bg-secondary transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.5C6.22 22.5 1.5 17.78 1.5 12S6.22 1.5 12 1.5 22.5 6.22 22.5 12 17.78 22.5 12 22.5z" />
                </svg>
                <span className="text-sm">Google Pay</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3 border border-border hover:bg-secondary transition-colors">
                <svg className="w-5 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                </svg>
                <span className="text-sm">PayPal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Basket;
