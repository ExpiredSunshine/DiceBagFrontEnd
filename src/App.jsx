import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <h2>Welcome to DiceBag</h2>
        <p>True Random Dice Rolling</p>
        {/* Dice rolling components will go here */}
      </main>
    </div>
  );
}

export default App;
