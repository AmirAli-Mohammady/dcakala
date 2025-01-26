import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Header from "./Header/Header";
import MainPage from "./mainPage/mainPage";
import CartPage from "./cart/Cart";
import LoginPage from "./login/login";
import GiftCard from "./content/GiftCard";
import Footer from "./footer/footer";
import InstallmentPage from "./content/kharidAghsati";
import Content from "./content/Content";
import "./App.css";
import Rules from "./content/Rules";
import Guaranty from "./content/Guaranty";
import ShoppingWays from "./content/ShoppingWays";
import PrivacyPolicy from "./content/PrivacyPolicy";
import ShoppingGuide from "./content/ShoppingGuide";
import AboutUs from "./content/AboutUs";
import ContactUs from "./content/ContactUs";

function App() {
  const location = useParams<string>();
  const isSelectedPage =
    location.pathname === "/login" || location.pathname === "/cart";

  return (
    <>
      {!isSelectedPage && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/content" element={<Content />}>
          <Route path="gift-card" element={<GiftCard />} />
          <Route path="buy-Installments" element={<InstallmentPage />} />
          <Route path="terms-and-conditions-of-use" element={<Rules />} />
          <Route path="guaranty" element={<Guaranty />} />
          <Route path="shopping-ways" element={<ShoppingWays />} />
          <Route path="Privacy-Policy" element={<PrivacyPolicy />} />
          <Route
            path="shopping-guide-and-payment"
            element={<ShoppingGuide />}
          />
          <Route path="about-us" element={<AboutUs/>}/>
          <Route path="contact-us" element={<ContactUs/>}/>
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
