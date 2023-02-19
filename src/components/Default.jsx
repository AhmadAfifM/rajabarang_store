import React from "react";
import { useLocation } from "react-router-dom";

const Default = () => {
  const location = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h1>page not found</h1>
          <h2>
            the url <span className="text-danger">{location.pathname}</span> you
            typed is not found
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Default;
