import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const Branch = ({ title, branchURL, eventKey }) => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header>{title}</Accordion.Header>
          <StyledAccordionBody>URL</StyledAccordionBody>
          <StyledAccordionBody>{branchURL}</StyledAccordionBody>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: white;
  /* z-index: 100; */
  user-select: text !important;
`;
const ContainerBody = styled.div`
  width: 200px;
`;
const AccordionDiv = styled.div``;

export default Branch;
