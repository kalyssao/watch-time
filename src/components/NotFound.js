import React from "react";
import "./NotFound.css";
import styled from 'styled-components'

const NotFound = styled.div `
    padding-top: 100px;
    text-align: center;
`

export default function NotFound() {
  return (
    <NotFound>
      <h3>Sorry, page not found!</h3>
    </NotFound>
  );
}