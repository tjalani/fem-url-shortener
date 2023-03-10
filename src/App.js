import "./App.css";
import CTA from "./components/CTA/Cta";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Shortener from "./components/shortner/Shortener";
import Stats from "./components/Statistics/Stats";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Shortener></Shortener>
      <Stats></Stats>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
}

export default App;
