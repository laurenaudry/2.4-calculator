document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".button");
  var result = document.querySelector(".result");
  var clear = document.querySelector(".clear");
  var string = "";


 button.forEach(function(numButton){
   numButton.addEventListener("click", function(e){
     var number = e.target.textContent;
     console.log(e.target);
     if (e.target.textContent === "=") {
      result.textContent = eval(string);
    } else {
      result.textContent += number;
      string += number;
    }
   });
 });

 clear.addEventListener("click", function(e){
   result.textContent = "";
   string = "";
  });
for (var i = 0; i < button.length; i++) {
  button[i]
}

});
