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
butt.appendChild(document.createTextNode("Add"));