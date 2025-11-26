export function useCart() {
  const getCart = () => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    return saved;
  };

  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addToCart = (item, currentCart) => {
    const exists = currentCart.find((i) => i.id === item.id);
    let newCart;

    if (exists) {
      newCart = currentCart.map((i) =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      newCart = [...currentCart, { ...item, qty: 1 }];
    }
    saveCart(newCart);
    return newCart;
  };

  const decreaseCart = (id, currentCart) => {
    const newCart = currentCart
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);
    saveCart(newCart);
    return newCart;
  };

  const getQty = (id, currentCart) => {
    const item = currentCart.find((i) => i.id === id);
    return item ? item.qty : 0;
  };

  const removeFromCart = (id, currentCart) => {
    const newCart = currentCart.filter((item) => item.id !== id);
    saveCart(newCart);
    return newCart;
  };

  return {
    getCart,
    saveCart,
    addToCart,
    decreaseCart,
    getQty,
    removeFromCart,
  };
}
