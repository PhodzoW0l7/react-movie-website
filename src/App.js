import "./App.scss";
import "swiper/swiper-bundle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./config/Routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="*" element={<Router />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
