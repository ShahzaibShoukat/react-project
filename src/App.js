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
import { useReducer } from "react";
import logo from "./images/Logo.svg"
// import './responsive.css'
// import './custom.css'

const updateTimes = (state, action) => state

function App() {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const initializeTimes = availableTimes;

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <>
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="reservation" element={<Reservation availableTimes={state} />} />
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
