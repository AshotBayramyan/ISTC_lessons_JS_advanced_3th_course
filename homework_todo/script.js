document.getElementById("buttId").addEventListener("click", addToDoList)
var emp = document.getElementsByClassName("empty")[0]
var sec = document.getElementsByTagName("section")[0]
var taskList = []                                       
var iconsClass = {                                          
        check: 'far fa-check-circle',
        trash: "fas fa-trash"
    }
function addToDoList(){
  let inp = document.getElementById("inpId")
  if (inp.value == "") {
    emp.innerHTML = "Please enter the task!"
    return
}

taskList.unshift({task: inp.value, made: false})
    inp.value = ""                             
    createTaskTable(taskList)
}

function createTaskTable(list){
    sec.innerHTML = ""


for (let i = 0; i < list.length; i++) {
    var block = document.createElement('div');

    var span = document.createElement('span');
    span.appendChild(document.createTextNode(i));

    var text = document.createElement('p');
    text.appendChild(document.createTextNode(list[i].task));

    var iconCheck = document.createElement('i');
    iconCheck.className = iconsClass.check;

    var iconTrash = document.createElement('i');
    iconTrash.className = iconsClass.trash;


    if (list[i].made) {                          
        block.className = 'done'; 
    } else {
        block.className = 'not_done'; 
        iconCheck.addEventListener('click', taskDone);
    }
    iconTrash.addEventListener('click', deleteTask);

    block.appendChild(span);
    block.appendChild(iconCheck);
    block.appendChild(text);
    block.appendChild(iconTrash);
    sec.appendChild(block);

}

}

function taskDone(event) {
var taskId = event.target.parentElement.children[0].innerHTML;
taskList[taskId].made = true;
createTaskTable(taskList);
}

function deleteTask(event) {
var taskId = event.target.parentElement.children[0].innerHTML;
taskList.splice(taskId, 1);
createTaskTable(taskList);
}