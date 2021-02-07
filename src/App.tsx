import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let users = [{name: 'Dima', age: 33}, {name: 'Sveta', age: 20}, {name: 'Dasha', age: 48}]


  return (
    <div className="App">
      <ul>
        {users.map(u => (<li>{`Привет ${u.name}`}</li>))}
      </ul>
    </div>
  );
}

export default App;
