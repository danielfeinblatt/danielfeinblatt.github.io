window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
		document.getElementById("topnav").style.paddingTop = "0px";
	}
	else {
		document.getElementById("topnav").style.paddingTop = "20px";
	}
}

function tester() {
	document.getElementById("thisone").innerHTML = "how about now?";
}