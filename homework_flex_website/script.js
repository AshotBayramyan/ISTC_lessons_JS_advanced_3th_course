// TOP ICONS
for(i = 0; i < 4; i++){
    var topDiv = document.createElement("div");
    topDiv.className = "topicon";
    document.getElementById("topIcons").appendChild(topDiv);
}
    var topDiv = document.getElementById("topIcons").children;
    topDiv[0].className = "icon1";
    topDiv[1].className = "icon2";
    topDiv[2].className = "icon3";
    topDiv[3].className = "icon4";

   
var toggDiv = document.createElement("div");
toggDiv.className = "toggleClass";
toggDiv.id = "togg";
document.getElementById("menu").appendChild(toggDiv);
    
    var toggDiv = document.getElementById("menu").children;


    document.getElementById("logo").onclick = function(){logoClick()};
    function logoClick() {

        togg.classList.toggle("show");  
      }

      var ul = document.getElementById("xxx");
      togg.appendChild(ul);


// TOP SQUARES
for(i = 0; i < 4; i++){
    var sqDiv = document.createElement("div");
    sqDiv.className = "square";
    document.getElementById("topSquare").appendChild(sqDiv);
}
    sqDiv = document.getElementById("topSquare").children;
    sqDiv[0].className = "square0";
    sqDiv[1].className = "square1";
    sqDiv[2].className = "square2";
    sqDiv[3].className = "square3";

// BOTTON SQUAERS
for(i = 0; i < 8; i++){
    var sqDivBot = document.createElement("div");
    sqDivBot.className = "square";
    document.getElementById("bottonSquare").appendChild(sqDivBot);
}
    sqDivBot = document.getElementById("bottonSquare").children;
    sqDivBot[0].className = "botSquare0";
    sqDivBot[1].className = "botSquare1";
    sqDivBot[2].className = "botSquare2";
    sqDivBot[3].className = "botSquare3";
    sqDivBot[4].className = "botSquare4";
    sqDivBot[5].className = "botSquare5";
    sqDivBot[6].className = "botSquare6";
    sqDivBot[7].className = "botSquare7";