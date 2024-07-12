const IngredientList = ({ ingredients, addIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addIngredient(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
