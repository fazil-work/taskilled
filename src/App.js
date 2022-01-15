import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Landing } from "./Pages/Landing";
import { Notifications } from "./Pages/Notifications";
import { UserSettings } from "./Pages/UserSettings";
import { ConsultantProfile } from "./Pages/ConsultantProfile";
import { ConsultantAssignments } from "./Pages/ConsultantAssignments";
import { CreateAssignment } from "./Pages/CreateAssignment";
import { ErrorPage } from "./Pages/ErrorPage";
import { ScrollToTop, ShowFooter, ShowNavbar, ShowSidebar } from "./Components/RouterHelper";

function App() {
  const sidebarPagesArr = ["/settings", "/assignments"];
  const noNavbarPagesArr = ["/create-assignment"];
  const noFooterPagesArr = ["/create-assignment"];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ShowNavbar pages={noNavbarPagesArr} />
      <ShowSidebar pages={sidebarPagesArr}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/assignments" element={<ConsultantAssignments />} />
          <Route path="/create-assignment" element={<CreateAssignment />} />
          <Route path="/consultant" element={<ConsultantProfile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ShowSidebar>
      <ShowFooter pages={noFooterPagesArr} />
    </BrowserRouter>
  );
}

export default App;
