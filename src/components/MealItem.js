import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react";


const MealItem = ({ meal }) => {

    const cartCtx = useContext(CartContext)

    const formattedPrice = new Intl.NumberFormat('et-EE', {
        style: 'currency',
        currency: 'EUR',
      }).format(meal.price);

      const addToCartHandler = () => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price
        })
      }

    return (
      <li className="meal-item">
        <article>
          <img src={`./assets/${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-description">{meal.description}</p>
            <p className="meal-item-price">{formattedPrice}</p>
          </div>
          <div className="meal-item-actions">
          <Button onClick={addToCartHandler}>
            Add to Cart
          </Button>
          </div>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  