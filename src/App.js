import logo from './logo.svg';
import './App.css';
import Elements from './Components/Elements';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>REIZ TECH HOMEWORK ASSIGNMENT</h2>
      </header>
      <button>Sign In</button>
      <button>Sign Up</button>
      <button id='srch'>Search</button>
      <Elements/>
    </div>
  );
}

export default App;
