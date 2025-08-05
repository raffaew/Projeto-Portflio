import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Projetos from './components/Projects/Projects';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutMe />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
