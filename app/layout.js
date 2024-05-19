import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
    title: "propertyPulse | Find the perfect rental",
    description: "Find your dream rental property",
    keywords: "rental, Find rentals, Find properties"
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
