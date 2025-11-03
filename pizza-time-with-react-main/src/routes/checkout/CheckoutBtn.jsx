import LinkButton from "../../components/Button";
import ResetLocation from "../../helpers/ResetLocation";

const CheckoutBtn = ({ className }) => {
  return (
    <LinkButton
      onClick={ResetLocation}
      to="/checkout"
      aria-label="Proceed to checkout"
      className={className}>
      Checkout
    </LinkButton>
  );
};

export default CheckoutBtn;