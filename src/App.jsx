import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './routes/Home/Home';
import Roller from './components/Roller/Roller';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roller" element={<Roller />} />
      </Routes>
    </div>
  );
}

export default App;
