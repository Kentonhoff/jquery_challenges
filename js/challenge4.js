$("#ch4form").submit(function(){
  var validInput = true;
  var name = $("#fullname").val()
  var address = $("#streetaddr").val()
  console.log(name);
  console.log(address);
  if (name.length == 0){
    $("#nameerrormsg").css('display', 'block');
    validInput = false;
    event.preventDefault();
  }
  else{
    $("#nameerrormsg").css('display','none');
  }
  if (address.length == 0){
    $("#addrerrormsg").css('display','block');
    validInput = false;
    event.preventDefault();
  }
  else{
    $("#addrerrormsg").css("display", "none");
  }
  return validInput;

});

//ch4form.onsubmit = function() {
//    var validInput = true;
//    var name = document.querySelector("#fullname")
//    var address = document.querySelector("#streetaddr")
//    console.log("Here");
//    console.log(name);
//    console.log(address)
//    if (name.value.length == 0){
//        document.querySelector("#nameerrormsg").style.display = "block";
//        validInput = false;
//    }
//    else {
//        document.querySelector("#nameerrormsg").style.display = "none";
//    }

//    if (address.value.length == 0){
//        document.querySelector("#addrerrormsg").style.display = "block";
//        validInput = false;
//    }
//    else {
//        document.querySelector("#addrerrormsg").style.display = "none";
//    }

//    return validInput;
//}
