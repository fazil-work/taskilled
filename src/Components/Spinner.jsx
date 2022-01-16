import React from 'react'
import styled from 'styled-components'

function Spinner() {
  return (
    <SpinnerStyle>
      <div id="loading"></div>
    </SpinnerStyle>
  )
}

export default Spinner

const SpinnerStyle = styled.div`
  body { margin-top: 100px; background-color: #137b85; color: #fff; text-align:center; }

  h1 {
    font: 2em 'Roboto', sans-serif;
    margin-bottom: 40px;
  }

  #loading {
    display: flex;
    justify-content: center;
    margin: 15rem auto;
    width: 66px;
    height: 66px;
    border: 5px solid #ffe01b;
    border-radius: 50%;
    border-top-color: #fff;
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
