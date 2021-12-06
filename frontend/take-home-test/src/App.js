import Sidebar from "./components/Sidebar";
import React, { useState, useEffect } from "react";
import BoardCommits from "./commit/BoardCommits";
import BoardBranches from "./branches/BoardBranches";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import BoardHome from "./home/BoardHome";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    console.log(openSidebar);
  }, [openSidebar]);
  return (
    <div>
      <BrowserRouter>
        <Sidebar></Sidebar>
        <Container open={openSidebar}>
          <Routes>
            <Route path="/commits" element={<BoardCommits />} />
            <Route path="/branches" element={<BoardBranches />} />
            <Route path="/" element={<BoardHome />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  width: 80%;
  margin-left: 280px;
  ${(props) => {
    if (props.open === true)
      css`
        margin-left: 280px;
      `;
  }}
`;

export default App;
