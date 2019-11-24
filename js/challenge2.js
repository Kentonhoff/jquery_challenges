$("#useBilling").click(function(){
	if (this.checked){
		console.log("checked");
		$("#home").val($("#billing").val());
		$("#home").prop("disabled", true);
	}
	else{
		console.log("Not checked")
		$("#home").val("");
		$("#home").prop("disabled", false);
	}
})

//useBilling.onchange = function() {
//	let home = document.querySelector("#home");
//	if (this.checked){
//		home.value = document.querySelector("#billing").value;
//		home.disabled = true;}
//	else {
//		home.value = "";
//		home.disabled = false;}

//	}
