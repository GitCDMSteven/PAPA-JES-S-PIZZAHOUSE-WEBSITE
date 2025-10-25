import "./loginModal.css";
import { useState, useRef, useEffect } from "react";
import LinkButton from "../Button";
import { useNavigate } from "react-router-dom";
import validateForm from "../validateForm";

// Define the login URL, defaulting to your local backend
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "http://localhost:5000/login";

const LoginModal = ({
  setIsLoginModalOpen,
  setUserConfig,
  isLoginModalOpen,
  hideMenu,
  getUser, // getUser is still useful for fetching full user details after login
}) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const validate = validateForm("login");
  const modalRef = useRef();

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const hideLoginModal = () => {
    setIsLoginModalOpen(false);
    setFormValue((prev) => ({ email: prev.email, password: "" }));
    setFormError({});
    setVerificationError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setVerificationError("");
    const errors = validate(formValue);
    setFormError(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formValue.email,
          password: formValue.password,
        }),
      });

      if (!response.ok) {
        // Handle failed login (401, 404, etc.)
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const user = await response.json();

      // Successfully logged in
      getUser(user.id); // Fetch full, updated user details
      setUserConfig((prev) => ({ ...prev, loggedIn: true }));

      hideLoginModal();
      setFormValue({ email: "", password: "" });
      setFormError({});
      setVerificationError("");
      navigate("/menu");

    } catch (err) {
      setVerificationError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoginModalOpen) {
      modalRef.current?.show();
    } else {
      modalRef.current?.close();
    }
  }, [isLoginModalOpen]);

  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) {
      hideLoginModal();
    }
  };

  return (
    <dialog
      className="modal"
      ref={modalRef}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title">
      <div className="modal__inner">
        <button
          className="modal__inner__close"
          type="button"
          aria-label="Close login modal"
          onClick={hideLoginModal}>
          X
        </button>
        <div className="modal__content">
          <h2 id="modal-title">Log in</h2>
          {loading ? (
            <div role="status" className="loader">
              <p>Almost there...</p>
              <img
                alt="Processing request"
                src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
              />
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              {verificationError && (
                <p
                  className="modal__form__error"
                  role="alert"
                  aria-live="polite">
                  {verificationError}
                </p>
              )}
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                type="text"
                autoComplete="email"
                placeholder="Email"
                aria-label="Email address"
                aria-describedby={formError.email ? "email-error" : undefined}
              />
              <span id="email-error" className="modal__form__error">
                {formError.email}
              </span>
              <input
                onChange={handleValidation}
                value={formValue.password}
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                aria-label="Password"
                aria-describedby={
                  formError.password ? "password-error" : undefined
                }
              />
              <span id="password-error" className="modal__form__error">
                {formError.password}
              </span>
              <div className="modal__buttons">
                <LinkButton
                  onClick={() => {
                    hideLoginModal();
                    hideMenu();
                  }}
                  to="/register"
                  aria-label="Register a new account"
                  className="modal__buttons__signup">
                  Sign up
                </LinkButton>
                <button
                  aria-label="Log in to account"
                  type="submit"
                  disabled={loading}
                  className="modal__buttons__login">
                  Log in
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};

export default LoginModal;