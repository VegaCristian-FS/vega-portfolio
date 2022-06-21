import './App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Header from './components/header/Header';
import Projects from './components/productList/ProductList'

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
