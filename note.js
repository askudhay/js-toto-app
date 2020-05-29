function addTask() {
  let taskIPObj = document.getElementById("taskInput");
  let task = taskIPObj.value;

  if (task.trim() == "") {
    alert("Please enter Task before you try to add!");
    return;
  }

  let textNode = document.createTextNode(task);
  let pNode = document.createElement("p");

  pNode.appendChild(textNode);
  document.getElementById("tasks").appendChild(pNode);
  taskIPObj.value = "";
}
