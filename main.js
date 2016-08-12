document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".button");
  var result = document.querySelector(".result");
  var clear = document.querySelector(".clear");



 button.forEach(function(numButton){
   numButton.addEventListener("click", function(e){
     var number = e.target.textContent;
     result.textContent += number;
   });
 });

 clear.addEventListener("click", function(e){
   result.textContent = "";
  });
});
