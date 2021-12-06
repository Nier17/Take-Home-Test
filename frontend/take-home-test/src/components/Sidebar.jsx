import React, { useState } from "react";
import SidebarComponent from "react-sidebar";
import SidebarElement from "./SidebarElement";
import { ReactComponent as BranchSVG } from "../assets/branch.svg";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import SidebarLogo from "./SidebarLogo";
import styled from "styled-components";

const Sidebar = ({ open }) => {
  const [state, setState] = useState({
    open: open,
  });

  return (
    <Container>
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
    </Container>
  );
};

Sidebar.defaultProps = {
  open: false,
};

const Container = styled.div``;

export default Sidebar;
