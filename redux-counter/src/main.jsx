import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";

//create initial state
const initialState = { count: 0 };

//create the logic that manipulates the state
function reducer(state = initialState, action) {
	switch (action.type) {
		case "INCREMENT": {
			const copy = { ...state };
			copy.count += 1;
			return copy;
		}
		case "DECREMENT": {
			const copy = { ...state };
			copy.count -= 1;
			return copy;
		}
		default:
			return initialState;
			break;
	}
}
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
