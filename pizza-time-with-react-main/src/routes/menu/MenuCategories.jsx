import { NavLink } from "react-router-dom";
import { categories as categoriesData } from "../../data/categories";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../context/ProductsContext";

const MenuCategories = ({ setActiveCategory }) => {
  const [categories, setCategories] = useState([]);
  const { findMenuItem } = useProducts();
  useEffect(() => {
    setCategories(categoriesData);
  }, []);
  return (
    <section className="menu__categories">
      <h2 className="visually-hidden">Menu Categories</h2>
      {/* search moved to top of the page (Menu.jsx) */}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to="/menu"
              aria-label={`Select category ${category.name}`}
              onClick={() => setActiveCategory(category.name)}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MenuCategories;
