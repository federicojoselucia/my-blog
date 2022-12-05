import React from "react";
import Content from "./content";
import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>
);

export default Layout;
