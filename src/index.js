import React from "react";
import ReactDOM from "react-dom";
import initialData from "./initial-data";
import Column from './column';
//
import "./scss/main.scss";
//
//
class App extends React.Component {
  //
  // where the data of the tasks is passed
  state = initialData;
  //
  //
  //
  render() {
    // The columnOrder array stores the order in which I want to render out the columns in
    // so I am going to map over that, in order to render out the columns
    return this.state.columnOrder.map((columnId) => {
      // now I need to PULL the column OUT of the STATE
      const column = this.state.columns[columnId];
      // And I will also get the task associated with that column
      const tasks = column.taskIds.map((taskId) => this.state.tasks[taskId]);


      /* here you will return the title of the column
      return column.title; */
      // but I want to render the column component rather than just a title


return <Column key={column.id} column={column} tasks={tasks} />;


    });
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
