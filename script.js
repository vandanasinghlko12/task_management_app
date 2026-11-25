const input = document.getElementById("text-input");
const categoryItem = document.getElementById("category");
const dateItem = document.getElementById("date-input");
const selectStatus = document.getElementById("status");
const addTaskButton = document.getElementById("btn");
const addFilterStatus = document.getElementById("filterStatus");
const tasks = [];
addTaskButton.addEventListener("click", () => {
  let inputField = input.value;
  let categoryField = categoryItem.value;
  let dateItemField = dateItem.value;
  let statusInput = selectStatus.value;

  let task = {
    input: inputField,
    categoryItem: categoryField,
    dateItem: dateItemField,
    selectStatus: statusInput,
  };

  tasks.push(task);

  console.log(tasks);
  filterTasks();
});

function displayTasks(taskArray = tasks) {
  const taskList = document.getElementById("taskItem");
  taskList.innerHTML = "";
  for (let i = 0; i < taskArray.length; i++) {
    let li = document.createElement("li");
    let select = document.createElement("select");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    li.textContent =
      taskArray[i].input +
      " " +
      " " +
      taskArray[i].categoryItem +
      " " +
      " " +
      taskArray[i].dateItem +
      " " +
      " " +
      taskArray[i].selectStatus;

    option1.value = "pending";
    option1.textContent = "Pending";
    option2.value = "inProgress";
    option2.textContent = "In Progress";
    option3.value = "completed";
    option3.textContent = "Completed";
    option4.value = "overdue";
    option4.textContent = "Overdue";

    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    let today = new Date().toLocaleDateString("en-CA");
    if (
      taskArray[i].dateItem < today &&
      taskArray[i].selectStatus !== "completed"
    ) {
      taskArray[i].selectStatus = "overdue";
    }

    select.value = taskArray[i].selectStatus;
    select.addEventListener("change", () => {
      taskArray[i].selectStatus = select.value;
      filterTasks();
    });

    li.appendChild(select);

    taskList.appendChild(li);
  }
}

function filterTasks() {
  let statusValue = addFilterStatus.value;
  let filteredTask = tasks.filter((task) => {
    return statusValue === "all" || task.selectStatus === statusValue;
  });
  displayTasks(filteredTask);
}
addFilterStatus.addEventListener("change", filterTasks);
