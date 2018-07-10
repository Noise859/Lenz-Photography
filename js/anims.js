function barGrow(){
  setTimeout(function(){
    if(body.offsetWidth > 450) {
      document.getElementById("vertBar").style.left = "calc(50% - 200px)";
      document.getElementById("vertBar").style.width = "400px";
    }
    else {
      document.getElementById("vertBar").style.left = "calc(50% - 150px)";
      document.getElementById("vertBar").style.width = "300px";
    }
  }, 1000);
  setTimeout(function(){
    document.getElementById("vertBar").style.transform = "rotate(0deg)";
  }, 1500);
  setTimeout(function(){
    document.getElementById("name").style.opacity = "1";
  }, 2000);
}

function toggleNav(){
  if(!navTog){
    document.getElementById("slideOut").style.marginLeft = "0";
    document.getElementById("overlay").style.display = "block";
    if(body.offsetWidth > 450){
      document.getElementById("nav").style.left = "355px";
    }
    else {
      document.getElementById("nav").style.left = "335px";
    }
    document.getElementById("bar1").style.backgroundColor = "black";
    document.getElementById("bar1").style.transform = "rotate(45deg)";
    document.getElementById("bar1").style.top = "-8px";
    document.getElementById("bar2").style.display = "none";
    document.getElementById("bar3").style.backgroundColor = "black";
    document.getElementById("bar3").style.transform = "rotate(-45deg)";
    document.getElementById("bar3").style.top = "8px";
  }
  else {
    document.getElementById("slideOut").style.marginLeft = "-400px";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("bar1").style.backgroundColor = "white";
    document.getElementById("bar1").style.transform = "rotate(0deg)";
    document.getElementById("bar1").style.top = "0";
    document.getElementById("bar2").style.display = "block";
    document.getElementById("bar3").style.backgroundColor = "white";
    document.getElementById("bar3").style.transform = "rotate(0deg)";
    document.getElementById("bar3").style.top = "0";
    document.getElementById("nav").style.left = "20px";
  }
  navTog = !navTog;
}