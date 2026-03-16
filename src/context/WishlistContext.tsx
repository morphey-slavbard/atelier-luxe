import React, { createContext, useContext, useState } from "react";
import { Product, products } from "@/data/products";

interface WishlistContextType {
  savedItem: Product | null;
  setSavedItem: (product: Product | null) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Demo: Start with a coat as the saved item
  const [savedItem, setSavedItem] = useState<Product | null>(products.find(p => p.id === "structured-wool-coat") || null);

  const addToWishlist = (product: Product) => {
    setSavedItem(product);
  };

  const removeFromWishlist = () => {
    setSavedItem(null);
  };

  const isInWishlist = (productId: string) => {
    return savedItem?.id === productId;
  };

  return (
    <WishlistContext.Provider value={{ savedItem, setSavedItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};
