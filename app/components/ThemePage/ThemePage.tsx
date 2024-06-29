import React from "react";
import ColorPage from "./ColorPage";
const ThemePage = () => {
  return (
    <div className="w-[80%] px-2">
      {/* //top header  */}
      <div className="flex justify-between mt-2">
        <h1 className="text-bold">Themes</h1>
        <h1>Kushangra Singh</h1>
      </div>
      {/* //middle of header */}
      <div className="bg-[#dddd] flex justify-between p-3 rounded-sm my-2">
        <h1 className="text-bold">Applay Skin to profile</h1>
        <div>
          <button className=" px-3 py-1 mr-4 borderButton">Custom</button>
          <button className="px-3 py-0.5 bg-[black] text-[#fff]">Save</button>
        </div>
      </div>
      <ColorPage />
    </div>
  );
};

export default ThemePage;
