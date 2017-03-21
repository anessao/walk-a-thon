# NSS ASSIGNMENT | Walk-a-Thon!
#### Retrieving information and displaying information using IIFE notation and bootstrap styling.

## ASSIGNMENT DETAILS
1. My project will display:
	- A form for user submissions
	- The ability to select whether the submission is per lap or a single amount
	- A table to display the donor's information
	- Bootstrap table styling and responsive design
	- a button labeled Donate to process the submission
	- a button labeled Cancel to clear the submission form
2. Donor information stored in a private array with following function code snippet:
	```
	addDonor: function(){
				donors.push({name: "", pledge:"", amountType:"", email:""});
		},

	```
3. Setter method from IIFE format to set donor's information in private array:
	```
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
	```

## Styling

For display on the page, use [Bootstrap](https://getbootstrap.com) to style the form and table elements. Use Bootstrap's grid system and styling classes to get the following effects.

+ at desktop size display the table on the left and form on the right with some space around the sides
+ the page should have the same display on a tablet in landscape mode, but with no space at the sides
+ on mobile/vertical tablet the table should display above the form
+ the table entries should be alternately striped

On top of these styling requirements, feel free to apply any of your own personal styling via your own CSS or Bootstraps myriad styling effects to enhance the display style and usability of your page.

## SCREENSHOT
![Screenshot](https://raw.githubusercontent.com/anessao/walk-a-thon/working/Screen%20Shot%202017-03-20%20at%209.21.12%20PM.png)

#### HOW TO RUN CODE
```
1. git clone https://github.com/nss-evening-cohort-05/iife-translator-codemonkeys
2. cd iife-translator-codemonkeys
3. npm install http-server -g
4. http-server -p 8080
```

#### TECHNOLOGIES USED
- JavaScript
- HTML
- CSS
- JSON
- BOOTSTRAP

