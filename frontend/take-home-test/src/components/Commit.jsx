import React from "react";
import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

const Commit = ({
  title,
  commitId,
  author,
  authorEmail,
  commitDate,
  eventKey,
}) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <AccordionDiv>
          <StyledAccordionBody>Id</StyledAccordionBody>
          <StyledSubAccordionBody>{commitId}</StyledSubAccordionBody>
          <StyledAccordionBody>Author</StyledAccordionBody>
          <StyledSubAccordionBody>{author}</StyledSubAccordionBody>
          <StyledAccordionBody>Author email</StyledAccordionBody>
          <StyledSubAccordionBody>{authorEmail}</StyledSubAccordionBody>
          <StyledAccordionBody>Date</StyledAccordionBody>
          <StyledSubAccordionBody>{commitDate}</StyledSubAccordionBody>
        </AccordionDiv>
      </Accordion.Item>
    </Accordion>
  );
};

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: white;
  font-weight: bold;
  height: 5px;
`;
const StyledSubAccordionBody = styled(Accordion.Body)`
  background-color: white;
`;

const AccordionDiv = styled.div``;

export default Commit;
