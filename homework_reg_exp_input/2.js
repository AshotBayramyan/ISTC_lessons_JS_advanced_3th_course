function blur1(x){
    ph = x.getAttribute("placeholder");
    inp = document.getElementsByClassName("inp");
    node = document.createElement("SPAN");
    node.className = "error";
    if (ph === "Username") {
      if (x.value.search("^[a-zA-Z]+$") === -1 && x.value != ''){
        textnode = document.createTextNode("U can't use nothing besides letters.");
        node.appendChild(textnode);
        x.parentElement.appendChild(node);
      } else if (document.getElementsByClassName("error").length > 0 ) {
        document.getElementsByClassName("error")[0].remove()
      }
    } else if (ph === 'Email') {
      a = x.value.split('@');
      if (a.length === 2 && a[0].length > 1 && a[1].split('.').length === 2 && a[1].split('.')[0].length > 1 && a[1].split('.')[1].length > 1) {
        if (document.getElementsByClassName("error").length > 0 ) {
          document.getElementsByClassName("error")[0].remove()
        }
      } else if (x.value.length != '' && document.getElementsByClassName("error").length != 1) {
        textnode = document.createTextNode("EMAILSSSS");
        node.appendChild(textnode);
        x.parentElement.appendChild(node);
      }
    } else if (ph === 'Password' || ph === "Reapet your password") {
      if (inp[2].value !== inp[3].value && inp[2].value !== '' && inp[3].value !== '') {
        textnode = document.createTextNode("Passwords do not match");
        node.appendChild(textnode);
        if (ph === 'Password') {
          inp[2].parentElement.appendChild(node);
        } else {
          inp[3].parentElement.appendChild(node);
        }
      } else if (document.getElementsByClassName("error").length > 0 ) {
        document.getElementsByClassName("error")[0].remove()
      }
    }
}
