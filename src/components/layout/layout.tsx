import { Content } from "@components/layout/content";
import { Footer } from "@components/layout/footer";
import { Navbar } from "@components/layout/navbar";
import React from "react";

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <Content>
      {children}
    </Content>
    <Footer />
  </div>
);