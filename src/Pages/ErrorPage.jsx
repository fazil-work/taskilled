import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <ErrorStyle>
      <h1>{window.location.pathname} - Axtardığınız səhifə mövcud deyil</h1>
    </ErrorStyle>
  )
}

export default ErrorPage

const ErrorStyle = styled.div`
  h1{
    text-align: center;
    margin: 10rem 0;
    padding: 1rem;
  }
`