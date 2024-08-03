import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

const LandingLayout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default LandingLayout;
