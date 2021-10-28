import React from "react";
import { Route } from "react-router-dom";
import { Navbar } from "../Componets/Navbar";

const Routes = () => {
  return (
    <>
      <Route path="/">
        <Navbar />
      </Route>
    </>
  );
};

export default Routes;

// Routes=>
// render = {()=><Navbar/>}
// component = {Navbar}
// children
