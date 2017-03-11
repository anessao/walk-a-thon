var donateButton = document.getElementById("donate");
var cancelButton = document.getElementById("cancel");

function donate(){
	var info = document.getElementsByTagName("input");
	var warning = document.getElementById("warning");
	warning.innerHTML = "";
	if (info[0].value !== '' && info[1].value !== ''){
		DonorInfo.addDonor();
		DonorInfo.setDonor(info);
		DonorInfo.getDonor();
		donateButton.blur();
	}
}
function clear (){
	var info = document.getElementsByTagName("input");
	for (var y = 0; y < info.length; y++) {
		info[y].value = '';
	}

}

donateButton.addEventListener("click", donate);
cancelButton.addEventListener("click", clear);
