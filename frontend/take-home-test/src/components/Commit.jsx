import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import { white } from "../GlobalStyles";

const Commit = ({ title, commitId, author, authorEmail, commitDate }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <AccordionDiv>
          <StyledAccordionBody>Id</StyledAccordionBody>
          <StyledAccordionBody>{commitId}</StyledAccordionBody>
          <StyledAccordionBody>Author</StyledAccordionBody>
          <StyledAccordionBody>{author}</StyledAccordionBody>
          <StyledAccordionBody>Author Email</StyledAccordionBody>
          <StyledAccordionBody>{authorEmail}</StyledAccordionBody>
          <StyledAccordionBody>Date</StyledAccordionBody>
          <StyledAccordionBody>{commitDate}</StyledAccordionBody>
          {/* <ContainerBody>Id</ContainerBody>
          <ContainerBody>{commitId}</ContainerBody> */}
          {/* <StyledAccordionBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </StyledAccordionBody> */}
        </AccordionDiv>
      </Accordion.Item>
    </Accordion>
  );
};

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: white;
  /* width: 200px; */
`;
const ContainerBody = styled.div`
  width: 200px;
`;
const AccordionDiv = styled.div`
  /* display: flex; */
`;

export default Commit;
