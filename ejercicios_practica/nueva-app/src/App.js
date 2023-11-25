import logo from './logo.svg';
import './App.css';
import CartaPresentacion from './components/CartaPresentacion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CartaPresentacion/>
      </header>      
    </div>
  );
}

export default App;
