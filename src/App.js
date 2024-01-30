import About from "./components/About";
import Card from "./components/Card";
import Back from "./components/Card";
import Companies from "./components/Companies";
import Customerreview from "./components/Customerreview";
import Headerc from "./components/Headerc";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Headerc />
      <About />
      <Companies />
      <Card />
      <Products />
    </div>
  );
}

export default App;
