var total = 0

function submitEntry(){
    console.log("You submitted an entry")

    var amount = $("#newEntry").val()
    amount = parseFloat(amount)

    console.log(amount)

    // target the tbody #entries, append the amount as a new table row:
    $("#entries").append("<tr><td></td><td>" + amount + "</td></tr>")

    // add this amount to the total, to get the new total:
    total = total + amount

    // update the th with id total to the new total:
    $("#total").html("$" + total)

    // clear out the newEntry input box:
    $("#newEntry").val("")
    
    event.preventDefault()
}

$("#entry").submit(submitEntry)