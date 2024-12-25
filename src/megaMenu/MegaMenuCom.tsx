// import { Link } from "react-router-dom";

import React from "react";
import Data from "../../public/data";
import "./megaMenu.css";

const styles: { [key: string]: React.CSSProperties } = {
  megaMenu: {
    position: "absolute",
    right: "25px",
    backgroundColor: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    width: "1300px",
    height: "500px",
    display: "flex",
    gap: "100px",
  },
  listContainer: {
    flex: "1 1 50%",
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    margin: 0,
    paddingRight: "10px", 
  },
  listColumn: {
    width: "50%",
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    gap: "20px", 
    paddingRight: "20px",
    cursor:'pointer',
  },
  imageContainer: {
    flex: "1 1 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  liIcon: {
    width: "20px",
    height: "20px",
  },
};

interface Props {
  className?: string;
}

const MegaMenu = (props: Props) => {
  return (
    <div style={styles.megaMenu} className={props.className}>
      <h3
        style={{
          backgroundColor: "#ff7900",
          color: "white",
          padding: "10px",
          fontSize: "1rem",
        }}
        className="d-block"
      >
        محصولات فروشگاه
      </h3>
      <div className="container d-flex">
        <ul className="listContainer" style={styles.listContainer}>
          {Data.map((data, index) => (
            <li
              key={index}
              style={styles.listColumn}
              className={`listHover ${index % 2 !==0 ? "listColumnLeft" : ""}`}
            >
              <div className="d-flex gap-2">
                <img src={data.svg} alt={data.title} style={styles.liIcon} />
                <span>{data.title}</span>
              </div>
              <svg
                style={{ fill: "#ff7900" }}
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-[#FF9E0F] null transition-transform ease-in duration-100  css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ChevronLeftIcon"
              >
                <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              </svg>
            </li>
          ))}
        </ul>
        <div className="imageContainer" style={styles.imageContainer}>
          <img
            src="/public/logo/cover-menu-dcakala_original-ezgif.com-webp-to-png-converter.png"
            alt="Sample Image"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
