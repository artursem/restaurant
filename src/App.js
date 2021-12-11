import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "./store";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const dispatch = useDispatch();
	const modalState = useSelector(state => state.modal.showModal)

	const handleCartShow = () => {
		dispatch(modalActions.showModal());
	};
	const handleCartHide = () => {
		dispatch(modalActions.hideModal());
	};

	return (
		<Fragment>
			{modalState && <Cart onClose={handleCartHide} />}
			<Header onShowCart={handleCartShow} />
			<Meals />
		</Fragment>
	);
}

export default App;
