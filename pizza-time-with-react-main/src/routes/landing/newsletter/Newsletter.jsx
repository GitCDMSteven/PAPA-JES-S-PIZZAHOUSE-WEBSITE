import "./newsletter.css";
import { useState } from "react";
import validateForm from "../../../components/validateForm";

// Import the new environment variable
const SUBSCRIBE_URL = import.meta.env.VITE_NEWSLETTER_SUBSCRIBE_URL;

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(""); // For backend errors

  const validate = validateForm("newsletter");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setFormError({});

    const errors = validate(formValue);
    setFormError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formValue.email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Subscription failed. Please try again.");
      }
      
      // On success
      setSubmit(true);
      setFormValue({ email: "" });

    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <section className="homepage__newsletter">
      <h2 className="newsletter__title">
        Subscribe to our newsletter to receive updates about the menu and enjoy
        awesome gifts!
      </h2>
      {submit ? (
        <p className="newsletter__success">
          You have successfully subscribed to our newsletter!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Your email
            </label>
            <input
              id="email"
              name="email"
              onChange={handleValidation}
              value={formValue.email}
              autoComplete="email"
              placeholder="What's your email?"
              aria-errormessage="email-error"
              aria-invalid={!!formError.email || !!submitError}
            />
          </div>
          {formError.email && (
            <span
              id="email-error"
              aria-live="assertive"
              className="newsletter__error">
              {formError.email}
            </span>
          )}
          {submitError && (
             <span
              id="submit-error"
              aria-live="assertive"
              className="newsletter__error">
              {submitError}
            </span>
          )}
          <button
            type="submit"
            className="active-button-style"
            aria-label="Sign me up"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Sign me up"}
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;