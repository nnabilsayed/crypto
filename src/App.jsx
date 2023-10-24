import Navbar from "./Components/Navbar";
import Cryptocurrencies from "./Components/Cryptocurrencies";
import New from "./Components/New";
import Home from "./Components/Home";
import { Route } from "react-router";
import { Routes } from "react-router";
import CryptoDetails from "./Components/CryptoDetails";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        <Route
          path="/Cryptocurrencies"
          element={<Cryptocurrencies></Cryptocurrencies>}
        ></Route>
        <Route
          path="/crypto/:coinId"
          element={<CryptoDetails></CryptoDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
