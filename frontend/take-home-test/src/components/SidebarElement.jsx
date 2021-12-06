import React from "react";
import styled from "styled-components";
import { Routes, Route, Outlet, Link, NavLink } from "react-router-dom";

const SidebarElement = ({ text, iconSVGLeft, isSelected, path }) => {
  return (
    <Container>
      {iconSVGLeft && <IconSVGLeft as={iconSVGLeft} />}
      {text && <StyledNavLink to={path}>{text}</StyledNavLink>}
    </Container>
    //     <nav
    //     style={{
    //       borderBottom: "solid 1px",
    //       paddingBottom: "1rem",
    //     }}
    //   >
    //     <Link to="/invoices">Invoices</Link> |{" "}
    //     <Link to="/expenses">Expenses</Link>
    //   </nav>
  );
};

SidebarElement.defaultProps = {
  path: "/",
};

const LabelSidebar = styled.div`
  font-size: 1.563rem;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.563rem;
`;

const IconSVGLeft = styled.div`
  width: 32px;
  height: 32px;

  min-width: 32px;
  min-height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 5px 0px 0px;

  & ~ ${StyledNavLink} {
    margin-left: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 260px;
  cursor: pointer;
  margin: 10% 10% 10% 20%;
  /* justify-content: center; */
`;

export default SidebarElement;
