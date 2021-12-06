import React, { useState } from "react";
import SidebarComponent from "react-sidebar";
import SidebarElement from "./SidebarElement";
import { ReactComponent as BranchSVG } from "../assets/branch.svg";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import SidebarLogo from "./SidebarLogo";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Sidebar = ({ open, getOpen }) => {
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
          sidebar: { backgroundColor: "#FFFFFF", position: "fixed" },
        }}
      >
        <p></p>
        {/* <button
          onClick={() => {
            setState({ open: !state.open });
            getOpen(state.open);
          }}
        >
          Open sidebar
        </button> */}
      </SidebarComponent>
    </div>
  );
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
