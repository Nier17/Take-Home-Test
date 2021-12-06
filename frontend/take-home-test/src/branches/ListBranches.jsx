import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Branch from "../components/Branch";

const URL = "http://localhost:3001/getBranches";
// const URL =
// "https://api.github.com/repos/Nier17/Take-Home-Test/branches/feature/requirementsCommits";

const ListBranches = () => {
  function getData() {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setBranches(res.data);
    });
  }
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      {branches.map((element, index) => {
        return (
          <Branch
            key={index}
            eventKey={index}
            title={element.name}
            branchURL={element?.commit?.url}
          ></Branch>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;

export default ListBranches;
