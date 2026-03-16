import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="pt-32 editorial-container text-center">
        <h1 className="editorial-heading text-2xl mb-4">Product not found</h1>
        <Link to="/collection" className="editorial-link">Back to Collection</Link>
      </main>
    );
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="editorial-container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link to="/" className="editorial-subheading hover:text-foreground transition-colors">Home</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <Link to="/collection" className="editorial-subheading hover:text-foreground transition-colors">Collection</Link>
          <span className="text-muted-foreground text-xs">/</span>
          <span className="editorial-subheading text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center py-4 md:py-12">
            <p className="editorial-subheading mb-2 text-base">{product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
              {product.name}
            </h1>
            <p className="font-display text-2xl text-foreground mb-10">
              €{product.price.toLocaleString()}
            </p>

            <p className="editorial-body text-base mb-12 max-w-md leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-10">
              <p className="editorial-subheading mb-6 text-base">Select Size</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`font-display text-sm tracking-wider min-w-[52px] py-4 px-5 border transition-all ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to basket */}
            <button
              onClick={() => {
                if (!selectedSize) {
                  toast({
                    title: "Please select a size",
                    description: "Choose a size before adding to basket",
                  });
                  return;
                }
                addToCart(product, 1, selectedSize);
                toast({
                  title: "Added to Basket",
                  description: `${product.name} has been added.`,
                  onClick: () => navigate("/basket"),
                });
              }}
              className="w-full md:max-w-sm bg-foreground text-background font-display text-sm tracking-[0.3em] uppercase py-5 hover:opacity-80 transition-opacity mb-6"
            >
              Add to Basket
            </button>

            {/* Express Payment Options */}
            <div className="mb-10">
              <p className="editorial-subheading text-sm mb-4">Or pay with</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2 h-12 px-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-sm">Apple Pay</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 h-12 px-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className="text-sm">Google Pay</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 h-12 px-4">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  <span className="text-sm">PayPal</span>
                </Button>
              </div>
            </div>

            {/* Product Information Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="size-fit">Size & Fit</TabsTrigger>
                <TabsTrigger value="availability">In-Store</TabsTrigger>
                <TabsTrigger value="delivery">Delivery</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-8">
                <div className="space-y-6">
                  <p className="editorial-body text-base leading-relaxed">
                    {product.extendedDescription}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="editorial-subheading mb-6 text-base">Details</p>
                    <ul className="space-y-3">
                      {product.details.map((detail, i) => (
                        <li key={i} className="font-display text-base font-light text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="size-fit" className="mt-8">
                <div className="space-y-6">
                  <p className="editorial-body text-base leading-relaxed">
                    {product.sizeFitInfo}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="editorial-subheading mb-6 text-base">Size Guide</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-3 font-display">Size</th>
                            <th className="text-left py-3 px-3 font-display">Bust (cm)</th>
                            <th className="text-left py-3 px-3 font-display">Waist (cm)</th>
                            <th className="text-left py-3 px-3 font-display">Hips (cm)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="py-3 px-3">XS</td>
                            <td className="py-3 px-3">78-82</td>
                            <td className="py-3 px-3">60-64</td>
                            <td className="py-3 px-3">86-90</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-3">S</td>
                            <td className="py-3 px-3">82-86</td>
                            <td className="py-3 px-3">64-68</td>
                            <td className="py-3 px-3">90-94</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-3">M</td>
                            <td className="py-3 px-3">86-90</td>
                            <td className="py-3 px-3">68-72</td>
                            <td className="py-3 px-3">94-98</td>
                          </tr>
                          <tr className="border-b border-border">
                            <td className="py-3 px-3">L</td>
                            <td className="py-3 px-3">90-94</td>
                            <td className="py-3 px-3">72-76</td>
                            <td className="py-3 px-3">98-102</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-3">XL</td>
                            <td className="py-3 px-3">94-98</td>
                            <td className="py-3 px-3">76-80</td>
                            <td className="py-3 px-3">102-106</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="availability" className="mt-8">
                <div className="space-y-6">
                  {product.inStoreAvailability ? (
                    <div className="space-y-6">
                      <p className="editorial-body text-base leading-relaxed">
                        This item is available for viewing in our boutiques. Book a personal styling session with one of our experts to experience the piece in person.
                      </p>
                      <div className="space-y-4">
                        <Button className="w-full h-12 text-base" variant="outline">
                          Book a Styling Session
                        </Button>
                        <Button className="w-full h-12 text-base" variant="outline">
                          Find Nearest Boutique
                        </Button>
                      </div>
                      <div className="border-t border-border pt-6">
                        <p className="editorial-subheading mb-6 text-base">Our Boutiques</p>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-display text-base font-medium">Paris - Champs-Élysées</p>
                              <p className="text-sm text-muted-foreground">102 Avenue des Champs-Élysées</p>
                            </div>
                            <Button size="sm" variant="ghost" className="text-sm">View</Button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-display text-base font-medium">Milan - Via Montenapoleone</p>
                              <p className="text-sm text-muted-foreground">8 Via Montenapoleone</p>
                            </div>
                            <Button size="sm" variant="ghost" className="text-sm">View</Button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-display text-base font-medium">New York - Madison Avenue</p>
                              <p className="text-sm text-muted-foreground">730 Madison Avenue</p>
                            </div>
                            <Button size="sm" variant="ghost" className="text-sm">View</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="editorial-body text-base leading-relaxed">
                      This item is available online only. For questions about fit or styling, please contact our customer service team.
                    </p>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="delivery" className="mt-8">
                <div className="space-y-6">
                  <p className="editorial-body text-base leading-relaxed">
                    {product.deliveryReturns}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="editorial-subheading mb-6 text-base">Shipping Information</p>
                    <ul className="space-y-3 text-base">
                      <li className="flex justify-between">
                        <span>Standard Delivery</span>
                        <span>Free (2-3 business days)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Express Delivery</span>
                        <span>€50 (1 business day)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>International</span>
                        <span>€100 (3-5 business days)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="editorial-subheading mb-6 text-base">Returns & Exchanges</p>
                    <ul className="space-y-3 text-base text-muted-foreground">
                      <li>• Free returns within 30 days</li>
                      <li>• Items must be unworn with tags attached</li>
                      <li>• Complimentary return shipping</li>
                      <li>• Exchanges processed within 5-7 business days</li>
                      <li>• Refunds issued to original payment method</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="editorial-container py-24 border-t border-border mt-16">
        <h2 className="editorial-heading text-lg mb-12">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.filter((p) => p.id !== product.id).slice(0, 4).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="editorial-card block">
              <div className="overflow-hidden">
                <img src={p.image} alt={p.name} className="editorial-card-image" loading="lazy" />
              </div>
              <div className="pt-4">
                <h3 className="font-display text-sm font-light tracking-wide text-foreground">{p.name}</h3>
                <p className="font-display text-xs text-muted-foreground mt-1">€{p.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
