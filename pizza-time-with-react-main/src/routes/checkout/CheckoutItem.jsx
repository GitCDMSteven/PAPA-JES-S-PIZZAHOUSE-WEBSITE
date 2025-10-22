import { useEffect, useState } from "react";

const CheckoutItem = ({ cartItem }) => {
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  useEffect(() => {
    cartItem.userSelectedAttributes.map((item) => {
      return setSelectedAttributes(item.attributeValue);
    });
  }, [cartItem.userSelectedAttributes]);
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
    <article className="checkout__item" aria-labelledby="checkout-title">
      <img src={cartItem.ItemImg} alt={cartItem.ItemName} />
      <div className="checkout__item__info">
        <h3 id="checkout-title">
          {cartItem.ItemName}{" "}
          {cartItem.userSelectedAttributes.length > 0 && (
            <span>{selectedAttributes}</span>
          )}
        </h3>

        <p>Quantity: {cartItem.quantity}</p>
  <p>Unit price: ₱ {resolveItemPrice(cartItem).toFixed(2)}</p>
      </div>
    </article>
  );
};

export default CheckoutItem;
