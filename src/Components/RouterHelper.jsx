import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

export function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function ShowNavbar(props) {

  const { pathname } = useLocation();
  const [includesPage, setIncludesPage] = useState(true);

  useEffect(() => {
    setIncludesPage(props.pages.includes(pathname));
  }, [pathname]);

  return includesPage === false && <Navbar register searchbar />;
}

export function ShowFooter(props) {

  const { pathname } = useLocation();
  const [includesPage, setIncludesPage] = useState(true);

  useEffect(() => {
    setIncludesPage(props.pages.includes(pathname));
  }, [pathname]);

  return includesPage === false && <Footer dark extended />;
}

export function ShowSidebar(props) {
  
  const { pathname } = useLocation();
  const [includesPage, setIncludesPage] = useState(true);

  useEffect(() => {
    setIncludesPage(props.pages.includes(pathname));
  }, [pathname]);

  return includesPage === true ? (
    <WithSidebarStyle>
      <Sidebar />
      {props.children}
    </WithSidebarStyle>
  ) : (
    <>{props.children}</>
  );
}

const WithSidebarStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.2fr;
  grid-gap: 2rem;
  margin: 2rem auto 9rem auto;
  width: 84%;
  @media screen and (max-width: 1114px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin: 2rem auto 9rem auto;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin: 2rem auto;
    div:nth-child(1) {
      order: 2;
    }
  }
`;
