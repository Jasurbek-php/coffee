import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './router/Home'
import About from './router/About';
import Menu from './router/Menu';
import Reservation from './router/Reservation';
import Pages from './router/Pages';
import Shop from './router/Shop';
import Contact from './router/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/reservation" element={<Reservation />} />
          <Route exact path="/pages" element={<Pages />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Contact />} />




        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
