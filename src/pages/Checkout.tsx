import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Shield, Truck, CreditCard, ChevronLeft } from "lucide-react";

const Checkout = () => {
  const { items, getTotalPrice, updateItemOptions, clearCart } = useCart();
  const [step, setStep] = useState<"review" | "shipping" | "payment" | "success">("review");
  const [selectedShipping, setSelectedShipping] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "France",
  });

  const subtotal = getTotalPrice();
  const shippingCosts: Record<string, number> = {
    standard: 25,
    express: 50,
    international: 100,
  };
  const shipping = selectedShipping === "free" || subtotal > 250 ? 0 : shippingCosts[selectedShipping] || 25;
  const tax = subtotal * 0.2;
  const total = subtotal + shipping + tax;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStepIndicator = () => (
    <div className="grid grid-cols-3 gap-4 mb-12 md:mb-16">
      {[
        { step: "review", label: "Review" },
        { step: "shipping", label: "Shipping" },
        { step: "payment", label: "Payment" },
      ].map(({ step: s, label }) => (
        <div
          key={s}
          className={`text-center py-4 border-2 transition-colors ${
            step === s
              ? "border-foreground bg-foreground/5"
              : step === "success" || (step === "shipping" && s === "review") || (step === "payment" && (s === "review" || s === "shipping"))
              ? "border-foreground/30"
              : "border-border"
          }`}
        >
          <p className={`font-display text-sm font-light ${step === s ? "text-foreground" : "text-muted-foreground"}`}>
            {label}
          </p>
        </div>
      ))}
    </div>
  );

  if (step === "success") {
    return (
      <main className="pt-20 md:pt-24">
        <section className="editorial-container py-24 md:py-32 text-center min-h-screen flex flex-col items-center justify-center">
          <div className="mb-8">
            <Shield size={48} className="mx-auto text-foreground mb-6" />
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-foreground mb-4">
              Order Confirmed
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-base">
              Thank you for your purchase. A confirmation email has been sent to {formData.email}
            </p>
          </div>

          <div className="bg-secondary/30 border border-border p-8 md:p-12 rounded-none max-w-md w-full mb-12">
            <p className="text-muted-foreground text-sm mb-2">Order Number</p>
            <p className="font-display text-2xl font-light text-foreground mb-6">
              ORD-2026-{Math.floor(Math.random() * 10000).toString().padStart(4, "0")}
            </p>
            <p className="text-muted-foreground text-sm mb-2">Total Amount</p>
            <p className="font-display text-3xl font-light text-foreground">
              €{total.toLocaleString()}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
            <Link
              to="/"
              className="flex-1 bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-3 text-center hover:opacity-80 transition-opacity"
            >
              Return Home
            </Link>
            <Link
              to="/collection"
              className="flex-1 bg-secondary text-foreground font-display text-sm tracking-[0.3em] uppercase py-3 text-center hover:opacity-80 transition-opacity"
            >
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="pt-20 md:pt-24">
        <section className="editorial-container py-24 text-center">
          <h1 className="font-display text-3xl font-light text-foreground mb-4">Checkout</h1>
          <p className="text-muted-foreground mb-8">Your cart is empty</p>
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
        <p className="editorial-subheading mb-3">Secure Checkout</p>
        <h1 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-foreground mb-8">
          {step === "review" && "Order Review"}
          {step === "shipping" && "Shipping Method"}
          {step === "payment" && "Billing & Payment"}
        </h1>
      </section>

      <div className="editorial-container pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {renderStepIndicator()}

          {/* STEP 1: REVIEW */}
          {step === "review" && (
            <div className="space-y-12">
              {/* Order Items */}
              <div>
                <h2 className="font-display text-lg font-light text-foreground mb-6">
                  Order Items
                </h2>
                <div className="border-t border-border pt-6 space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-6 pd-6 border-b border-border pb-6"
                    >
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-display text-base font-light text-foreground">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Qty: {item.quantity}
                          {item.size && ` • Size: ${item.size}`}
                        </p>
                        <p className="font-display text-base font-light text-foreground mt-3">
                          €{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h2 className="font-display text-lg font-light text-foreground mb-6">
                  Add Extra Options
                </h2>
                <div className="space-y-4 bg-secondary/30 border border-border p-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="space-y-3">
                      <p className="font-display text-sm font-light text-foreground">
                        {item.product.name}
                      </p>
                      <label className="flex items-center gap-3 py-2">
                        <input
                          type="checkbox"
                          checked={item.packaging || false}
                          onChange={(e) =>
                            updateItemOptions(item.product.id, {
                              packaging: e.target.checked,
                            })
                          }
                          className="w-4 h-4 border border-foreground cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground">
                          Gift wrapping (+€5)
                        </span>
                      </label>
                      <label className="flex items-center gap-3 py-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border border-foreground cursor-pointer"
                        />
                        <span className="text-sm text-muted-foreground">
                          Add gift message
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep("shipping")}
                className="w-full bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity"
              >
                Continue to Shipping
              </button>
            </div>
          )}

          {/* STEP 2: SHIPPING */}
          {step === "shipping" && (
            <div className="space-y-12">
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-lg font-light text-foreground mb-6">
                  Delivery Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-secondary/30 p-6 border border-border">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="col-span-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="col-span-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="col-span-1 md:col-span-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="col-span-1 md:col-span-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleFormChange}
                    className="col-span-1 md:col-span-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleFormChange}
                    className="col-span-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleFormChange}
                    className="col-span-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleFormChange}
                    className="col-span-1 md:col-span-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                  >
                    <option>France</option>
                    <option>Germany</option>
                    <option>Italy</option>
                    <option>Spain</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>

              {/* Shipping Methods */}
              <div>
                <h2 className="font-display text-lg font-light text-foreground mb-6">
                  Shipping Method
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      id: "standard",
                      label: "Standard Shipping",
                      description: "5-7 business days",
                      cost: subtotal > 250 ? "Free" : "€25",
                    },
                    {
                      id: "express",
                      label: "Express Shipping",
                      description: "2-3 business days",
                      cost: "€50",
                    },
                    {
                      id: "international",
                      label: "International Shipping",
                      description: "7-10 business days",
                      cost: "€100",
                    },
                  ].map(({ id, label, description, cost }) => (
                    <label
                      key={id}
                      className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                        selectedShipping === id
                          ? "border-foreground bg-foreground/5"
                          : "border-border hover:border-foreground/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={id}
                        checked={selectedShipping === id}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="font-display text-sm font-light text-foreground">
                          {label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {description}
                        </p>
                      </div>
                      <p className="font-display text-sm font-light text-foreground">
                        {cost}
                      </p>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep("review")}
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-display text-sm tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
                <button
                  onClick={() => setStep("payment")}
                  className="flex-1 bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity"
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT */}
          {step === "payment" && (
            <div className="space-y-12">
              {/* Trust Badges */}
              <div className="bg-green-50 border border-green-200 p-6 rounded-none">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={20} className="text-green-700" />
                  <p className="font-display text-sm font-light text-green-900">
                    100% Secure Payment
                  </p>
                </div>
                <p className="text-xs text-green-800">
                  Your transaction is protected by Mastercard SecureCode™. We never store your full credit card details.
                </p>
              </div>

              {/* Payment Methods */}
              <div>
                <h2 className="font-display text-lg font-light text-foreground mb-6">
                  Payment Method
                </h2>
                <div className="space-y-3 mb-8">
                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "card"
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <svg className="w-5 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                    </svg>
                    <span className="text-sm">Credit Card</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "applepay"
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="applepay"
                      checked={paymentMethod === "applepay"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm">Apple Pay</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "googlepay"
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="googlepay"
                      checked={paymentMethod === "googlepay"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm">Google Pay</span>
                  </label>

                  <label
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      paymentMethod === "paypal"
                        ? "border-foreground bg-foreground/5"
                        : "border-border hover:border-foreground/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-sm">PayPal</span>
                  </label>
                </div>

                {/* Card Details (if card selected) */}
                {paymentMethod === "card" && (
                  <div className="bg-secondary/30 p-6 border border-border space-y-4">
                    <input
                      type="text"
                      placeholder="Cardholder Name"
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      maxLength={19}
                      className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                    />
                    <div className="grid grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        className="col-span-2 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        maxLength={3}
                        className="col-span-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Billing Address */}
              <div>
                <label className="flex items-center gap-3 mb-4">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm text-muted-foreground">
                    Same as delivery address
                  </span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep("shipping")}
                  className="flex-1 flex items-center justify-center gap-2 bg-secondary text-foreground font-display text-sm tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity"
                >
                  <ChevronLeft size={16} />
                  Back
                </button>
                <button
                  onClick={() => setStep("success")}
                  className="flex-1 bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-4 hover:opacity-80 transition-opacity"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-secondary/30 border border-border p-8">
            <h3 className="font-display text-lg font-light text-foreground mb-6">
              Order Summary
            </h3>

            <div className="space-y-3 mb-6 pb-6 border-b border-border max-h-48 overflow-y-auto">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {item.product.name} x{item.quantity}
                  </span>
                  <span className="font-display">
                    €{(item.product.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-display">€{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-display">
                  {shipping === 0 ? "Free" : `€${shipping}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tax (20%)</span>
                <span className="font-display">€{tax.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-light">Total</span>
              <span className="font-display text-2xl font-light">
                €{total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
