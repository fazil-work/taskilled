import React, { Suspense } from 'react'
import styled from 'styled-components'

export const SuspenseSpinner = (props) => {
  return (
    <Suspense fallback={<Spinner/>}>
      {props.children}
    </Suspense>
  );
};

function Spinner() {
  return (
    <SpinnerStyle>
      <div id="loading"></div>
    </SpinnerStyle>
  )
}

const SpinnerStyle = styled.div`
  #loading {
    display: flex;
    justify-content: center;
    margin: 20rem auto 0 auto;
    width: 66px;
    height: 66px;
    border: 5px solid #ffe01b;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
    to { -webkit-transform: rotate(360deg); }
  }
`
