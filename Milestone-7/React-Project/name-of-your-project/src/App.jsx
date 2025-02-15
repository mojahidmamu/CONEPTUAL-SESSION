import "./App.css";
import AllProducts from "./component/AllProducts/AllProducts";
import CardContainer from "./component/CardContainer/CardContainer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div className="flex justify-around">
        <AllProducts></AllProducts>
        <CardContainer></CardContainer>
      </div>
    </>
  );
}

export default App;
