window.addEventListener("load", function(){
  window.addEventListener("submit", function(event){
  event.preventDefault();
  function collectInput(text){
    text = document.querySelector("input").value;
    let textArray = text.split(" ");
    console.log(textArray);
  };
  collectInput();
  });
});