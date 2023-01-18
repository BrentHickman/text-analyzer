window.addEventListener("load", function(){
  window.addEventListener("submit", function(event){
  event.preventDefault();
  function collectInput(text){
    text = document.querySelector("input").value;
    console.log(text);
  };
  collectInput();
  });
});