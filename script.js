var modebtn = document.querySelector("button");
var body = document.querySelector("body");
var currMode = "light";

modebtn.addEventListener("click", ()=>{
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})