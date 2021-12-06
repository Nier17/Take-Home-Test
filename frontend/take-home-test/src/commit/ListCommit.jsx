import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Commit from "../components/Commit";

const URL = "http://localhost:3001/getCommits";

const ListCommit = () => {
  function getData() {
    axios.get(URL).then((res) => {
      setCommits(res.data);
    });
  }
  const [commits, setCommits] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {commits.map((element, index) => {
        console.log(element);
        return <Commit key={index} />;
      })}
    </Container>
  );
};

const Container = styled.div``;

export default ListCommit;
