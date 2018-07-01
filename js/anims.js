function barGrow(){
  setTimeout(function(){
    document.getElementById("vertBar").style.left = "calc(50% - 200px)";
    document.getElementById("vertBar").style.width = "400px";
  }, 1000);
  setTimeout(function(){
    document.getElementById("vertBar").style.transform = "rotate(0deg)";
  }, 1500);
  setTimeout(function(){
    document.getElementById("name").style.opacity = "1";
  }, 2000);
}