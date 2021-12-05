import React, { useState } from "react";
import SidebarComponent from "react-sidebar";
import SidebarElement from "./SidebarElement";
import { ReactComponent as BranchSVG } from "../assets/branch.svg";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import SidebarLogo from "./SidebarLogo";

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
            <SidebarElement text="Commits" iconSVGLeft={HomeSVG} />
            <SidebarElement text="Branches" iconSVGLeft={BranchSVG} />
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
