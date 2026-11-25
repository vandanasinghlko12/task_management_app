const input = document.getElementById("text-input");
const categoryItem = document.getElementById("category");
const dateItem = document.getElementById("date-input");
const selectStatus = document.getElementById("status");
const addTaskButton = document.getElementById("btn");
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
  const taskList = document.getElementById("taskItem");
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    let select =document.createElement("select");
   let option1 =document.createElement("option");
      let option2 =document.createElement("option");
         let option3 =document.createElement("option");
    li.textContent =
      tasks[i].input +
      " " +
      " " +
      tasks[i].categoryItem +
      " " +
      " " +
      tasks[i].dateItem +
      " " +
      " " +
      tasks[i].selectStatus;
    

    option1.value="pending";
    option1.textContent="Pending"
       option2.value="in Progress";
       option2.textContent="In Progress";
          option3.value="completed";
            option3.textContent="Completed";
 
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.value=tasks[i].selectStatus
    li.appendChild(select);
    

  
 taskList.appendChild(li);
   
  }
});
