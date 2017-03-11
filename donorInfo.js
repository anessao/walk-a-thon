var DonorInfo = (function(){
	var donors = [];
	var amountType = '';

	return {
		getDonor: function(){
			var ticketTable = document.getElementById("ticketTable");
			var ticketString = '';
			ticketString += `<tbody><th>Name:</th><th>Pledge:</th><th>Pledge Type:</th>`
			for (var a = 0; a < donors.length; a++){
			if (true) {
				
				ticketString += `<tr><td id="ticketName">${donors[a].name}</td>`
				ticketString += `<td id="ticketName">${donors[a].pledge}</td>`
				ticketString += `<td id="ticketName">${donors[a].amountType}</td></tr>`  
				}
			}
			ticketString += `</tbody>`
			ticketTable.innerHTML = ticketString;

			return donors;
		},
		addDonor: function(){
				donors.push({name: "", pledge:"", amountType:"", email:""});
		},
		setDonor: function(info){
			var donorsIndex = donors.length - 1;
			for (var x = 0; x < info.length; x++) {
				if (info[x].id === "name" && info[x].value !== '') {
					donors[donorsIndex].name = info[x].value;
				} if (info[x].id === "email" && info[x].value !== '') {
					donors[donorsIndex].email = info[x].value;
				} if(info[x].id === "amount" && info[x].value !== ''){
					donors[donorsIndex].pledge = info[x].value;
				} if(info[x].checked === true){
					donors[donorsIndex].amountType = info[x].value;
					console.log(info);
				}
			}
		}
	}
})();