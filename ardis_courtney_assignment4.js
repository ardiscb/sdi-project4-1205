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
		/*RegExp: variable pattern
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
		/*RegExp: variable pattern
		Matches alpa-numeric characters, lowercase or uppercase, and it can have periods, underscores, and hyphens
		Matches a literal "@"
		Matches alpa-numeric characters, lowercase or uppercase, and it can have periods, underscores, and hyphens.
		Matches a literal "."
		Matches two to four alphabets, lowercase or uppercase
		*/
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (pattern.test(emailAdd)) {
			return true;
		} else {
			return false;
		};
	};

	//Function: tests whether a string is a URL. Does it start with http: or https:?
	var isURL = function (url) {
		if (url.match("http://") || url.match("https://")) {
			return true;
		}
		else {
			return false;
		};
	};

	var makeTitle = function (words) {
		//TODO: Fill in working code here that takes a string, splits into words, then uppercases the first letter of each word
	};

	var changeSeparator = function (string, string2) {
		//TODO: Fill in working code here that given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: 
		//"a,b,c" + "," + "/" --> "a/b/c".

		//Fill in For statement
		/*
		for () {
			".".replace(", ");
		}
		*/
	};

	//Numbers
	var formatNum = function (number) {
		//TODO: Fill in working code here that formats a number to use a specific number of decimal places such as money: 2.1 --> 2.10

		//Not complete
		/*
		number = Math.floor();
		*/
	};

	var matchNum = function (number) {
		//TODO: Fill in working code that fuzzy-matches a number: is the number above or below a number within a certain percent?
	};

	var findDays = function (dates) {
		//TODO: Fill in working code that finds the number of days difference between two dates.
	};

	var convertString = function (string) {
		//TODO: Fill in working code that given a string version of a number such as "42", return the value as an actual Number, such as 42.
	};

	//Arrays
	var findNum = function (number) {
		//TODO: Fill in working code that finds the smallest value in an array that is greater than a given number.
	};

	var findValue = function (numbers) {
		//TODO: Fill in working code that finds the total value of just the numbers in an array, even if some of the items are not numbers.
	};

	var sort = function (array) {
		//TODO: Fill in working code that given an array of objects and the name of a key, rturn the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] --> [{a:1}, {a:2}, {a:3}]
		array = [];
	};

	//changeSeparator("laptop.phone.bag.keys");

	return {
		"isEmail": isEmail,
		"isURL": isURL,
		"isPhoneNum": isPhoneNum		
		//"makeTitle": makeTitle,
		//"changeSeparator": changeSeparator,
		//"formatNum": formatNum,
		//"sort": sort

	};
};

var library = courtneyLib();

console.log(library.isEmail("ardiscb@fullsail.edu"));
console.log(library.isURL("http://online.fullsail.edu"));
console.log(library.isPhoneNum("(803)-972-0807"));