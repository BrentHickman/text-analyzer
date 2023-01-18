Describe: textAnalyzer()

Test: "It should create an input and submit button for the textAnalyzer."
Code:
<form>
    <input type="text" id="input">
    <label for="input">Type some words</label>
    <button type="submit">Submit</button>
  </form>

<!-- Our second test. -->
Expected Output: form on page with input and submit button.

Test: "It should collect input from user and put it in a variable."
Code: 

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

<!-- input text = "text" -->

Expected Output: "text"

<!-- Our third test. -->

Test: "In will cut input string into an array of each input word."
Code:
