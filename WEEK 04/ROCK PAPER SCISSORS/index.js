console.log("js loaded")
// $("body").slideUp()

$("#rock-button").click(rockClicked)
document.getElementById("paper-button").onclick = paperClicked
document.getElementById("scissors-button").onclick = scissorsClicked

function rockClicked(){
    console.log("You chose Rock!")
    console.log("Computer player chooses Rock")
    console.log("It's a tie!")
    $("body").css("background-color", "blue")
    $("#paper-button").fadeOut(2000)
    $("#paper-button").fadeIn(2000)
    $("#scissors-button").fadeOut(2000)
    $("#scissors-button").fadeIn(2000)
}

function paperClicked(){
    console.log("You chose Paper!")
    console.log("Computer player chooses Rock")
    console.log("You win!!!!!")
    $("body").css("background-color", "green")
    $("#rock-button").fadeOut(2000)
    $("#rock-button").fadeIn(2000)
    $("#scissors-button").fadeOut(2000)
    $("#scissors-button").fadeIn(2000)
}

function scissorsClicked(){
    console.log("You chose Scissors!")
    console.log("Computer player chooses Rock")
    console.log("You lose!!!!!")
    $("body").css("background-color", "purple")
    $("#rock-button").fadeOut(2000)
    $("#rock-button").fadeIn(2000)
    $("#paper-button").fadeOut(2000)
    $("#paper-button").fadeIn(2000)
}