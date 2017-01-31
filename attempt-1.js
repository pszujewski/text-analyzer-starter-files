/*
Test text:
My fate cannot be mastered; it can only be collaborated with and thereby, to some extent, directed. Nor am I the captain of my soul; I am only its noisiest passenger. This is the almost the last sentence of the text, but not quite. This is actually the last sentence of the text./*


// Doesn't work

/*$(function mainFn() {
var regex = /[;,]/g;
$(".btn").on("click", function(event) {
  var text = $("textarea").val().split(" ").filter(function(str) {
    var check = str.match(regex);
    if (check) {
      return str.split("").filter(function(item){
          console.log(check);
          if (check.indexOf(item) < 0) {
            return item;
          }
      }).join("");
    } else {
      return str;
    }
  });

console.log(text);
return false;
}); // End of btn click event
});*/
