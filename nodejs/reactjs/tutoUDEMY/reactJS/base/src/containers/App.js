import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends PureComponent {
	state = {
		persons: [
			{id: 'a', name: "panda", age: 28, test: 'ok'},
			{id: 'b', name: "grosminet", age: 17, test: 'ok'},
			{id: 'c', name: "titi", age: 32, test: 'ok'}
		],
		otherState: "just a test",
		showPersons: false,
		toggleClicked: 0
	}

	constructor(props) {
		super(props);
		console.log('[APP.js] constructor', props);
	}
	componentWillMount() {
		console.log('[APP.js] componentWillMount');
	}
	componentDidMount() {
		console.log('[APP.js] componentDidMount');
	}
	componentWillReceiveProps() {
		console.log('UPDATE [APP.js] componentWillReceiveProps');
	}
	//shouldComponentUpdate: automatique avec l'import d'un PureComponent
	componentWillUpdate(nextProps, nextState) {
		console.log('UPDATE [APP.js] componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('UPDATE [APP.js] componentDidUpdate');
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState( (prevState, props) => {
			return {
				showPersons: !doesShow,
				toggleClicked: prevState.toggleClicked + 1
			}
		})
	}
	deletePersonHandler = (personIndex) => {
		const NewPersons = this.state.persons.slice();
		NewPersons.splice(personIndex, 1);
		this.setState({persons: NewPersons});
	}
	changeNameHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p  => {
		    return p.id === id;
		})
		const person = {
		    ...this.state.persons[personIndex]
    	};
		person.name = event.target.value;
		const Newpersons = [...this.state.persons];
		Newpersons[personIndex] = person;

		this.setState({persons: Newpersons});
 	}

	render() {
		console.log('UPDATE [APP.js] render');

	    let persons = null;
	    if (this.state.showPersons) {
	      persons = <Persons
			  persons={this.state.persons}
			  clicked={this.deletePersonHandler}
			  changed={this.changeNameHandler} />;
	    }
	    return (
			<Aux>
				<button onClick={() => {this.setState({showPersons: true})}}>
					Show Persons
				</button>
		        <Cockpit
					appTitle={this.props.title}
		            showPersons={this.state.showPersons}
		            persons={this.state.persons}
		            clicked={this.togglePersonsHandler} />
		        {persons}
	        </Aux>
	    );
    }
}

export default withClass(App, classes.App);
