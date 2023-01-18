import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from "./components/Nav";
import Main from './components/Main';
import logo from "./images/Logo.svg"


function App() {
  return (
    <>
    <Nav logo={logo} />
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
