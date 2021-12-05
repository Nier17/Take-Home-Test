import React, { useState } from "react";
import SidebarComponent from "react-sidebar";
import SidebarElement from "./SidebarElement";
import { ReactComponent as BranchSVG } from "../assets/branch.svg";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import SidebarLogo from "./SidebarLogo";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const Sidebar = () => {
  const [state, setState] = useState({
    open: true,
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
        open={state.open}
        // open={true}
        onSetOpen={setState}
        styles={{
          sidebar: { backgroundColor: "#FFFFFF" },
        }}
      >
        <button onClick={() => setState({ open: true })}>Open sidebar</button>
      </SidebarComponent>
    </div>
  );
};

export default Sidebar;
