import { motion } from "framer-motion";

const MenuSliderProducts = ({ singleProduct }) => {
  return (
    <motion.article
      aria-labelledby="product-title"
      initial={{ opacity: 0, translateY: -300 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -300 }}
      transition={{ duration: 1 }}
      className="menu-slider__product">
      <img src={singleProduct.ItemImg} alt={singleProduct.ItemName} />
      <div className="menu-slider__product-desc">
        <h3 id="product-title" className="pop-font txt-white">
          {singleProduct.ItemName}
        </h3>
        <p className="menu-slider__product-desc-txt pop-font">
          {singleProduct.ItemIngredients}
        </p>
        <p className="menu-slider__product-price">
          <span>₱</span>
          {singleProduct.ItemPrice}
        </p>
      </div>
    </motion.article>
  );
};

export default MenuSliderProducts;
