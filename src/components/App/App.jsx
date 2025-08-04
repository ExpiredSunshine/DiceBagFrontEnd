import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Roller from '../Roller/Roller';
import Footer from '../Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/roller" element={<Roller />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
