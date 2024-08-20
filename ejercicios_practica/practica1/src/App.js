import logo from './logo.svg';
import './App.css';
import CartaPresentacion from './components/CartaPresentacion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <CartaPresentacion/>
        </p>
        <a
          className="App-link"
          href="https://github.com/adriquint"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mi repo en Github
        </a>
      </header>
    </div>
  );
}

export default App;
