import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Project';
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
            <Route path="/habilidades" element={<Skills />} />
            <Route path='/projetos' element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
