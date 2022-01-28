import React, { lazy, useContext } from "react";
import { SuspenseSpinner } from "./Components/SuspenseSpinner";
import { AppContext, AppContextProvider } from "./Context/context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop, ShowFooter, ShowNavbar, ShowSidebar, } from "./Components/RouterHelper";

const ErrorPage = lazy(() => import("./Pages/ErrorPage"));
const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Landing = lazy(() => import("./Pages/Landing"));
const Course = lazy(() => import("./Pages/Course"));
const Notifications = lazy(() => import("./Pages/Notifications"));
const UserSettings = lazy(() => import("./Pages/UserSettings"));
const ConsultantProfile = lazy(() => import("./Pages/ConsultantProfile"));
const ConsultantAssignments = lazy(() => import("./Pages/ConsultantAssignments"));
const CreateAssignment = lazy(() => import("./Pages/CreateAssignment"));
const WeekDetails = lazy(() => import("./Pages/WeekDetails"));


function App() {
  return (
    <AppContextProvider>
      <SuspenseSpinner>
        <BrowserRouter>
          <ScrollToTop/>
          <ShowNavbar/>
          <ShowSidebar>
            <RouteLogic/>
          </ShowSidebar>
          <ShowFooter/>
        </BrowserRouter>
      </SuspenseSpinner>
    </AppContextProvider>
  );
}
export default App;


function RouteLogic() {
  let { user } = useContext(AppContext);

  return(
    user === true ?
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

      // Redirects to the "/" page if the user is logged in
      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="/register" element={<Navigate to="/" />} />
    </Routes>
    :
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      // Redirects to the "/login" page if the user is NOT logged in
      {!user && <Route path="*" element={<Navigate to="/login" />} />}
    </Routes>
  )
}