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

Test: "It will cut input string into an array of each input word."
Code:     
    let textArray = text.split(" ");
    console.log(textArray);

<!-- input text = "This is a test array" -->

Expected Output: ["This", "is", "a", "test", "array"]

<!-- Our fourth test. -->

Test "It will omit "zoinks" from 'textArray'."
Code:
    let censoredArray = [];
    textArray.forEach(element => {
      if (element === "zoinks") {
      } else {
        censoredArray.push(element);
      }
    });
    console.log(censoredArray);

<!-- input text = "Holy zoinks that's bad" -->

Expected Output: ["Holy", "that's", "bad"]

<!-- Our fifth test. -->

Test: "This test will check upper and lower case conditions for zoinks."

Code:
      if (element.toLowerCase() === "zoinks") {
      }

<!-- input text = "flipping Zoinks ZOINKS zoinks zOiNkS" -->

Expected Output: ["flipping"]

<!-- Our sixth test. -->

Test: "This test will check upper and lower case conditions for zoinks and muppeteer."

Code: 
  else if (element.toLowerCase() === "muppeteer") {
      }

<!-- input text = "That flipping muppeteer really needs to zoinks themself" -->

Expected Output: ["That", "flipping", "really", "needs", "to", "themself"]

<!-- Our seventh test. -->

Test: "This test will check upper and lower case conditions for biffaroni and loopdaloop."

Code: 
        else if (element.toLowerCase() === "biffaroni") {
      } else if (element.toLowerCase() === "loopdaloop") {
      }

<!-- input text = "That muppeteer really biffaroni all over that loopdaloop like a total zoinks" -->

Expected Output: ["That", "really", "all", "over", "that", "like", "a", "total"]

