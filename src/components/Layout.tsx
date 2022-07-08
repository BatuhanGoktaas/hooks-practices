import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Layout = ({ title = "HooksPractices", children }: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
