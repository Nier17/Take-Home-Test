import React from "react";
import styled from "styled-components";
import { H3 } from "../GlobalStyles";
const SidebarElement = ({ text, iconSVGLeft, isSelected }) => {
  return (
    <Container>
      {iconSVGLeft && <IconSVGLeft as={iconSVGLeft} />}
      {text && <LabelSidebar>{text}</LabelSidebar>}
    </Container>
  );
};

const LabelSidebar = styled.div`
  font-size: 1.563rem;
  /* margin: 10%; */
`;

const IconSVGLeft = styled.div`
  width: 24px;
  height: 24px;

  min-width: 24px;
  min-height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 5px 5px 0px;

  & ~ ${LabelSidebar} {
    margin-left: 5px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 280px;
  cursor: pointer;
  margin-left: 20%;
  margin: 10% 10% 10% 20%;
  /* justify-content: center; */
`;

export default SidebarElement;
