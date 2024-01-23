var menu = document.querySelector(".menu")
var silder =document.querySelector(".nav2 ul")
var croxbtn= document.querySelector(".cls-menu")

menu.addEventListener("click",()=>{
      silder.style.right ="10%";   
      menu.style.display ="none";
      croxbtn.style.display="block";
})
croxbtn.addEventListener("click",() => {
            croxbtn.style.display = "none";
            menu.style.display = "block";
            silder.style.right = "500%";
      })
      var shutter= document.querySelector("#bg")
      setTimeout(function(){
          shutter.style.top="-100%"
      },3500)
