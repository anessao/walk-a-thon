var DonorInfo = (function(){
	var donors = [
		{
			name: "",
			pledge: ''
		}
	]
	var amountType = '';

	return {
		getDonor: function(){
			if (donors.name !== undefined && donors.pledge !== undefined) {
				ticketName.innerHTML = donors.name;
				ticketAmount.innerHTML = "$" + donors.pledge;
				ticketAmountType.innerHTML = amountType;
			}

			return donors;
		},
		addDonor: function(info){
			for (var x = 0; x < info.length; x++) {
				if (info[x].id === "name" && info[x].value !== '') {
					donors.name = info[x].value;
				} if(info[x].id === "amount" && info[x].value !== ''){
					donors.pledge = info[x].value;
				} if(info[x].checked === true){
					amountType = info[x].value;
				} else if(info[x].value === ''){
					warning.innerHTML = `<div class="warning">Please fill in all fields</div>`
				}
			}

		}
	}
})();