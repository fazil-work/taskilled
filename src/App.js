import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop, ShowFooter, ShowNavbar, ShowSidebar, } from "./Components/RouterHelper";
import { AppContext } from "./Context/context";
import Spinner from "./Components/Spinner";
const Home = lazy(() => import("./Pages/Home"));
const Landing = lazy(() => import("./Pages/Landing"));
const Course = lazy(() => import("./Pages/Course"));
const Notifications = lazy(() => import("./Pages/Notifications"));
const UserSettings = lazy(() => import("./Pages/UserSettings"));
const ConsultantProfile = lazy(() => import("./Pages/ConsultantProfile"));
const ConsultantAssignments = lazy(() => import("./Pages/ConsultantAssignments"));
const CreateAssignment = lazy(() => import("./Pages/CreateAssignment"));
const WeekDetails = lazy(() => import("./Pages/WeekDetails"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));

function App() {

  let [user, setUser] = useState({});
  let [isLoading, setIsLoading] = useState(false);

  const sidebarPagesArr = ["/settings", "/assignments"];
  const noNavbarPagesArr = ["/create-assignment", "/week-details"];
  const noFooterPagesArr = ["/create-assignment", "/week-details"];

  return (
    <AppContext.Provider value={{ }}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <ScrollToTop />
          <ShowNavbar pages={noNavbarPagesArr} userLoggedIn={user}/>
          <ShowSidebar pages={sidebarPagesArr}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/course" element={<Course />} />
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
    </AppContext.Provider>
  );
}

export default App;
