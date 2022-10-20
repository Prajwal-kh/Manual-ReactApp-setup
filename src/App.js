// install npm dev dependencies and then check package.json file
import React from 'react';
// import { hot } from 'react-hot-loader';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
    </div>
  );
}
// To run this app : >npx webpack-dev-server --mode development   (include it into package.json script)
// To seperate out HTML with CSS : >npm install --save-dev mini-css-extract-plugin
export default App;
