// body
let bod = document.createElement("div")
bod.id = ("bodId")
document.body.insertBefore(bod, document.getElementsByTagName("script")[0])

// input div
let inpDiv = document.createElement("div")
inpDiv.id = ("inpDivId")
document.getElementById("bodId").appendChild(inpDiv)

// input
let inp = document.createElement("input")
inp.id = ("inpId")
document.getElementById("inpDivId").appendChild(inp)
document.getElementById("inpId").placeholder = "add a new todo item ..."

// button
let butt = document.createElement("button")
butt.id = ("buttId")
document.getElementById("inpDivId").appendChild(butt)
butt.appendChild(document.createTextNode("Add"))
document.getElementById("buttId").addEventListener("click", addToDoList)

var err = document.getElementsByClassName('error')[0]
var section = document.getElementsByTagName('section')[0]
var taskList = []                                       
var iconsClass = {                                          
        check: 'far fa-check-square',
        trash: 'fas fa-trash-alt'
    }


function addToDoList(){
  let inp = document.getElementById("inpId")
  if (inp.value == '') {
    err.innerHTML = 'Please enter the task!'; 
    return;
}
err.innerHTML = '';

taskList.unshift( {task: inp.value, made: false} );    
    inp.value = '';                                       
    createTaskTable(taskList); 

}

// forms
let formDiv = document.createElement("div")
formDiv.id = "formDivId"
document.getElementById("bodId").appendChild(formDiv)

// let formDiv = document.getElementById("bodId").children


//     document.getElementById("buttId").onclick = function(){newForm()}
//     function newForm() {

//         formDiv.appendChild("formDiv")
//       }

    //   var ul = document.getElementById("xxx")
    //   togg.appendChild(ul)