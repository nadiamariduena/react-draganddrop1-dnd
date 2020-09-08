import React from "react";
import ReactDOM from "react-dom";
//
import { DragDropContext } from "react-beautiful-dnd";
// After you import the above, wrap the content inside the return in this file, like so:
/*     <DragDropContext>
{this.state.columnOrder.map((columnId) => {
  */
//
import initialData from "./initial-data";
import Column from "./column";
//

//
import "./scss/main.scss";

//
/*
import "reset-css";


you need to have a css(where you can import it) file with all the "reset" you want, 
this file contains all what you consider necessary to start 
your css scss styles whatever like margin: 0, padding: 0; 
AND SO ON, CHECK THIS page to have an idea of what it is or just copy
his idea of reset: 

https://meyerweb.com/eric/tools/css/reset/


//What is the difference between Normalize.css and Reset CSS?
// https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css





*/

class App extends React.Component {
  //
  // where the data of the tasks is passed
  state = initialData;
  //
  //

  onDragEnd = (result) => {
    /* this function will 
    make that when you draw a task, it stays in place,
    you will see it when the drag and drop works.
    */
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
      /* if there is no destination then theres nothing that
       we need to do as a result of this drag,we can simply exit: return */
    }
    //
    //
    //

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
      /*    IF  destination.droppableId is the same as the source and 
   if the INDEX has the same  the destination as the source, IF THESE 2 are TRUE,
   then the USER drop the item back into the position that it started and so 
   we dont need to do anything */
    ) {
      return;
    }
    //
    //
    // RE order the task IDs array
    const column = this.state.columns[source.droppableId];
    // You could do the following : .columns['column-1] but its not covenable if you have
    // more than 1 column, as you will have to update it again.
    //
    // the following will create a newTaskIds array with the same content as the last one
    const newTaskIds = Array.from(column.taskIds);
    //
    //
    // now i need to move the TaskIds from its old index to its new index
    newTaskIds.splice(source.index, 1);
    // splice will modify, here it means that from this index, it will remove 1 item
    //
    // USE SPLICE again but this time you wont remove anything thats why you have the zero, then you will insert the draggable ID
    newTaskIds.splice(destination.index, 0, draggableId);
    //
    //
    // Now create a new COLUMN which has the same properties as the ,
    // old column but with the new task ID array
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    //
    //
    const newState = {
      // the spread '...' will maintain the old properties in the state object
      // but also invalidating the references of the parts that i want to change
      ...this.state,
      columns: {
        // technically right now we dont need the spread, because I only hve 1 column
        ...this.state.columns,
        // insert the new columns into this map
        [newColumn.id]: newColumn, //this line will override/annuler the existing column
      },
    };

    //
    //   //
    //   // last ******

    this.setState(newState);
    //
  };

  //
  render() {
    // The columnOrder array stores the order in which I want to render out the columns in
    // so I am going to map over that, in order to render out the columns
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {/* 
        
        A drag drop context has 3 CALLBACKS

        1_ onDragStart which its called when the drag starts

        2_ onDRagUpdate when its called when something changes during a drag, such as
           an ITEM is moved into a new position
        
        3_ onDragEnd which is called at the end of a drag


        THE ONLY required CALLBACK for a "drag drop" context is on drag end.
        
        */}
        {this.state.columnOrder.map((columnId) => {
          // now I need to PULL the column OUT of the STATE
          const column = this.state.columns[columnId];
          // And I will also get the task associated with that column
          const tasks = column.taskIds.map(
            (taskId) => this.state.tasks[taskId]
          );

          /* here you will return the title of the column
      return column.title; */
          // but I want to render the column component rather than just a title

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*

Instead of creating a component , you can also add it like that but just
in the beginning, not in serious projects:         const App = () => "hello world";


// 
// 
import React from "react";
import ReactDOM from "react-dom";

//
import "./scss/main.scss";
//
//
const App = () => "hello world";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


*/
