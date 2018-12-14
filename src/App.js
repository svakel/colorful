import React, { Component } from 'react';
import ProductItem from './components/ProductItem';
import './App.css';

const App = () => {

  const colors = [
    {
      id: 1,
      name: 'Fresh',
      value: '#4ABDAC'
    },
    {
      id: 2,
      name: 'Vermillion',
      value: '#FC4A1A'
    },
    {
      id: 3,
      name: 'Sunshine',
      value: '#F7B733'
    },
    {
      id: 4,
      name: 'Clean',
      value: '#DFDCE3'
    },
    {
      id: 5,
      name: 'Violet',
      value: '#96858F'
    },

  ]




  return (
    <div>
      <header>
        <div className="logo">Colourful ></div>
        <div>
          <span>Toivelista </span>
          <span>Ostoskori </span>
        </div>
      </header>

    <div className="container">
      {colors.map(color=> <ProductItem key={color.id} index={color.id.toString()} name={color.name} value={color.value} />)}
    </div>

    </div>
  )


}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//         <ProductContainer />

//       </div>
//     );
//   }
// }

export default App;

