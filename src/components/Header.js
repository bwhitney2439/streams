import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
<<<<<<< HEAD
=======

>>>>>>> 6a0010e2ecf934bf3412b4db0ff91bd5d8b5ee74
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
