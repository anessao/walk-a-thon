var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

function clear (){
	var info = document.getElementsByTagName("input");
	for (var y = 0; y < 3; y++) {
		info[y].value = '';
	}

}

function donate(){
	var info = document.getElementsByTagName("input");
	var warning = document.getElementById("warning");
	warning.innerHTML = "";
	if (info[0].value !== '' && info[1].value !== '' && info[2].value !== ''){
		DonorInfo.addDonor();
		DonorInfo.setDonor(info);
		DonorInfo.getDonor();
		donateButton.blur();
	} else {
		warning.innerHTML = `<div class="warning">Please fill in all fields</div>`
	};
	clear();
}

donateButton.addEventListener("click", donate);
cancelButton.addEventListener("click", clear);
