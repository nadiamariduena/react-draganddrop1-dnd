import React from "react";
//
//
import styled from "styled-components";
// more info on STYLED COMPONENTS looks FUN! : https://styled-components.com/
//
//
import { Droppable } from "react-beautiful-dnd";
//
import Task from "./task";
//
//

// this container will WRAP the columns
// here I am using the styled-components library :  https://github.com/styled-components/styled-components/issues/701
const Container = styled.div`
  width: 40%;
  height: auto;
  padding: 30px 10px;
`;
const Title = styled.h3`
  font-size: 1.5em;
  padding: 20px;
  color: #f6d365; ;
`;
const TaskList = styled.div`
  padding: 30px;
  // this is just a choice , it s not necessary but is good to know, this is linked to :  isDraggingOver={snapshot.isDraggingOver}
  background-color: ${(props) => (props.isDraggingOver ? "#f1f1f1f3" : "")};
`;

export default class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="page">
          <Container className="cota">
            <Title>{this.props.column.title}</Title>

            <Droppable droppableId={this.props.column.id}>
              {(provided, snapshot) => (
                <TaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

/*












                                        STYLED COMPONENTS  ***



                    **  First, let's import styled-components and create a styled.button:

                    import styled from 'styled-components'

                    const Button = styled.button``

                    This Button variable here is now a React component that you can use like any other React component!
                    This unusual backtick syntax is a new JavaScript feature called a tagged template literal.

                    You know how you can call functions with parenthesis? (myFunc()) Well, 
                    now you can also call functions with backticks! (learn more about tagged template literals)


                    CONTINUE here : https://styled-components.com/









                    export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>

        <Droppable droppableId={this.props.column.id}>
          Droppable has one required PROP, the ID need to be unique 
       
          {(provided) => (
            <TaskList innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
              
              
              placeholder is a REACT element that is used to increase
              the available space in a DROPPABLE during a drag when its 
              needed, the PLACEHOLDER needs to be added as a child of the component
              that you designate as the droppable our droppable is now SET UP.

              Go to the task component and make it draggable
              
            
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}

*/
