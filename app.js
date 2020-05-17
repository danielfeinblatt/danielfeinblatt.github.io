var htmlNavBar = `
	<ul class="navigation">
		<li><a href="index.html">Home</a></li>
		<li><a href="volunteer.html">Volunteering</a></li>
		<li><a href="education.html">Education</a></li>
		<li><a href="research.html">Research</a></li>
		<li><a href="work.html">Work Experience</a></li>
		<li><a href="athletics.html">Athletics</a></li>
		<li><a href="#contact-me">Contact Me</a></li>
		<li><a href="DanielFeinblattResume2020.pdf" target="_blank">Resume</a></li>
	</ul>
`;
var htmlContactInfo = `
	<h1>Would love to hear from you! Feel free to reach out via email or see what I'm up to on LinkedIn or GitHub.</h1>
	<ul id="contact-me" class="contact-list">
		<li><a href="mailto:danielfeinblatt@gmail.com"><img src="images/email-icon.png" alt=""></a></li>
		<li><a href="https://danielfeinblatt.github.io/" target="_blank"><img src="images/github-logo.png" alt=""></a></li>
		<li><a href="https://www.linkedin.com/in/danielfeinblatt/" target="_blank"><img src="images/linkedin-logo.png" alt=""></a></li>
	</ul>
	<div>
	Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
	from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
	</div>
`;

document.querySelector('nav').innerHTML = htmlNavBar;
document.querySelector('footer').innerHTML = htmlContactInfo;

function getrelative() {
	let full = document.location.href + "";
	let orig = document.location.origin + "";
	let rel = full.replace(orig, '').substring(1);
	return rel;
}
const LISTOFLINKS = document.querySelectorAll('.navigation li a');
function currentPage() {
	for(var i = 0; i < LISTOFLINKS.length - 2; i++) {
		let check = LISTOFLINKS[i].getAttribute('href');
		if (getrelative() == check) {
			LISTOFLINKS[i].style.color = 'white';
			break;
		}
	}
}

this.addEventListener('load', currentPage);
