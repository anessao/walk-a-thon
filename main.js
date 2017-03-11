var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

var ticketName = document.getElementById("ticketName");
var ticketAmount = document.getElementById("ticketAmount");
var ticketAmountType = document.getElementById("ticketAmountType");

function donate(){
	var info = document.getElementsByTagName("input");
	var warning = document.getElementById("warning");
	warning.innerHTML = "";
	DonorInfo.addDonor(info);
	DonorInfo.getDonor();
	donateButton.blur();
}
function clear (){
	ticketName.innerHTML = "...";
	ticketAmount.innerHTML = "...";
	ticketAmountType.innerHTML = "...";
	var info = document.getElementsByTagName("input");
	for (var y = 0; y < info.length; y++) {
		info[y].value = '';
	}

}

donateButton.addEventListener("click", donate);
cancelButton.addEventListener("click", clear);
