import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import { Link } from "react-router-dom";
import MegaMenu from "../megaMenu/MegaMenuCom";
import { useState } from "react";


//Cart button in header Component
function CartBtn() {
  return (
    <>
      <Link to={"/cart"} className="cart css-1rzb3uu" >
        <a href="">
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium   css-byrcx0"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ShoppingCartOutlinedIcon"
          >
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
          </svg>
        </a>
      </Link>
    </>
  );
}
//profile component in header
function ProfileBtn() {
  return (
    <div>
      <Link
        to={"/login"}
        className=" rounded-pill ps-2 pe-2 pt-2 pb-2 text-decoration-none ProfileSvg"
      >
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-byrcx0 "
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AccountCircleIcon"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"></path>
        </svg>
        <span className="ps-1 pe-1 fw-light text-dark ">وارد شوید</span>
      </Link>
    </div>
  );
}

interface Props {
  number?: string;
  placeholder?: string;
  class?:string;
}

function PhoneNumBtn(props: Props) {
  return (
    <div>
      <span className="phonNum ps-2">{props.number}</span>
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mr-1 css-vubbuv"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="PhoneInTalkIcon"
      >
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"></path>
      </svg>
    </div>
  );
}
function SearchInput(props: Props) {
  return (
    <div className="position-relative">
      <input
        style={{ width: "709px", backgroundColor: "white " }}
        className="seachBar pt-2 pb-2 ms-4 rounded-pill border-0 d-flex justify-content-center"
        type="search"
        placeholder={props.placeholder}
      />
      <svg
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-m1sf21 justify-self-start"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="SearchIcon"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
      </svg>
    </div>
  );
}
function HomeLogo() {
  return (
    <Link to={"/"}>
      <picture>
        <img
          style={{ width: "90px", height: "38px" }}
          src="/public/logo/dcakala-logo-new-ns_2x.png"
          alt="web Logo"
        />
      </picture>
    </Link>
  );
}

const MegaMenuIcon = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <div
      className="position-relative"
      onMouseEnter={() => setMenuVisible(true)}  
      onMouseLeave={() => setMenuVisible(false)} 
    >
      <Link to={'sag'} className="me-4 text-decoration-none" style={{ cursor: "pointer" }}>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18mhvam"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MenuIcon"
        >
          <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
        <span style={{ color: "white" }}>دسته بندی محصولات</span>
      </Link>
      
      {isMenuVisible && <MegaMenu className="d-flex flex-column gap-5  " />}
    </div>
  );
};

const Header = () => {
  return (
    <header
      className="d-flex align-items-center position-fixed"
      style={{ backgroundColor: "#ff7900", width: "100%", height: "70px" , zIndex:1000 }}
    >
      <div className="searchBar d-flex gap-3 align-items-center">
        <MegaMenuIcon />
        <HomeLogo />
        <SearchInput placeholder="جستجو در دی سی ای کالا" />
      </div>
      <div className="d-flex gap-3 align-items-center">
        <PhoneNumBtn number="۰۲۱۷۲۱۹۵" />
        <ProfileBtn />
        <CartBtn />
      </div>
    </header>
  );
};
export default Header;