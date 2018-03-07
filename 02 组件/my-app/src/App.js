import React, { Component } from 'react';
import './App.css';
//导入组件
import  MyComponent from "./components/MyComponents"

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
