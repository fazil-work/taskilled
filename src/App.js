import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";
import { Notifications } from "./Pages/Notifications";
import { UserSettings } from "./Pages/UserSettings";
import { ConsultantProfile } from "./Pages/ConsultantProfile";
import { ConsultantAssignments } from "./Pages/ConsultantAssignments";
import { CreateAssignment } from "./Pages/CreateAssignment";
import { Landing } from "./Pages/Landing";
import { Home } from "./Pages/Home";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Landing />
                {/* <div className="mid">
                  <Sidebar />
                </div> */}
                <Footer dark="red" extended />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
                {/* <div className="mid">
                  <Sidebar />
                </div> */}
                <Footer dark="red" extended />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <Navbar />
                <div className="mid">
                  <Sidebar />
                  <UserSettings />
                </div>
                <Footer extended />
              </>
            }
          />
          <Route
            path="/assignments"
            element={
              <>
                <Navbar />
                <div className="mid">
                  <Sidebar />
                  <ConsultantAssignments />
                </div>
                <Footer extended />
              </>
            }
          />
          <Route
            path="/create-assignment"
            element={
              <>
                <CreateAssignment />
                <Footer />
              </>
            }
          />
          <Route
            path="/consultant"
            element={
              <>
                <Navbar />
                <ConsultantProfile />
                <Footer extended />
              </>
            }
          />
          <Route
            path="/notifications"
            element={
              <>
                <Navbar />
                <Notifications />
              </>
            }
          />
        </Routes>
      </GlobalStyle>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyle = styled.div`
  background-color: #f8f8f8;
  .mid {
    display: grid;
    grid-template-columns: 1fr 3.2fr;
    grid-gap: 2rem;
    margin: 2rem auto 9rem auto;
    width: 84%;
  }
  @media screen and (max-width: 1114px) {
    .mid {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin: 2rem auto 9rem auto;
    }
  }
  @media screen and (max-width: 768px) {
    .mid {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
      margin: 2rem auto;
      div:nth-child(1) {
        order: 2;
      }
    }
  }
`;
