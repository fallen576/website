function Attention() {
	alert("starting at client");
	var send = new XMLHttpRequest();
	send.open("GET", "assets/php/test.php");
	send.send();

	send.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			alert('response from server: ' + obj.name + ' is ' + obj.age);
			document.getElementById('test_button').innerHTML = obj.name + ' is ' + obj.age;
		}
	};
}

function CoolStuff() {
	console.log('we in dis yo');
}