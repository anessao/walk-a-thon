var DonorInfo = (function(){
	var donors = [
		{
			name: "paula",
			pledge: 80
		}
	]

	return {
		getDonor: function(){
			console.log("getDonors works: ", donors);
			return donors;
		},
		addDonor: function(info){
			console.log("addDonor works: ", info);
		}

	}
})();