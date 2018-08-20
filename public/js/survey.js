$("#new-user").on("click", function () {
  // console.log("test");
  // console.log("this works");
  event.preventDefault();
  var nameInput = $("#user-name").val().trim();
  var emailInput = $("#email").val().trim();
  var imagLink = $("#img-link").val().trim();
  var userPass = $("#password").val().trim();
  var cfpass = $("#pass-conf").val().trim();

  if (!(userPass === cfpass)) {
    alert("Passwords Don't Match!!");

  } else {

    var userNameObject = {
      name: nameInput,
      email: emailInput,
      profileImage: imagLink,
      password: userPass,
      passCon: cfpass
    };
  
    console.log(userNameObject);
   
    // Don't do anything if the name fields hasn't been filled out
    if (nameInput = "") {
      console.log("there is no name")
    }
    upsertNewUser(userNameObject);
  }
  

});


function upsertNewUser(NewUserData) {
  console.log(NewUserData);
  $.post("/api/authors", NewUserData)
    .then(function(res
    ){
      window.location.href = "/login"
    }
      
    )
};