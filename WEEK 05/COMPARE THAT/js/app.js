$("#submit").click(compareClicked)

function compareClicked(){
	var num1 = $("#a").val()
	var num2 = $("#b").val()

	console.log("Num1 is" + num1)
	console.log("Num2 is" + num2)

	if (num1 > num2){
		$("#comparison").html("<")
	}

	if (num1 < num2){
		$("#comparison").html(">")
	}

	if (num1 == num2){
		$("#comparison").html("=")
	}
}

