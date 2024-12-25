import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import MainPage from "./mainPage/mainPage";
import CartPage from "./cart/cart";
import LoginPage from "./login/login";
import Takhfif from "./takhfif";
import Footer from "./footer/footer";
import InstallmentPage from "./kharidAghsati";
import "./App.css";

function App() {
  const location = useLocation(); 
  const isSelectedPage = location.pathname === '/login' || location.pathname === '/cart';

  return (
    <>
      {!isSelectedPage && <Header />} 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/InstallmentPage" element={<InstallmentPage/>}/>
        <Route path="/takhfif" element={<Takhfif/>}/>
      </Routes>
      {!isSelectedPage && <Footer />} 
    </>
  );
}

const Root: React.FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;



