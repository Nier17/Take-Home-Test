import React, { useState } from "react";
import SidebarComponent from "react-sidebar";
import SidebarElement from "./SidebarElement";
import { ReactComponent as BranchSVG } from "../assets/branch.svg";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import SidebarLogo from "./SidebarLogo";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Sidebar = ({ open }) => {
  const [state, setState] = useState({
    open: open,
  });

  return (
    <div>
      {" "}
      <SidebarComponent
        sidebar={
          <div>
            <SidebarLogo />
            <SidebarElement
              text="Commits"
              path="/commits"
              iconSVGLeft={HomeSVG}
            ></SidebarElement>
            <SidebarElement
              text="Branches"
              path="/branches"
              iconSVGLeft={BranchSVG}
            />
          </div>
        }
        docked={true}
        styles={{
          sidebar: {
            width: 260,
            backgroundColor: "#FFFFFF",
            position: "fixed",
          },
          root: {
            position: "undefined",
          },
          content: {
            position: "undefined",
            top: "undefined",
            left: "undefined",
            right: "undefined",
            bottom: "undefined",
          },
        }}
      >
        <p></p>
      </SidebarComponent>
    </div>
  );
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
