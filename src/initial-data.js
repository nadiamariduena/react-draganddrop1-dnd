const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Prepare your coffee " },
    "task-2": { id: "task-2", content: "Search for new challenging tutorials" },
    "task-3": {
      id: "task-3",
      content: "Analyse the tutorials and take notes ",
    },
    "task-4": { id: "task-4", content: "Try to recreate them" },
    "task-5": { id: "task-5", content: "Positive procrastination" },
    "task-6": {
      id: "task-6",
      content: "Read  article about something different than coding",
    },
    "task-7": {
      id: "task-7",
      content: "Laugh as much as you can",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "TODO",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
      ],
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
