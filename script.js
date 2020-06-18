var principal = 0;
var interestRate = 0;
var period = 0;
var interest = 0;

function flexNaira() {
	event.preventDefault();
	var principal = parseFloat(document.getElementById("calc").value);
	var interestRate = 10 / 100;
	var period = document.getElementById("period").value;
	var interest = principal * interestRate * period;
	document.getElementById("interest").innerHTML = "Interest: ₦" + interest;
}


function flexDollar() {
	event.preventDefault();
	var principal = parseFloat(document.getElementById("calc").value);
	var interestRate = 6 / 100;
	var period = document.getElementById("period").value;
	var interest = principal * interestRate * period;
	document.getElementById("interest").innerHTML = "Interest: $" + interest;
}