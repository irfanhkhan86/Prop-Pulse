import "@/assets/styles/globals.css";
import React from "react";
export const metadata = {
    title: "propertyPulse | Find the perfect rental",
    description: "Find your dream rental property",
    keywords: "rental, Find rentals, Find properties"
}

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
