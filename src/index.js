document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value.trim();

    if(taskDescription === ''){
      alert("Enter a task!");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const clearBtn = document.createElement("button");
    clearBtn.textContent = "X";
    clearBtn.addEventListener("click", function(){
      taskItem.remove();
    });
    taskItem.appendChild(clearBtn);
    taskList.appendChild(taskItem);
    taskInput.value = ""; 
  });
});
