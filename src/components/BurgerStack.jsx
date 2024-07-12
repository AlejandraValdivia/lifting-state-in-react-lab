const BurgerStack = ({ ingredients, removeIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={() => removeIngredient(ingredient)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
