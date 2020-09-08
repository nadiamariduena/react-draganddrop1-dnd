import React from "react";
import styled from "styled-components";
//
//
//
const Container = styled.div`
border: 1px solid lightgrey;
// internal padding of the tab of each task
padding: 8px;
margin-bottom: 8px;
border-radius: 3px;
box-shadow: 0 0 5px 1px #eee;
`;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}
