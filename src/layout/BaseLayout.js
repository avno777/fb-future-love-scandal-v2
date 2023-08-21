import React from "react";
import { Header } from "../common/Header";

export const BaseLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};
