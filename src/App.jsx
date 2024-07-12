import IngredientList from "./components/IngredientList.jsx";
import BurgerStack from "./components/BurgerStack.jsx";
import { useState } from "react";
import "./App.css";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "#55AB55" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "orange" },
  { name: "Swiss Cheese", color: "#f9e02e" },
  { name: "Jalapeño Cheese", color: "#f1ae3a" },  
  { name: "Mushroom", color: "lightcoral" },
  { name: "Ketchup", color: "red" },
  { name: "Mustard", color: "yellow" },
  { name: "Mayonnaise", color: "khaki" },
  { name: "Jalapeño Pepper", color: "darkgreen" },
  { name: "Tabasco Sauce", color: "orangered" },
  { name: "Dill Pickles", color: "green" },
  { name: "Barbecue Sauce", color: "sienna" },
  { name: "Sriracha Sauce", color: "#a70000" },
  { name: "Ranch Sauce", color: "darkseagreen" },
  { name: "Sweet Chilli Sauce", color: "gold" },
  { name: "Srimps", color: "coral" },
  { name: "Sweet Peppers", color: "lightgreen" },
];

const App = () => {
  const [stack, setStack] = useState([]);
  const [ingredients, setIngredients] = useState(availableIngredients);

  const addIngredient = (ingredient) => {
    setStack([...stack, ingredient]);
    setIngredients(ingredients.filter((i) => i !== ingredient));
  };

  const removeIngredient = (ingredient) => {
    setStack(stack.filter((i) => i !== ingredient));
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <>
      <main className="main">
        <h1>🍔 Burger Stacker 🍔</h1>
        <p>By: <a href="https://github.com/AlejandraValdivia">Alejandra Valdivia</a></p>
        <section>
          <IngredientList ingredients={ingredients} addIngredient={addIngredient} />
          <BurgerStack removeIngredient={removeIngredient} ingredients={stack} />
        </section>
      </main>
    </>
  );
};

export default App;
