import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import validateForm from "../../components/validateForm";
import ResetLocation from "../../helpers/ResetLocation";
import { REGISTER_URL } from "../../data/constants"; // Centralized URL import
import "./register.css";

const initialFormValue = {
  fullname: "",
  email: "",
  password: "",
  repeatPassword: "",
  address: "",
  number: "",
};

const Register = ({ activateLoginModal }) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();
  const validate = validateForm("registration");

  useEffect(() => {
    document.title = "Registration | PAPA JES’S PIZZAHOUSE";
    ResetLocation();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    
    const clientErrors = validate(formValue);
    if (!agreeTerms) {
        clientErrors.agreeTerms = "You must agree to the Terms and Privacy to continue.";
    }
    
    setFormErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      const userToCreate = {
        id: uuidv4(),
        email: formValue.email.toLowerCase(),
        password: formValue.password,
        fullname: formValue.fullname,
        address: formValue.address || null,
        number: formValue.number || null,
      };

      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToCreate),
      });

      // Handle server-side errors (e.g., duplicate email)
      if (!response.ok) {
        // Try to parse the error message from the backend
        try {
            const errorData = await response.json();
            throw new Error(errorData.error || `Server error: ${response.status}`);
        } catch (jsonError) {
            // This catches cases where the server sends a non-JSON error (like a 404 HTML page)
            throw new Error(`The server responded unexpectedly. Status: ${response.status}`);
        }
      }

      // Handle success
      setIsSuccess(true);
      setFormValue(initialFormValue);

    } catch (err) {
      // This is the key fix: Identify the "Unexpected end of JSON" error and give a better message.
      if (err instanceof SyntaxError && err.message.includes("Unexpected end of JSON input")) {
        setApiError("Could not connect to the server. Please try again later.");
      } else {
        setApiError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigate("/");
    setTimeout(() => {
      activateLoginModal?.();
    }, 100);
  };

  if (isLoading) {
    return (
      <main className="register">
        <div className="loader">
          <p>Creating your account...</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      </main>
    );
  }

  if (isSuccess) {
    return (
      <main className="register">
        <section className="register__success">
            <h2>Success!</h2>
            <p>You can now log in and make an order!</p>
            <button
              className="passive-button-style txt-white"
              onClick={handleGoToLogin}
            >
              Log in
            </button>
        </section>
      </main>
    );
  }

  return (
    <main className="register">
      <div className="register__inner">
        <h2>Registration</h2>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          {apiError && <p className="register__error" role="alert">{apiError}</p>}

          <label className="register__form__field">Full name
            <input name="fullname" value={formValue.fullname} onChange={handleInputChange} placeholder="Full name" type="text" />
          </label>
          {formErrors.fullname && <span className="register__error">{formErrors.fullname}</span>}

          <label className="register__form__field">Email
            <input name="email" value={formValue.email} onChange={handleInputChange} placeholder="email@example.com" type="email" />
          </label>
          {formErrors.email && <span className="register__error">{formErrors.email}</span>}

          <label className="register__form__field">Password
            <input type="password" name="password" value={formValue.password} onChange={handleInputChange} placeholder="Password" />
          </label>
          {formErrors.password && <span className="register__error">{formErrors.password}</span>}

          <label className="register__form__field">Repeat Password
            <input type="password" name="repeatPassword" value={formValue.repeatPassword} onChange={handleInputChange} placeholder="Repeat password" />
          </label>
          {formErrors.repeatPassword && <span className="register__error">{formErrors.repeatPassword}</span>}

          <label className="register__form__field">Address (optional)
            <input name="address" value={formValue.address} onChange={handleInputChange} placeholder="Street address" type="text" />
          </label>

          <label className="register__form__field">Phone (optional)
            <input name="number" value={formValue.number} onChange={handleInputChange} placeholder="Phone number" type="text" />
          </label>

          <div className="terms-row">
            <label className="terms-checkbox">
              <input type="checkbox" name="agreeTerms" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} />
              <span>By clicking "Sign Up" you agree to our <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy</Link>.</span>
            </label>
            {formErrors.agreeTerms && <span className="register__error" role="alert">{formErrors.agreeTerms}</span>}
          </div>

          <button className="register__submit" type="submit">Sign up</button>
        </form>
      </div>
    </main>
  );
};

export default Register;