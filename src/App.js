import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ScrollToTop,
  ShowFooter,
  ShowNavbar,
  ShowSidebar,
} from "./Components/RouterHelper";
import Spinner from "./Components/Spinner";

const Home = lazy(() => import("./Pages/Home"));
const Landing = lazy(() => import("./Pages/Landing"));
const Notifications = lazy(() => import("./Pages/Notifications"));
const UserSettings = lazy(() => import("./Pages/UserSettings"));
const ConsultantProfile = lazy(() => import("./Pages/ConsultantProfile"));
const ConsultantAssignments = lazy(() => import("./Pages/ConsultantAssignments"));
const CreateAssignment = lazy(() => import("./Pages/CreateAssignment"));
const WeekDetails = lazy(() => import("./Pages/WeekDetails"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

function App() {
  const sidebarPagesArr = ["/settings", "/assignments"];
  const noNavbarPagesArr = ["/create-assignment", "/week-details"];
  const noFooterPagesArr = ["/create-assignment", "/week-details"];

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <ScrollToTop />
        <ShowNavbar pages={noNavbarPagesArr} />
        <ShowSidebar pages={sidebarPagesArr}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/settings" element={<UserSettings />} />
            <Route path="/week-details" element={<WeekDetails />} />
            <Route path="/assignments" element={<ConsultantAssignments />} />
            <Route path="/create-assignment" element={<CreateAssignment />} />
            <Route path="/consultant" element={<ConsultantProfile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ShowSidebar>
        <ShowFooter pages={noFooterPagesArr} />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
