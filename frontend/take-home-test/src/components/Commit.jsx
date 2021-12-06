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
          <StyledAccordionBody>{commitId}</StyledAccordionBody>
          <StyledAccordionBody>Author</StyledAccordionBody>
          <StyledAccordionBody>{author}</StyledAccordionBody>
          <StyledAccordionBody>Author Email</StyledAccordionBody>
          <StyledAccordionBody>{authorEmail}</StyledAccordionBody>
          <StyledAccordionBody>Date</StyledAccordionBody>
          <StyledAccordionBody>{commitDate}</StyledAccordionBody>
        </AccordionDiv>
      </Accordion.Item>
    </Accordion>
  );
};

const StyledAccordionBody = styled(Accordion.Body)`
  background-color: white;
`;
const ContainerBody = styled.div`
  width: 200px;
`;
const AccordionDiv = styled.div``;

export default Commit;
