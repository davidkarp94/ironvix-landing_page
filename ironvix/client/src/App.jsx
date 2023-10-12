import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contacto from './pages/contacto/Contacto';
import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import Portfolio from './pages/portfolio/Portfolio';
import Servicios from './pages/servicios/Servicios';

function App() {
  return (
    <>
      <Header />

      <Home />
      <Portfolio />
      <Servicios />
      <Nosotros />
      <Contacto />

      <Footer />
    </>
  )
}

export default App
