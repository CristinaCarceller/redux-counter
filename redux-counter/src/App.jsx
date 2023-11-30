import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
	add = () => {
		this.props.dispatch({ type: "INCREMENT" });
	};
	minus = () => {
		this.props.dispatch({ type: "DECREMENT" });
	};
	render() {
		const { count } = this.props;

		return (
			<>
				<h1>The count is {count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button>
			</>
		);
	}
}
function mapStateToProps(state) {
	return { count: state.count };
}

export default connect(mapStateToProps)(App);
