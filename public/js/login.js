
// Get the modal
var modal = document.getElementById('id01');

var currentUserName;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(".login-button").on("click", function(){
currentUserName = $(".usernameVal").val().trim()
})

console.log(currentUserName)


$.get("/api/authors/"+ name, function(data) {
	console.log(data+"dataaaa")
	console.log(data.name)
		$(".current-log").append(data.name+ "is currently logged in" +data.Posts);
		//console.log(newTr)
    });
