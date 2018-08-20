
var currentUserName;
var password;

localStorage.removeItem("user");

$("#login-button").on("click", function () {
    event.preventDefault();

    currentUserName = $("#username-val").val().trim();
    password = $("#password-val").val().trim();

    // console.log(currentUserName);

    window.location.href = "../user-profile.html";

    $.get("/api/authors/" + currentUserName + "/" + password, function (data) {
        
        
        localStorage.setItem("user", data.id)
        console.log(localStorage);

    });
    
})


//data.Posts