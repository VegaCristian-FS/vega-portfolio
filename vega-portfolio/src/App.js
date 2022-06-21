import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
//import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
    </div>
  );
}

export default App;
