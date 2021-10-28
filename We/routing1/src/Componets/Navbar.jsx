import React from "react";
import { Link, NavLink } from "react-router-dom";

const Links = [
  {
    title: "Home",
    to: "/"
  },
  {
    title: "About",
    to: "/about"
  },
  {
    title: "Contact",
    to: "/contact"
  },
  { title: "Products", to: "/products" }
];

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "grey", padding: "20px" }}>
      {Links.map(({ title, to }, index) => {
        return (
          <NavLink
            key={index}
            to={to}
            exact
            style={{ padding: 10, textDecoration: "none", color: "black" }}
            activeStyle={{ fontWeight: "bold", color: "white" }}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};

export { Navbar };

// navbar
// home
// about us
// contact page
// products

// title
// to
