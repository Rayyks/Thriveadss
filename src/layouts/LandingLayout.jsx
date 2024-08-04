import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

const LandingLayout = () => {
  return (
    <Fragment>
      {/* <Header /> */}{" "}
      {/* Kalau mau design tambahan header boleh uncomment ini ya  */}
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LandingLayout;
