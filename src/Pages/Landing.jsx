import React from "react"
import styled from "styled-components"
import { LandingComponent } from "../Components/LandingComponent"

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingComponent/>
    </LandingWrapper>
  )
}

export default Landing

const LandingWrapper = styled.div`
  background-color: #fff;
`