import ChangeItemQuantity from "./ChangeItemQuantity";
import { useCart } from "../../context/CartContext";

const CartItem = ({ cartTotals }) => {
  const { cart, clearCart } = useCart();

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

  return (
    <section className="cart__items">
      {cart.map((cartItem, index) => {
        const unitPrice = resolveItemPrice(cartItem);
        const lineTotal = (unitPrice * (cartItem.quantity || 0)).toFixed(2);
        return (
          <article
            className="cart__items__single"
            key={index}
            aria-labelledby={`item-title-${index}`}>
            <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
            <div className="cart__items__content">
              <header className="cart__items__info">
                <h3 id={`item-title-${index}`} className="cart__items__title">
                  {cartItem.ItemName}
                  {cartItem.userSelectedAttributes.length > 0 &&
                    cartItem.userSelectedAttributes.map((i, idx) => {
                      return <span key={idx}>{i.attributeValue}</span>;
                    })}
                </h3>
                <p className="cart__items__ingredients">
                  {cartItem.ItemIngredients}
                </p>
              </header>
              <div className="cart__items__interaction">
                <ChangeItemQuantity cartItem={cartItem} />
                <div className="cart__items__pricing">
                  <p className="unit-price">₱{unitPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
      {cart.length > 0 && (
        <button
          onClick={clearCart}
          className="cart__items__clear-btns"
          aria-label="remove all items from the cart">
          remove all items from the cart
        </button>
      )}
      {cartTotals}
    </section>
  );
};

export default CartItem;
