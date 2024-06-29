import React from "react";
import SiderBar from "../components/SiderBar/SiderBar";
import ThemePage from "../components/ThemePage/ThemePage";
const HomePage = () => {
  return (
    <div className="flex justify-between w-full">
      <SiderBar />
      <ThemePage />
    </div>
  );
};

export default HomePage;
