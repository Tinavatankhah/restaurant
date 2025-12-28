import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { ShopContexProvider } from "./ShopContexProvider";

function App() {
  return (
    <div>
      <ShopContexProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            {/* <Route path="*"></Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContexProvider>
    </div>
  );
}

export default App;
