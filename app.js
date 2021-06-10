const bars=document.querySelector(".toggle-btn");
const close=document.querySelector(".close-btn");
const defaultsection=document.querySelector(".default-section");
const blacksection=document.querySelector(".black-section");

(window.width<=800);
{
bars.addEventListener("click",function(){
   defaultsection.classList.add("block");
   blacksection.classList.add("visible");

   // console.log("hello");
});

close.addEventListener("click",function(){
   defaultsection.classList.remove("block");
   blacksection.classList.remove("visible");

   // console.log("hello");
});
};
