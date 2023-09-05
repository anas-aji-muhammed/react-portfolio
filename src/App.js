import './App.css';
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Home></Home>
        <About></About>
        <PortfolioSection></PortfolioSection>
        <Contact></Contact>
        <Footer></Footer>
        

    </div>
  );
}

export default App;
