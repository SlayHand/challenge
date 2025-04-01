const MealItem = ({ meal }) => {
    return (
      <li className="meal-item">
        <article>
          <img src={`./assets/${meal.image}`} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-description">{meal.description}</p>
            <p className="meal-item-price">{meal.price} €</p>
          </div>
          <div className="meal-item-actions">
            <button className="button">Add to Cart</button>
          </div>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  