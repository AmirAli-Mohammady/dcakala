import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import MainPage from "./mainPage/mainPage";
<<<<<<< HEAD
import CartPage from "./cart/CartPage";
=======
import CartPage from "./cart/Cart";
>>>>>>> b839c5e (new pages)
import LoginPage from "./login/login";
import GiftCard from "./content/GiftCard";
import Footer from "./footer/footer";
import InstallmentPage from "./content/kharidAghsati";
import Content from "./content/Content";
import "./App.css";
import Rules from "./content/Rules";
import Guaranty from "./content/Guaranty";

function App() {
  const location = useLocation(); 
  const isSelectedPage = location.pathname === '/login' || location.pathname === '/cart';

  return (
    <>
      {!isSelectedPage && <Header />} 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/content" element={<Content/>}>
          <Route path="gift-card" element={<GiftCard />}/>
          <Route path="buy-Installments" element={<InstallmentPage/>}/>
          <Route path="terms-and-conditions-of-use" element={<Rules/>}/>
          <Route path="guaranty" element={<Guaranty/>}/>
        </Route>
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



