
function hamburger(){
	var x = document.getElementById("hamburger");
	x.style.display="none";
	document.querySelector('.menu').classList.toggle('show');
	var y = document.getElementById("close");
	y.style.display="block";
	
}
function closeFunction(){
	var x = document.getElementById("close");
	x.style.display="none";
	document.querySelector('.menu').classList.remove('show');
	var y = document.getElementById("hamburger");
	y.style.display="block";

	
}

function displayPhrase()
{
    document.getElementById("demo").innerHTML = 'Have a Good Time!';
}
function divFunction() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
