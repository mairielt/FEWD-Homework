// This waits till the page finishes loading before running the code inside the {}
$(document).ready(function() {


  // declare a variable called responses that's an array of strings
  var responses = ["Fer Sure", "Mos Def", "Unclear, Ask Again", "Hell 2 Da Naw", "Most Likely", "Don't Bet the Ranch", "Nahhhh"];

  // add a click listener to the submit link. When it's clicked, call the giveResponse function.
  $("#submit").click(giveResponse)

  // declare a function named giveResponse
  function giveResponse(){
    
    // Create a random number between 0 and the amount of items in the responses array
    var num = Math.floor(Math.random() * responses.length)
    
    // target the element with id response and replace the text using the index number of the responses array
    $("#response").text(responses[num])
  }
    


// Extra Credit:
  // declare a function named addResponse, this will take user input and add it to possible responses.
  function addResponse(){

    // declare a variable newResponse that equals the value of the user input in the text box
    var newResponse =
    // only add newResponse to the responses array if it exists (box is not blank)
      // push newResponse into the responses array
      // log our result to the console, for funsies
      // clear the box after submitting new response
      // if the box is blank, alert a notification
  }


});
