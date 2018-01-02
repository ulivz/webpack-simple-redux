import React from 'react';

export default class Content extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
	}

	increment() {
		console.log(this)
		this.setState({
			count: this.state.count + 1
		})
	}

	decrement() {
		this.setState({
			count: this.state.count - 1
		})
	}

	get evenOrOdd() {
		return
	}

	render() {
		return (
			<div id="counter">
				Clicked: times, count is {this.state.count}
				<button onClick={this.increment.bind(this)}>+</button>
				<button onClick={this.decrement.bind(this)}>-</button>
				<button>Increment if odd</button>
				<button>Increment async</button>
			</div>
		);
	}

};