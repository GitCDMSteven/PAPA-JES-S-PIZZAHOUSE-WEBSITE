import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import NotFound from "../not-found/NotFound";
import "./single-item.css";
import { useEffect } from "react";
import ResetLocation from "../../helpers/ResetLocation";

const SingleItem = () => {
  const { name } = useParams();
  const singleProduct = products.find(
    (product) => product.ItemName.toLowerCase().replace(/ /g, "-") === name
  );

  useEffect(() => {
    if (singleProduct) {
      document.title = `${singleProduct.ItemName} | PAPA JES’S PIZZAHOUSE`;
      ResetLocation();
    }
  }, [singleProduct]);

  if (!singleProduct) {
    return <NotFound />;
  }
  
  const renderPrice = () => {
    if (singleProduct.prices) {
      return (
        <ul className="single-item__prices">
          {Object.entries(singleProduct.prices).map(([size, price]) => (
            <li key={size}>
              <span>{size}:</span>
              <strong>₱{Number(price).toFixed(2)}</strong>
            </li>
          ))}
        </ul>
      );
    }
    return <p className="single-item__price">₱{Number(singleProduct.ItemPrice).toFixed(2)}</p>;
  };

  return (
    <main className="single-item-container">
      <article className="single-item">
        <img src={singleProduct.ItemImg} alt={singleProduct.ItemName} />
        <div className="single-item__info">
          <h1>{singleProduct.ItemName}</h1>
          <p className="single-item__ingredients">{singleProduct.ItemIngredients}</p>
          <div className="single-item__pricing-info">
            <h2>Price</h2>
            {renderPrice()}
          </div>
        </div>
      </article>
    </main>
  );
};

export default SingleItem;