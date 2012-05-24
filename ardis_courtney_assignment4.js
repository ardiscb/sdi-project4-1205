/*
Author: Courtney Ardis
Date: May 24, 2012
Assignment: Deliverable 4
Term: 1205
*/

//Library
var courtneyLib = function() {
	//String function that tests whether a string follows a phone number pattern such as (123)-456-7890
	var isPhoneNum = function (phoneNum) {
		/*RegExp: variable pattern in isPhoneNum function
		Matches a literal "(" between zero and one time
		Matches a digit between 0 and 9 exactly three times
		Matches a literal ")" between zero and one time
		Matches one character whether it is a period, dash, or space between zero and one time
		Matches a digit between 0 and 9 exactly three times
		Matches one character whether it is a period, dash, or space between zero and one time
		Matches a digit between 0 and 9 exactly four times
		*/
		var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		//var ok = regExp.exec(phoneNum.value);
		if (pattern.test(phoneNum)) {
		    return true;
		} else {
			//Invalid phone number
		    return false;
		};
	};

	//String function that tests whether a string follows an email address pattern such as aaa@bbb.ccc
	var isEmail = function (emailAdd) {
		/*RegExp: variable pattern in isEmail function
		Matches alpa-numeric characters, lowercase or uppercase, including periods, underscores, and hyphens
		Matches a literal "@"
		Matches alpa-numeric characters, lowercase or uppercase, including periods, underscores, and hyphens.
		Matches a literal "."
		Matches two to four alphabets, lowercase or uppercase
		*/
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (pattern.test(emailAdd)) {
			return true;
		} else {
			//Invalid email address
			return false;
		};
	};

	//String function that tests whether a string is a URL. Does it start with http: or https:?
	var isURL = function (url) {
		/* RegExp: variable pattern in isURL function
		Matches ftp or http ("s" in https is optional)
		Matches literal "://"
		Matches www (optional)
		Matches a minimum of 3 alpha-numeric characters, lowercase or uppercase, including periods and hyphens
		Matches two to four alpha characters, lowercase or uppercase
		*/
		var pattern = /^((ftp|https?):\/\/)?(www)?[a-zA-Z0-9-\.]{3,}\.[a-zA-Z]{2,4}$/;
		if (pattern.test(url)) {
			return true;
		}
		else {
			//Invalid URL
			return false;
		};
	};

	/*String function that takes a string, splits into words, 
    then capitalizes the first letter of each word,
    then adds it to an array and joins the words together with a space
    */
	var makeTitle = function(string){
	   var words = string.split(" ");
	   var array = [];
	   for (i in words)
	   {
	      temp = words[i].toLowerCase();
	      temp = temp.charAt(0).toUpperCase() + temp.substring(1);
	      array.push(temp);
	   }
	   return array.join(" ");
	};

	/*String function that given a string that is a list of things separated by a given string, 
	as well as another string separator, return a string with the first separator changed to the second, 
	such as: "a,b,c" --> "a/b/c"
	*/
	var changeSeparator = function (string) {
		var string;
		for (i in string) {
			string2 = string.replace(/, /g,"/");
		}
		return string2;
	};

	/*Number function that formats a number to use a specific number of decimal places,
	such as money, 2.1 --> 2.10
	*/
	var formatNum = function (number) {
		var result = number.toFixed(2);
		return result;
	};

	var matchNum = function (compare, percent) {
		//TODO: Fill in working code that fuzzy-matches a number: is the number above or below a number within a certain percent?
	};

	//Number function that finds the number of days difference between two dates
	var findDays = function () {
		//Set the two dates
		today = new Date();
		var christmas = new Date(today.getFullYear(), 11, 25); 
		//Tests if Christmas has passed already
		if (today.getMonth() === 11 && today.getDate() > 25){ 
			//calculate next year's Christmas
			christmas.setFullYear(christmas.getFullYear() + 1);
		};
		//Sets oneDay into milliseconds
		var oneDay = 1000 * 60 * 60 * 24;
		//Calculate difference btw the two dates, and convert to days
		value = (Math.ceil((christmas.getTime() - today.getTime())/(oneDay))+" days left until Christmas!");
		return value;
	};
	//String function that given a string version of a number such as "42", return the value as an actual Number, such as 42.
	var convertString = function (string) {
		value = parseInt(string);
		return value;
	};

	//Arrays
	var findNum = function (number) {
		//TODO: Fill in working code that finds the smallest value in an array that is greater than a given number.

	};

	//Not working properly:
	var findValue = function () {
		//TODO: Fill in working code that finds the total value of just the numbers in an array, even if some of the items are not numbers.
		var myArray = [10, "b", 20, 30, "d", 40];
		var total = 0;
		for(var i = 0; i < myArray.length; i++){
			var thisVal = parseInt(myArray[i]);
		 	if(!isNaN(thisVal)){
		  		total += thisVal;
		 	}
  		return total;
		};
	};

	var sort = function (array) {
		//TODO: Fill in working code that given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] --> [{a:1}, {a:2}, {a:3}]
		
	};

	return {
		"isEmail": isEmail,
		"isURL": isURL,
		"isPhoneNum": isPhoneNum,		
		"makeTitle": makeTitle,
		"changeSeparator": changeSeparator,
		"formatNum": formatNum,
		"matchNum" : matchNum,
		"findDays" : findDays,
		"convertString" : convertString,
		"findNum" : findNum,
		"findValue" : findValue,
		"sort": sort
	};
};

var library = courtneyLib();

//Tests
console.log(library.isEmail("ardiscb@fullsail.edu"));
console.log(library.isURL("http://online.fullsail.edu"));
console.log(library.isPhoneNum("(803)-555-5555"));
console.log(library.makeTitle("user support associate"));
console.log(library.changeSeparator("apples, oranges, grapes"));
console.log("$" + library.formatNum(5.699));
//console.log(library.matchNum());
console.log(library.findDays());
console.log(library.convertString("52"));
//console.log(library.findNum());
console.log(library.findValue());//Not working
//console.lgo(library.sort());