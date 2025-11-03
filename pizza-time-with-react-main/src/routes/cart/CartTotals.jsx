import CheckoutBtn from "../checkout/CheckoutBtn";
import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";
import { useCart } from "../../context/CartContext";

const CartTotals = ({ className }) => {
  const { orderSummary } = useCart();
  return (
    <section className={className}>
      <h2 id="cart-summary-title">Cart Summary</h2>
      {orderSummary.quantity > 0 && (
        <dl className="cart-totals_content">
          <dt>Quantity:</dt>
          <dd> {orderSummary.quantity}</dd>
          <dt>Total:</dt>
          <dd>₱ {orderSummary.total}</dd>
        </dl>
      )}
      <div className="cart-totals__interaction">
        <CheckoutBtn
          className="active-button-style"
          aria-label="Continue with checkout"
        />
        <LinkButton
          aria-label="Go back to menu"
          onClick={ResetLocation}
          to="/menu"
          className="back-to-menu">
          Back to menu
        </LinkButton>
      </div>
    </section>
  );
};

export default CartTotals;