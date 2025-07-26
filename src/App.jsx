import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Roller from './components/Roller/Roller';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/roller" element={<Roller />} />
      </Routes>
    </div>
  );
}

export default App;
