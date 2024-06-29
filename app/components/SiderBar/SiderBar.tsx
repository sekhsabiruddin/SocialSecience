import React from "react";
import { CiGrid32 } from "react-icons/ci";
import { GrFormSchedule } from "react-icons/gr";
import { PiNotebookBold } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
const SiderBar = () => {
  return (
    <div className="w-[20%] ">
      <div className="bg-[#dddddd]  h-screen">
        <p className="text-center py-5">Logo here</p>
        {/* //menu start here  */}
        <div>
          <span className="ml-3 text-[0.8rem] text-[#000000a7]">Menu</span>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <CiGrid32 />
              <div className="flex w-[50%]">
                <span>Home</span>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <GrFormSchedule size={25} />

              <div className="flex w-[50%]">
                <span>Schedule</span>
              </div>
            </div>

            <div className="gap-3 flex items-center justify-center cursor-pointer">
              <PiNotebookBold />

              <div className="flex w-[50%]">
                <span>Recomodation</span>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <IoAnalyticsSharp />

              <div className="flex w-[50%]">
                <span>Analytics</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <FaRegUser />
              <div className="flex w-[50%]">
                <span>Profile</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <MdForwardToInbox />
              <div className="flex gap-3 w-[50%]">
                <span>Inbox</span>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-center cursor-pointer">
              <SiHackthebox />
              <div className="flex w-[50%]">
                <span>Theme</span>
              </div>
            </div>
          </div>
        </div>
        {/* //menu start End  */}
      </div>
    </div>
  );
};

export default SiderBar;
