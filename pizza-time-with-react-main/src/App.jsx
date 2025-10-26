import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { About, Cart, Checkout, Contact, Homepage, Menu, Payment, Register, SingleItem, } from "./routes/index";

import CartTotals from "./routes/cart/CartTotals";
import LoginModal from "./components/login/LoginModal";
import CartItem from "./routes/cart/CartItem";
import NotFound from "./routes/not-found/NotFound";
import Refunds from "./routes/refunds/Refunds";
import Terms from "./routes/terms/Terms";
import Privacy from "./routes/privacy/Privacy";
import Careers from "./routes/careers/Careers";
import Profile from "./routes/profile/Profile";
import ResetLocation from "./helpers/ResetLocation";
import { useMemo } from "react";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
// --- FIX: Import USERS_URL from constants.js ---
import { USERS_URL } from "./data/constants";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [userConfig, setUserConfig] = useState({ user: {}, loggedIn: false });
  const loggedIn = useMemo(() => userConfig.loggedIn, [userConfig]);

  const getUser = async (id) => {
    try {
      // Use the USERS_URL directly here
      const response = await fetch(`${USERS_URL}/${id}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // The backend now returns the user object directly, not inside a 'data' property
      const user = await response.json();
      setUserConfig((prev) => ({ ...prev, user: user }));
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    } catch (err) {
      console.log(err.message); // Log the actual error message
      return false;
    }
  };

  const updateUser = async (id, user) => {
    try {
      const response = await fetch(`${USERS_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const update = await getUser(id);
      if (!update) {
        throw new Error("Failed to re-fetch user after update.");
      }
      return true;
    } catch (err) {
      console.log("Fetch error:", err.message);
      return false;
    }
  };

  useEffect(() => {
    try {
      const current = sessionStorage.getItem("currentUser");
      if (current) {
        const user = JSON.parse(current);
        setUserConfig((prev) => ({ ...prev, user }));
      }

      const validLoginRaw = sessionStorage.getItem("validLogin");
      if (validLoginRaw !== null && current) {
        const validLogin = validLoginRaw === "true";
        setUserConfig((prev) => ({ ...prev, loggedIn: validLogin }));
      }
    } catch (e) {
      console.error("Failed to initialize session user", e?.message || e);
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem("validLogin", userConfig.loggedIn ? "true" : "false");
    } catch (e) {
      console.error("Could not persist validLogin", e?.message || e);
    }
  }, [userConfig.loggedIn]);

  const activateLoginModal = () => {
    hideMenu();
    setIsLoginModalOpen((prev) => !prev);
  };

  const handleLogout = () => {
    setUserConfig({ user: {}, loggedIn: false });
    hideMenu();
    ResetLocation();
    sessionStorage.clear();
  };

  const hideMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <CartProvider isLogged={userConfig.loggedIn}>
      <BrowserRouter>
        <Header
          loginModal={
            isLoginModalOpen ? (
              <LoginModal
                setUserConfig={setUserConfig}
                setIsLoginModalOpen={setIsLoginModalOpen}
                isLoginModalOpen={isLoginModalOpen}
                hideMenu={hideMenu}
                getUser={getUser}
              />
            ) : null
          }
          activateLoginModal={activateLoginModal}
          setIsNavOpen={setIsNavOpen}
          isNavOpen={isNavOpen}
          hideMenu={hideMenu}
          handleLogout={handleLogout}
          isValidLogin={loggedIn}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/cart"
            element={
              <Cart
                CartItem={
                  <CartItem
                    cartTotals={
                      <CartTotals
                        className="cart-totals"
                        isValidLogin={loggedIn}
                        activateLoginModal={activateLoginModal}
                      />
                    }
                  />
                }
              />
            }
          />

          <Route
            exact
            path="/menu"
            element={
              <ProductsProvider isLogged={userConfig.loggedIn}>
                <Menu />
              </ProductsProvider>
            }
          />
          <Route
            path="/profile"
            element={
              !loggedIn ? (
                <NotFound />
              ) : (
                <Profile
                  currentUser={userConfig.user}
                  getUser={getUser}
                  handleLogout={handleLogout}
                  updateUser={updateUser}
                />
              )
            }
          />
          <Route path="/menu/:name" element={<SingleItem />} />
          <Route
            path="/checkout"
            element={<Checkout currentUser={userConfig.user} />}
          />
          <Route
            path="/payment"
            element={<Payment currentUser={userConfig.user} />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/register"
            element={
              loggedIn ? (
                <NotFound />
              ) : (
                !isLoginModalOpen ? (
                  <Register activateLoginModal={activateLoginModal} />
                ) : (
                  <NotFound />
                )
              )
            }
          />

          <Route path="/careers" element={<Careers />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;