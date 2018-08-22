
if (!currentUserID){
 //window.location.href = "/"
}

$(document).ready(function () {

    var currentUserID = localStorage.getItem("user")

    $.get("/api/authors/" + currentUserID, function (data) {
        // attach stuff here to the divs
        // like $(".current-log").html(userName);

        console.log(data.name)

      });

})