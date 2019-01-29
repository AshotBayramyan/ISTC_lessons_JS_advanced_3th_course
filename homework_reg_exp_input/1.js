function blur1(x){
    node = document.createElement("SPAN");
    node.className = "error";
    if(x.getAttribute("placeholder") === "Username"){
        if (x.value.search("^[a-zA-Z]+$") === -1){
            textnode = document.createTextNode("barev dzez");
            node.appendChild(textnode);
            x.parentElement.appendChild(node)
        }
        else {
            if (document.getElementsByClassName("error").length > 0 ){
                x.nextElementSibling.remove()
            }
        }
    } else if (x.getAttribute("placeholder") === "Password" || x.getAttribute("placeholder") === "Reapet your password"){
        if (document.getElementsByClassName("inp")[2].value ==! document.getElementsByClassName("inp")[3].value){
            textnode = document.createTextNode("barev dzez hhhhh");
            node.appendChild(textnode);
            if (x.getAttribute("placeholder") === "Password"){
                document.getElementsByClassName("inp")[2].parentElement.appendChild(node)
            } else {
                document.getElementsByClassName("inp")[3].parentElement.appendChild(node)
            }
        }
    }
}