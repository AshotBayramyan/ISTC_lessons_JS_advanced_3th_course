var ul = document.getElementById("productList")

fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(response => {
    for(i = 0; i < 5; i++){
        console.log(response, "hello")
        var li = document.createElement("li")
        ul.appendChild(li).innerHTML = response[i]
    }

})
