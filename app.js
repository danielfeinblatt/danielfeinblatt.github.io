window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
		document.getElementById("topnav").style.paddingTop = "0px";
	}
	else {
		document.getElementById("topnav").style.paddingTop = "20px";
	}
}


function openTab(tabName){
	var i, x;
	x = document.getElementsByClassName("containerTab");
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
}