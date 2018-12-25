import React, {Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
	componentDidMount() {
		console.log('[Person.js] componentDidMount');
		if (this.props.position === 0) {
			this.inputElement.focus();
		}
	}
	render() {
		return (
	        <Aux>
	            <p onClick={this.props.click}>I'm a {this.props.name} j'ai {this.props.age}</p>
	            <p>{this.props.children}</p>
	            <input
					ref={(inp) => {this.inputElement = inp}}
					type="text"
					onChange={this.props.changed}
					value={this.props.name} />
	        </Aux>
		)
	}
}

Person.PropTypes = {
	cliked: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person);
