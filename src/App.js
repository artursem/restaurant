import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
// import classes from "./App.module.css";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
  
  const handleCartShow = () => {
    setCartIsShown(true);
  }
  const handleCartHide = () => {
    setCartIsShown(false);
  }
  

	return (
		<>
			{cartIsShown && <Cart onClose={handleCartHide} />}
			<Header onShowCart={handleCartShow} />
			<Meals />
		</>
	);
}

export default App;
