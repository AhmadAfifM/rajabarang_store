import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ButtonConatiner } from "./ButtonMyCart";
const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img
          src={logo}
          style={{ width: "4rem", height: "4rem" }}
          alt="logo"
          className="navbar-brand"
        />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ms-auto">
        <ButtonConatiner>
          <span className="mr-2">
            <FontAwesomeIcon icon={faCartPlus} size="lg" className="me-1" />
          </span>
          my cart
        </ButtonConatiner>
      </Link>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  background: var(--darkMaroon);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
