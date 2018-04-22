// waits until document finishes loading before running code inside of {}
$(document).ready(function() {

// declared a variable called cities that's an arry of strings
var cities = ["New York", "San Francisco", "Los Angeles", "Austin", "Sydney"]
  
  // run a loop through the array "var cities"
  for(i=0;i<cities.length;i++) {
    $("#city-type").append('<option value="' + cities[i] + '">' + cities[i] + '</option>')
  }

  // target the "form" element with id "city-type" and run a function that changes the image to the cities in the array
  $("form").on("change", "#city-type",function(){
    
    // declare a variable city that equals the value of the users input in the dropdown menu
    var city = $("#city-type").val()
    
    // only change body to New York image if "New York" is selected
    if(city == "New York") {
      $("body").attr("class","nyc")
    }

    // only change body to San Francisco image if other cities in dropdown are not selected and "San Franciso" is
    else if (city == "San Francisco"){
      $("body").attr("class","sf")
    }

    // only change body to Los Angeles image if other cities in dropdown are not selected and "Los Angeles" is
    else if (city == "Los Angeles"){
      $("body").attr("class","la")
    }

    // only change body to Austin image if other cities in dropdown are not selected and "Austin" is
    else if (city == "Austin"){
      $("body").attr("class","austin")
    }

    // only change body to Sydney image if other cities in dropdown are not selected and "Sydney" is
    else if (city == "Sydney") {
      $("body").attr("class","sydney")
    }
  })
})
