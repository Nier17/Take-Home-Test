import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const Branch = ({ title, branchURL, eventKey }) => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Header>{title}</Accordion.Header>
          <StyledAccordionBody>URL</StyledAccordionBody>
          <StyledSubAccordionBody>
            <a href={branchURL}> {branchURL}</a>
          </StyledSubAccordionBody>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: white;
  font-weight: bold;
`;
const StyledSubAccordionBody = styled(Accordion.Body)`
  background-color: white;
`;
const Container = styled.div``;

export default Branch;
