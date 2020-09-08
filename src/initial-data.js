const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Search for tutorials" },
    "task-2": { id: "task-2", content: "watch them 2 times" },
    "task-3": { id: "task-3", content: "then practice them" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
  },
  columnOrder: ["column-1"],
};

export default initialData;

/*










                        ** beginning

const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Search for tutorials" },
    "task-2": { id: "task-2", content: "watch them 2 times" },
    "task-3": { id: "task-3", content: "then practice them" },
  },

  // columns: this column object will be used to store the columns in our system.
  columns: {
    "column-1": {
      // we use the column id    id: "column-1",  as the KEY for looking up the column
      id: "column-1",
      //   This column below, is the TO DO column
      title: "To do",
      //   Each columns has a TASK ID's ARRAY, this array serves 2 purposes:
      taskIds: ["task-1", "task-2", "task-3"],
      //   THE 1 PURPOSE is to indicate OWNERSHIP, we know that task 1 is inside of column 1
      //  THE 2 PURPOSE of the array is to maintain order
    },
  },
  //   This PROPERTY below is called column order, that we will use to record the order of the columns

  columnOrder: ["column-1"],
};




*/
