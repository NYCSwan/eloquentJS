var today = new Date();
var hourNow = today.getHours();
var greeting;
var name = 'Molly';

if (hourNow > 18) {
	greeting = '<h3>Good evening</h3>';
} else if (hourNow > 12) {
	greeting = '<h3>Good afternoon</h3>';
} else if (hourNow > 0) {
	greeting = '<h3>Good morning</h3>';
} else {
	greeting = '<h3>Welcome!</h3>';
}

document.getElementById('greeting');