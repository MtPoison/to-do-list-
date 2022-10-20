/* Custom Dragula JS */


dragula([
  document.getElementById("to-do"),
  document.getElementById("doing"),
  document.getElementById("done"),
  document.getElementById("trash")
]);

removeOnSpill: false
.on("drag", function(el) {
  el.className.replace("ex-moved", "");
})
.on("drop", function(el) {
  el.className += "ex-moved";
})
.on("over", function(el, container) {
  container.className += "ex-over";
 })
.on("out", function(el, container) {
  container.className.replace("ex-over", "");
});
 
/* Vanilla JS to add a new task */
function addTask() {
/* Get task text from input */
var inputTask = document.getElementById("taskText").value;
/* Get column name from the select*/
var ul_column = document.getElementById("categorie").value;

if (ul_column != "") {
    /* Create li with a class named "task" */
  var li = document.createElement("li");
  li.setAttribute("class", "task");

  /* Create p with task text */
  var p = document.createElement("p");
  p.innerText = inputTask;

  /* Add p to li childs */
  li.appendChild(p);
  /* Add task to the to column */
  document.getElementById(ul_column).appendChild(li);

  /* Clear task text from input after adding task */
  document.getElementById("taskText").value = "";
}
}

/* 'Trash' column */
function emptyTrash() {
/* Clear tasks from 'Trash' column */
document.getElementById("trash").innerHTML = "";
}
