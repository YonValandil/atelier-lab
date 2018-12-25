switchNameHandler = (newName) => {
  console.log("was clicked !");
  this.setState({
    persons: [
      {name: newName, age: 28},
      {name: "grosminet", age: 17},
      {name: "titi", age: 32}
    ]
  })
}

{/*par un appel de arrow function, + le call avec ('arrow') */}
<button onClick={() => this.switchNameHandler('arrow')} />

{/*avec le bind pour liéer*/}
<Person name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, "bind")}
/>

{/*event passé automatiquement?*/}
<Person name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        changed={this.changeNameHandler}
/>

{/*{} pour toute valeur qui n'est pas de type String*/}
<Person name="grosminet"
        age={32}>Je suis: un chat
</Person>

changed={this.changeNameHandler.bind(this, person.id)} //avec bind, event?

//person.jxs backup mediaquery

import React from 'react'
import Radium from 'radium';

import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    //this.props pour une classe
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} j'ai {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
  )
}

export default Radium(person);

//----------------
':hover': {
    backgroundColor: 'lightgreen',
    color: 'black'
}

Mystyle[':hover'] = {
    backgroundColor: 'salmon',
    color: 'black'
}

//---------------------

//Inline: Autre moyen de faire du css (c'est scopé au component)
const Mystyle = {
  backgroundColor: 'green',
  color: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
};
Mystyle.backgroundColor = 'red';
<button onClick={this.togglePersonsHandler} style={myStyle}>
    Toggle Persons
</button>

//Radium est une HOC: high-order componant
//fonction qui prend en paramètre une définition de composant, et lui ajoute
//des fonctionnalités
