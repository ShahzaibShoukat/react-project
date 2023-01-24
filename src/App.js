import './App.css';
import { Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import NoPage from "./pages/NoPage";
import Footer from './components/Footer';
import Nav from "./components/Nav";
import logo from "./images/Logo.svg"
// import './responsive.css'
// import './custom.css'


function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
          <Route path="menu" element={<Menu />} />
          <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
