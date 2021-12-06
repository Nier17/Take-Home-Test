import React from "react";
import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const SidebarElement = ({ text, iconSVGLeft, isSelected, path }) => {
  return (
    <Container path={path}>
      {iconSVGLeft && <IconSVGLeft as={iconSVGLeft} />}
      {text && (
        <StyledNavLink to={path} path={path}>
          {text}
        </StyledNavLink>
      )}
    </Container>
  );
};

SidebarElement.defaultProps = {
  path: "/",
};

const StyledNavLink = styled(NavLink)`
  font-size: 1.563rem;
  ${(props) => {
    if (props.path === useLocation().pathname)
      return css`
        color: #747eab;
      `;
  }}
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
  cursor: pointer;
  padding: 5px 5px 5px 10px;
  margin: 10% 10% 10% 20%;
  ${(props) => {
    if (props.path === useLocation().pathname)
      return css`
        border: 4px solid #747eab;
        border-radius: 8px;
        ${IconSVGLeft} {
          fill: #747eab;
        }
      `;
  }}
`;

export default SidebarElement;
