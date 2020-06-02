import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './itemlist';
import ShoppingInput from './shoppinginput';
import DeleteItem from './DeleteItem';


class App extends React.Component {
  state = {
    
    items: [],
  };

  addItem = (value) => {
    this.setState(oldState => ({
      items: [...oldState.items, value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ShoppingInput addItem={this.addItem}/>
        <DeleteItem deleteLastItem={this.deleteLastItem} disabled={this.noItemsFound} />      
        <ItemList items= {this.state.items}/>        
      </div>
    );
  }
}

export default App;
