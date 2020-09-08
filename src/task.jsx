import React from "react";
import styled from "styled-components";
//
//
import { Draggable } from "react-beautiful-dnd";
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
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

/* 
{

                     A DRAGGABLE has 2 required PROPS

                     1_ a draggable ID, which I will assign to the task ID:
                                 draggableId={this.props.task.id}

                     2_ Secondly it requires an index, I am not passing an INDEX,
                     So due to that we need to pass in inside the column.jsx, but type the
                     following first:
                       index={this.props.index}
          
          
}
*/

/*

At certain POINT you are going to have an error in the tutorial
, it has something to do with the innerRef inside the column.jsx and the task.jsx,
you have to replace the innerRef for this ref={provided.innerRef} , like so:




export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}








*/
