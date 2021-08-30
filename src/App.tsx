import React from 'react';
import logo from './logo.svg';
import './App.css';
import MathMarkdown from './components/MathMarkdown';

function App() {
  return (
    <div className="App">
      <MathMarkdown 
        children={`
        
          Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
          equation.

          $$
          L = \\frac{1}{2} \\rho v^2 S C_L
          $$
        `}
      />
    </div>
  );
}

export default App;
