$(document).ready(function(){
  $("#ch3form").submit(function(){
    var fruit = $('input[name="fruit"]')
    for (let i = 0; i< fruit.length;i++){
      if (fruit[i].checked)
        return true;
    }
    alert("Pick a fruit please.")
      return false;
  })
  $("#ch3form").submit(function(){
    var standing = $('input[name="standing"]')
    for (let i = 0; i< standing.length;i++){
      if (standing[i].checked)
        return true;
    }
    alert("Pick a class standing please.")
      return false;
  })
})

//ch3form.onsubmit = function() {
//    var fruit = document.querySelectorAll('input[name="fruit"]')
//    for (let i = 0; i < fruit.length;i++){
//        if (fruit[i].checked)
//            return true;
//    }
//    alert("You must pick a fruit!")
//    return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
//  }
