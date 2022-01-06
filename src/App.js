import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserSettings from "./Pages/UserSettings";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/Sidebar";
import { Footer } from "./Components/Footer";
import { ConsultantProfile } from "./Pages/ConsultantProfile";
import { ConsultantAssignments } from "./Pages/ConsultantAssignments";
import { CreateAssignment } from "./Pages/CreateAssignment";
import { Notifications } from "./Components/Notifications";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <div className="mid">
                  <Sidebar />
                </div>
                <Footer extended />
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
  background-color: #f9f9f9;
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
