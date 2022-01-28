import styled from "styled-components";
import React, { useContext, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { AppContext } from "../Context/context";

export function ScrollToTop() {

  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function ShowNavbar() {
  
  const { user, noNavbarPagesArr } = useContext(AppContext);

  const { pathname } = useLocation();
  const [ includesPage, setIncludesPage ] = useState(true);

  useLayoutEffect(() => {
    setIncludesPage(noNavbarPagesArr.includes(pathname));
  }, [pathname]);
  
  if(includesPage === false) {
    return user === true ? <Navbar/> : <Navbar register/>
  }else{
    return null
  }
}

export function ShowFooter() {

  const { noFooterPagesArr } = useContext(AppContext);

  const { pathname } = useLocation();
  const [ includesPage, setIncludesPage ] = useState(true);

  useLayoutEffect(() => {
    setIncludesPage(noFooterPagesArr.includes(pathname));
  }, [pathname]);

  return includesPage === false && <Footer/>;
}

export function ShowSidebar(props) {

  const { user, sidebarPagesArr } = useContext(AppContext);
  
  const { pathname } = useLocation();
  const [ includesPage, setIncludesPage ] = useState(true);

  useLayoutEffect(() => {
    setIncludesPage(sidebarPagesArr.includes(pathname));
  }, [pathname]);

  if(includesPage === true && user) {
    return(
      <WithSidebarStyle>
        <Sidebar />
        {props.children}
      </WithSidebarStyle>
    )
  } else {
    return <>{props.children}</>
  }
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
