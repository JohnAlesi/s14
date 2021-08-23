

function printUserInfo(name, emailaddress, mobilenumber){
	let lname = prompt('Enter your Last name');
	let fname = prompt('Enter your First Name');
	console.log('Name: ' + fname + ' ' + lname);

	let email = prompt('Enter your Email');
	console.log('Email: ' + email);

	let number = prompt('Enter your Number');
	console.log('Number: ' + number);
}


printUserInfo('Tony ', 'Starks', 'ironman@gmail.com', '09171111111');


