import { Link } from "react-router-dom";
import { User, Package, Heart, MapPin, LogOut } from "lucide-react";

const Account = () => {
  return (
    <main className="pt-20 md:pt-24">
      <section className="editorial-container py-12 md:py-16 text-center">
        <p className="editorial-subheading mb-3">My Account</p>
        <h1 className="font-display text-3xl md:text-4xl font-light tracking-[0.15em] uppercase text-foreground">
          Welcome Back
        </h1>
      </section>

      <section className="editorial-container pb-24 max-w-3xl mx-auto">
        {/* Account menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {[
            { icon: User, label: "Personal Details", desc: "Update your information" },
            { icon: Package, label: "Order History", desc: "Track your purchases" },
            { icon: Heart, label: "Wishlist", desc: "Your saved pieces" },
            { icon: MapPin, label: "Addresses", desc: "Manage shipping addresses" },
          ].map(({ icon: Icon, label, desc }) => (
            <button
              key={label}
              className="bg-background p-8 md:p-10 text-left group hover:bg-secondary transition-colors"
            >
              <Icon size={20} strokeWidth={1} className="text-foreground mb-4" />
              <h3 className="font-display text-lg font-light tracking-wide text-foreground mb-1">{label}</h3>
              <p className="font-display text-xs text-muted-foreground tracking-wide">{desc}</p>
            </button>
          ))}
        </div>

        {/* Sign out */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 editorial-link">
            <LogOut size={14} strokeWidth={1.5} />
            Sign Out
          </button>
        </div>

        {/* Recent orders */}
        <div className="mt-16 border-t border-border pt-12">
          <h2 className="editorial-heading text-lg mb-8">Recent Orders</h2>
          <div className="space-y-6">
            {[
              { id: "ORD-2026-001", date: "February 28, 2026", status: "Delivered", total: "€5,290" },
              { id: "ORD-2026-002", date: "March 5, 2026", status: "In Transit", total: "€1,450" },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between py-4 border-b border-border">
                <div>
                  <p className="font-display text-sm text-foreground tracking-wide">{order.id}</p>
                  <p className="font-display text-xs text-muted-foreground mt-1">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-display text-sm text-foreground">{order.total}</p>
                  <p className="font-display text-xs text-muted-foreground mt-1">{order.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Account;
