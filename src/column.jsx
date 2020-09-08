import React from "react";
import styled from "styled-components";
// more info on STYLED COMPONENTS looks FUN! : https://styled-components.com/
//
import Task from "./task";

// this container will WRAP the columns
// here I am using the styled-components library :  https://github.com/styled-components/styled-components/issues/701
const Container = styled.div`
  border: 2px solid olive;
  width: 60vw;
  height: 60vh;
`;
const Title = styled.h3`
  padding: 8px;
  color: red;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <TaskList>
          {this.props.tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </TaskList>
      </Container>
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

*/
