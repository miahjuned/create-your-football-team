import React from 'react';
import './App.css';
import Header from './component/HEADER/header';
import Players from './component/Players/players';
import Navbar from './component/Navbar/nav';
function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Players></Players>
    </div>
  );
}

export default App;
