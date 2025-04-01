const MealItem = ({ meal }) => {

    const formattedPrice = new Intl.NumberFormat('et-EE', {
        style: 'currency',
        currency: 'EUR',
      }).format(meal.price);

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
            <button className="button">Add to Cart</button>
          </div>
        </article>
      </li>
    );
  };
  
  export default MealItem;
  