import { useState, useEffect } from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CheckoutForm = () => {
  const { orderSummary } = useCart();
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    address: "",
    number: "",
    chooseDelivery: "",
    promoCode: "",
  });
  const [submit, setSubmit] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const togglePromocode = () => {
    setPromoCode(!promoCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
    ResetLocation();
  };
  
  useEffect(() => {
    if (submit && Object.keys(formError).length === 0) {
      navigate("/payment");
    }
  }, [submit, formError, navigate]);

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  
  const validateForm = (value) => {
    let errors = {};
    if (!value.fullname) errors.fullname = "Please enter your full name";
    if (!value.email) errors.email = "Please enter your email";
    if (!value.chooseDelivery) errors.chooseDelivery = "Please choose a delivery type";
    if (value.chooseDelivery === "delivery" && !value.address) {
        errors.address = "Please enter your address for delivery";
    }
    if (!value.number) errors.number = "Please enter your contact number";
    
    return errors;
  };

  return (
    <section className="checkout__form">
      <h3>Personal information</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="webflow-style-input">
          <input name="fullname" type="text" placeholder="Full Name" onChange={handleValidation} value={formValue.fullname} />
        </div>
        <span className="checkout__form__error">{formError.fullname}</span>

        <div className="webflow-style-input">
          <input name="email" type="email" placeholder="Email" onChange={handleValidation} value={formValue.email} />
        </div>
        <span className="checkout__form__error">{formError.email}</span>

        <div className="webflow-style-input">
          <input name="address" type="text" placeholder="Address" onChange={handleValidation} value={formValue.address} />
        </div>
        <span className="checkout__form__error">{formError.address}</span>

        <div className="webflow-style-input">
          <input name="number" type="tel" placeholder="Contact Number" onChange={handleValidation} value={formValue.number} />
        </div>
        <span className="checkout__form__error">{formError.number}</span>

        <fieldset className="checkout__form__delivery-details">
          <legend>Delivery details</legend>
          <label htmlFor="takeaway" className="checkout__form__takeaway">
            <RiShoppingBagLine />
            Takeaway
            <input
              id="takeaway"
              type="radio"
              value="takeaway"
              name="chooseDelivery"
              onChange={handleValidation}
            />
          </label>
          <label htmlFor="delivery" className="checkout__form__delivery">
            <FaShippingFast />
            Delivery
            <input
              id="delivery"
              type="radio"
              value="delivery"
              name="chooseDelivery"
              onChange={handleValidation}
            />
          </label>
          <span className="checkout__form__error">
            {formError.chooseDelivery}
          </span>
        </fieldset>
        
        {orderSummary.quantity > 0 && (
          <ul className="checkout__totals">
            <li className="checkout__totals__content">
              <h4>Quantity:</h4>
              <p> {orderSummary.quantity}</p>
            </li>
            <li className="checkout__totals__content">
              <h4>Total:</h4>
              <p>₱ {orderSummary.total}</p>
            </li>
          </ul>
        )}
        <button
          type="submit"
          className="active-button-style"
          aria-label="Proceed to payment">
          Proceed to payment
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;