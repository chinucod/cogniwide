import About from "./components/About";
import AboutCogni from "./components/AboutCogni";
import Card from "./components/Card";
import Back from "./components/Card";
import Companies from "./components/Companies";
import Customerreview from "./components/Customerreview";
import Features from "./components/Features";
import Headerc from "./components/Headerc";
import Industries from "./components/Industries";
import Kpi from "./components/Kpi";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Headerc />
      <About />
      <Companies />
      <Features />
      <AboutCogni />
      <Industries />
      <Kpi />
      <Card />
      <Products />
    </div>
  );
}

export default App;
