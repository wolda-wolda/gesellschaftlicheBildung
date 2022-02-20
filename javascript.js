function hover(element) {
    element.setAttribute('src', 'images/header2.jpg');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'images/header.jpg');
  }
function redirect(){
    window.location.href = "log_in.php";
}
function redirect(){
    window.location.href = "https://gb.wolda.me/index.html";
}
function get_spotify() {
	$.ajax({
		type: 'POST',
		url: '/Scripts/last.fm.php',
		data: { request: 'true' },
		success: function(reply) {
			$('.now-playing').html("<p>" + reply + "</p>");
		}
	});
}
function mouseDown(element){
	window.location.href = "https://spotify-github-profile.vercel.app/api/view?uid=negjnxvc9s7omch665fizycbe&redirect=true";
}
var something = document.getElementById('nickname');
something.style.cursor = 'pointer';
something.onclick= function(){
    window.location.href = "index.html";
}
window.onload = get_spotify;