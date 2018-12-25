import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
	constructor(props) {
		super(props);
		console.log('[PERSONS.js] constructor', props);
	}
	componentWillMount() {
		console.log('[PERSONS.js] componentWillMount');
	}
	componentDidMount() {
		console.log('[PERSONS.js] componentDidMount');
	}
	componentWillReceiveProps() {
		console.log('UPDATE [PERSONS.js] componentWillReceiveProps');
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('UPDATE [PERSONS.js] ShouldComponentUpdate');
		return (nextProps.persons !== this.props.persons)
		|| (nextProps.changed !== this.props.changed)
		|| (nextProps.clicked !== this.props.clicked);
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('UPDATE [PERSONS.js] componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('UPDATE [PERSONS.js] componentDidUpdate');
	}

	render() {
		console.log('UPDATE [PERSONS.js] render');
		return this.props.persons.map((person, index) => {
			return <Person
	        	name={person.name}
	        	age={person.age}
	        	key={person.id}
				position={index}
	        	click={() => this.props.clicked(index)}
	        	changed={(event) => this.props.changed(event, person.id)} />
		}	);
	}
}

export default Persons;
