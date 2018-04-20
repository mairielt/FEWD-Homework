$(document).ready(function(){


    function updateCity(){
        // grab the value in the city text box, store it as the city variable:
        var city = $("#city-type").val().trim().toLowerCase()

        // output city to the js console:
        console.log(city)

        // if city is Los Angeles, change the backgrond to images/la.jpg:
        if(city == "la" || city =="los angeles"){
            $("body").attr("class", "la")
        }

        // if city is New York, change the backgrond to images/nyc.jpg:
        if(city == "nyc" || city =="new york"){
            $("body").attr("class", "nyc")
        }

        // if city is Austin, change the backgrond to images/austin.jpg:
        if(city == "austin"){
            $("body").attr("class", "austin")
        }

        // if city is San Francisco, change the backgrond to images/sf.jpg:
        if(city == "sf" || city =="san francisco"){
            $("body").attr("class", "sf")
        }

        // if city is Sydney, change the backgrond to images/sydney.jpg:
        if(city == "sydney"){
            $("body").attr("class", "sydney")
        }

        // blank out the text box:
        $("#city-type").val("")

        // prevent the default action after form submit (page reload:
        event.preventDefault()
    }

    // Listen for a form submit event (enter or click button) and run updateCity when submitted:
    $("#city-form").submit(updateCity)










})