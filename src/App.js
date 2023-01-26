import './App.css';
import { Routes, Route } from "react-router-dom";
// import useImportScript from './customHooks/useImportScript';
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Login from "./pages/Login";
import Reservation from "./pages/Reservation";
import OrderOnline from "./pages/OrderOnline";
import NoPage from "./pages/NoPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Footer from './components/Footer';
import Nav from "./components/Nav";
import { useReducer } from "react";
import logo from "./images/Logo.svg"
// import './responsive.css'
// import './custom.css'

// const Demo = props => {
//   useImportScript("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js");
// }

const date = new Date();

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};

const initializeTimes = fetchAPI(date)

const submitForm = (data) => {
  submitAPI(data);
};

function App() {

  const updateTimes = (state, action) => {
    if(action.type === "Plus") return {money: state.money + 10};
    if(action.type === "Minus") return {money: state.money - 10};
    if(action.type === "Tip") return {money: state.money + 5};
    return state;
  };

  // const Demo = props => {
  //   useImportScript("./fetchApi.js");
  // }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <>
    {/* <Demo /> */}
    <Nav />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="reservation" element={<Reservation availableTimes={state} bookingState={submitForm} />} />
      <Route path="order-online" element={<OrderOnline />} />
      <Route path="login" element={<Login />} />
      <Route path="menu" element={<Menu />} />
      <Route path="*" element={<NoPage />} />
      <Route path="booking-confirmation" element={<ConfirmedBooking />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
