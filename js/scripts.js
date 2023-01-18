window.addEventListener("load", function(){
  window.addEventListener("submit", function(event){
  event.preventDefault();
  function collectInput(text){
    text = document.querySelector("input").value;
    let textArray = text.split(" ");
    let censoredArray = [];
    textArray.forEach(element => {
      if (element.toLowerCase() === "zoinks") {
      } else if (element.toLowerCase() === "muppeteer") {
      } else if (element.toLowerCase() === "biffaroni") {
      } else if (element.toLowerCase() === "loopdaloop") {
      } else {
        censoredArray.push(element);
      }
    });
    console.log(censoredArray);
  };
  collectInput();
  });
});