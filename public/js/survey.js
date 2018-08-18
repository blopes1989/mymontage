$("#new-user").on("click", function(){
    console.log("test")
    console.log("this works")
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim().trim()) {
      return;
    }
    // Calling the upsertNewUser function and passing in the value of the name input
    
    upsertNewUser({name: nameInput.val().trim()});
});


  function upsertNewUser(NewUserData) {
    $.post("/api/NewUsers", NewUserData)
      .then(console.log(newUserData));
  }