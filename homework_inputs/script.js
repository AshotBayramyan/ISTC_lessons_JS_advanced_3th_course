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

// forms
let formDiv = document.createElement("div")
formDiv.id = "formDivId"
document.getElementById("bodId").appendChild(formDiv)

let formDiv = document.getElementById("bodId").children


    document.getElementById("buttId").onclick = function(){newForm()}
    function newForm() {

        formDiv.appendChild("formDiv")
      }

    //   var ul = document.getElementById("xxx")
    //   togg.appendChild(ul)