import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state = {
    foods: foods,
    addNew: false
  }

  formSubmitHandler = ( event ) => {
    event.preventDefault();
    this.setState({
      foods: [{
        name: event.target.name.value,
        calories: event.target.calories.value,
        image: event.target.image.value,
        quantity: 0
      }].concat(this.state.foods)
    })
  }
  
  toggleFormHandler = () => {
    this.setState({
      addNew: !this.state.addNew
    })
  }

  render() {
    const addNewFood = (
      <button onClick={this.toggleFormHandler}>addNewFood</button>
    )

    const formToRender = (
      <form onSubmit={this.formSubmitHandler}>
        <label>Name</label>
        <input type="text" name="name"></input>
        <label>Calories</label>
        <input type="text" name="calories"></input>
        <label>Image</label>
        <input type="text" name="image"></input>
        <button type="submit">Submit</button>
      </form>
    )
    


    const foodsToRender = this.state.foods.map((item,index) => {
      return <FoodBox foodData={item}  key={index}/>
    })
    return (
      <div className="App">
        {this.state.addNew && formToRender}
        {!this.state.addNew && addNewFood}
        {foodsToRender}
      </div>
    );
  }
}

export default App;
