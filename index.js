const tasks = [
  {
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet",
    assignee: "Alice",
    dueDate: new Date(2023, 3, 10),
    status: "open",
  },
  {
    title: "Task 2",
    description: "Consectetur adipiscing elit",
    assignee: "Bob",
    dueDate: new Date(2023, 3, 15),
    status: "in progress",
  },
  {
    title: "Task 3",
    description: "Sed do eiusmod tempor incididunt",
    assignee: "Charlie",
    dueDate: new Date(2023, 3, 18),
    status: "completed",
  },
  {
    title: "Task 4",
    description: "Ut enim ad minim veniam",
    assignee: "Alice",
    dueDate: new Date(2023, 3, 20),
    status: "open",
  },
  {
    title: "Task 5",
    description: "Duis aute irure dolor in reprehenderit",
    assignee: "Dave",
    dueDate: new Date(2023, 3, 27),
    status: "in progress",
  },
  {
    title: "Task 6",
    description: "Excepteur sint occaecat cupidatat non proident",
    assignee: "Eva",
    dueDate: new Date(2023, 4, 5),
    status: "open",
  },
  {
    title: "Task 7",
    description: "Sunt in culpa qui officia deserunt mollit",
    assignee: "Frank",
    dueDate: new Date(2023, 4, 8),
    status: "in progress",
  },
  {
    title: "Task 8",
    description: "Excepteur sint occaecat cupidatat non proident",
    assignee: "Grace",
    dueDate: new Date(2023, 4, 12),
    status: "completed",
  },
  {
    title: "Task 9",
    description: "Sunt in culpa qui officia deserunt mollit",
    assignee: "Alice",
    dueDate: new Date(2023, 4, 15),
    status: "open",
  },
  {
    title: "Task 10",
    description: "Lorem ipsum dolor sit amet",
    assignee: "Helen",
    dueDate: new Date(2023, 4, 20),
    status: "in progress",
  },
  {
    title: "Task 11",
    description: "Adipiscing elit, sed do eiusmod tempor incididunt",
    assignee: "Isaac",
    dueDate: new Date(2023, 2, 5),
    status: "completed",
  },
  {
    title: "Task 12",
    description: "Dolore magna aliqua. Ut enim ad minim veniam",
    assignee: "Jane",
    dueDate: new Date(2023, 2, 10),
    status: "open",
  },
  {
    title: "Task 13",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    assignee: "Kevin",
    dueDate: new Date(2023, 2, 15),
    status: "in progress",
  },
  {
    title: "Task 14",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    assignee: "Alice",
    dueDate: new Date(2023, 2, 20),
    status: "open",
  },
  {
    title: "Task 15",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    assignee: "Linda",
    dueDate: new Date(2023, 2, 25),
    status: "completed",
  },
  {
    title: "Task 16",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    assignee: "Mike",
    dueDate: new Date(2023, 3, 5),
    status: "open",
  },
  {
    title: "Task 17",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    assignee: "Nancy",
    dueDate: new Date(2023, 3, 8),
    status: "in progress",
  },
  {
    title: "Task 18",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    assignee: "Oliver",
    dueDate: new Date(2023, 3, 12),
    status: "completed",
  },
  {
    title: "Task 19",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    assignee: "Paula",
    dueDate: new Date(2023, 3, 16),
    status: "open",
  },
  {
    title: "Task 20",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    assignee: "Quincy",
    dueDate: new Date(2023, 3, 22),
    status: "in progress",
  },
];

function generateStatistics(tasks) {
  const statistics = {
    taskStatus: {
      open: 0,
      completed: 0,
      inProgress: 0,
    },
    assigneeStats: {},
    dueDateStats: {},
  };

  const firstDate = new Date(Math.min(...tasks.map((task) => task.dueDate)));

  return tasks.reduce((acc, task) => {
    const status = task.status === "in progress" ? "inProgress" : task.status;
    const updatedTaskStatus = Object.assign({}, acc.taskStatus, {
      [status]: acc.taskStatus[status] + 1,
    });

    const updatedAssigneeStats = Object.assign({}, acc.assigneeStats, {
      [task.assignee]: (acc.assigneeStats[task.assignee] || 0) + 1,
    });

    const taskDate = task.dueDate;
    const daysDifference = Math.floor(
      (taskDate - firstDate) / (1000 * 60 * 60 * 24)
    );
    const weekNumber = Math.ceil((daysDifference + 1) / 7);
    const weekKey = `week${weekNumber}`;
    const updatedDueDateStats = Object.assign({}, acc.dueDateStats, {
      [weekKey]: (acc.dueDateStats[weekKey] || 0) + 1,
    });

    return {
      taskStatus: updatedTaskStatus,
      assigneeStats: updatedAssigneeStats,
      dueDateStats: updatedDueDateStats,
    };
  }, statistics);
}

function displayTasks(tasks) {
  const tasksContainer = document.querySelector(".tasks-container");
  tasksContainer.innerHTML = "";

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>Description: <span>${task.description}</span></p>
            <p>Assignee: <span>${task.assignee}</span></p>
            <p>Due Date: <span>${task.dueDate.toLocaleDateString()}</span></p>
            <p>Status: <span>${task.status}</span></p>
        `;
    tasksContainer.appendChild(taskDiv);
  });
}

function displayStatistics(statistics) {
  const taskStatusList = document.querySelector(".task-status-list");
  const assigneeStatsList = document.querySelector(".assignee-stats-list");
  const dueDateStatsList = document.querySelector(".due-date-stats-list");
  const container = document.querySelector(".statistics-container");

  taskStatusList.innerHTML = "";
  assigneeStatsList.innerHTML = "";
  dueDateStatsList.innerHTML = "";

  Object.entries(statistics.taskStatus).map(([status, count]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${status}: ${count}`;
    taskStatusList.appendChild(listItem);
  });

  Object.entries(statistics.assigneeStats).map(([assignee, count]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${assignee}: ${count}`;
    assigneeStatsList.appendChild(listItem);
  });

  const sortedWeeks = Object.keys(statistics.dueDateStats).sort((a, b) => {
    return Number(a.replace("week", "")) - Number(b.replace("week", ""));
  });

  sortedWeeks.forEach((week) => {
    const count = statistics.dueDateStats[week];
    const listItem = document.createElement("li");
    listItem.textContent = `${week}: ${count}`;
    dueDateStatsList.appendChild(listItem);
  });

  container.style.display = "flex";
}

window.onload = function () {
  displayTasks(tasks);
};

document
  .querySelector(".generate-stats-btn")
  .addEventListener("click", function () {
    const statistics = generateStatistics(tasks);
    displayStatistics(statistics);
  });
