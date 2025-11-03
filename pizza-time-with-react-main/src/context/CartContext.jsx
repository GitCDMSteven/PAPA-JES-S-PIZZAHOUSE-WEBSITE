import { createContext, useContext, useEffect, useState } from "react";
import ResetLocation from "../helpers/ResetLocation";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    quantity: 0,
    total: 0,
  });

  const findProductIndex = (product, attributes) => {
    const attributeValue = attributes?.[0]?.attributeValue;
    return cart.findIndex(item =>
      item.id === product.id &&
      item.userSelectedAttributes?.[0]?.attributeValue === attributeValue
    );
  };

  const updateCartAndStorage = (newCart) => {
    const totalQuantity = newCart.reduce((sum, item) => sum + item.quantity, 0);
    
    setCart(newCart);
    setOrderSummary(prev => ({ ...prev, quantity: totalQuantity }));

    sessionStorage.setItem("cartItems", JSON.stringify(newCart));
    sessionStorage.setItem("cartQuantity", totalQuantity);
  };

  const handleAddProduct = (targetProduct, userSelectedAttributes) => {
    const existingIndex = findProductIndex(targetProduct, userSelectedAttributes);
    const newCart = [...cart];

    if (existingIndex !== -1) {
      newCart[existingIndex].quantity += 1;
    } else {
      newCart.push({
        ...targetProduct,
        userSelectedAttributes,
        quantity: 1,
      });
    }

    updateCartAndStorage(newCart);
    setIsAddedToCart(true);
  };

  const handleRemoveProduct = (targetProduct, userSelectedAttributes) => {
    const existingIndex = findProductIndex(targetProduct, userSelectedAttributes);
    if (existingIndex === -1) return;

    const newCart = [...cart];
    const currentItem = newCart[existingIndex];

    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    } else {
      newCart.splice(existingIndex, 1);
    }

    updateCartAndStorage(newCart);
  };

  const clearCart = () => {
    updateCartAndStorage([]);
    ResetLocation();
  };
  
  const resolveItemPrice = (item) => {
    try {
      const selected = item.userSelectedAttributes?.[0]?.attributeValue;
      if (item.prices && selected && Object.prototype.hasOwnProperty.call(item.prices, selected)) {
        return Number(item.prices[selected]);
      }
      const p = Number(item.ItemPrice);
      return isNaN(p) ? 0 : p;
    } catch (e) {
      return 0;
    }
  };

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce((acc, item) => {
        const price = resolveItemPrice(item);
        return acc + price * item.quantity;
      }, 0);
      setOrderSummary(prev => ({ ...prev, total: total.toFixed(2) }));
    };
    calculateTotal();
  }, [cart]);

  useEffect(() => {
    try {
      const storedCart = sessionStorage.getItem("cartItems");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      const storedQuantity = sessionStorage.getItem("cartQuantity");
      if (storedQuantity) {
        setOrderSummary(prev => ({ ...prev, quantity: Number(storedQuantity) }));
      }
    } catch (e) {
      console.error("Failed to load cart from session storage", e);
    }
  }, []);

  useEffect(() => {
    if (isAddedToCart) {
      const timer = setTimeout(() => setIsAddedToCart(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAddedToCart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        orderSummary,
        handleAddProduct,
        handleRemoveProduct,
        clearCart,
        isAddedToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);