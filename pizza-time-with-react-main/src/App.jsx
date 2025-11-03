import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  About,
  Contact,
  Homepage,
  Menu,
  SingleItem,
} from "./routes/index";

import NotFound from "./routes/not-found/NotFound";
import Refunds from "./routes/refunds/Refunds";
import Terms from "./routes/terms/Terms";
import Privacy from "./routes/privacy/Privacy";
import Careers from "./routes/careers/Careers";
import ResetLocation from "./helpers/ResetLocation";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const hideMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <BrowserRouter>
      <Header
        setIsNavOpen={setIsNavOpen}
        isNavOpen={isNavOpen}
        hideMenu={hideMenu}
      />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          exact
          path="/menu"
          element={
            <ProductsProvider>
              <Menu />
            </ProductsProvider>
          }
        />
        <Route path="/menu/:name" element={<SingleItem />} />
        
        {/* All cart and user routes now lead to NotFound */}
        <Route path="/cart" element={<NotFound />} />
        <Route path="/checkout" element={<NotFound />} />
        <Route path="/payment" element={<NotFound />} />
        <Route path="/profile" element={<NotFound />} />
        <Route path="/register" element={<NotFound />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;