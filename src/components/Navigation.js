import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

  const navStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "6px 12px",
    borderRadius: "30px",
  };
  
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link to="/">
          <img style={{ height: 50 }} src="/images/logo.png" alt="logo"></img>
        </Link>

        <ul className="flex  items-center">
          <li>
            <div style={navStyle}>
              <Link to="/ListOfNFT">NFT's</Link>
            </div>
          </li>

          <li className="ml-4">
            <div style={navStyle}>
              <Link to="/Rent">Rent</Link>
            </div>
          </li>

          <li className="ml-4">
            <div style={navStyle}>
              <Link to="/wallet">Connect wallet Here</Link>
            </div>
          </li>
             
             
         
         

        </ul>
      </nav>
    </>
  );
};

export default Navigation;
