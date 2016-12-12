// Set up a doc ready
$(document).ready(function(){

	// Two new jQuery methods
	// -submit
	$(".sign-up-form").submit(function(){
		// console.log(event);
		// Stop the form from leaving the page
		event.preventDefault();
		console.log("Form submitted!");

		// All fields are mandatory
		$("input").each(function(){
			var currentTagClass = $(this).attr("class");
			var errorClass = "." + currentTagClass + "-error";
			console.log(errorClass);
			if($(this).val() == ""){
				$(errorClass).html("Fields cannot be empty");
				$(errorClass).show();
			}else{
				$(errorClass).hide();
			}
		})

	// -val
		// Check the length of the name input field
		var fullNameVariable = $(".fullName").val();
		console.log(fullNameVariable);
		if(fullNameVariable.length < 4){
			console.log("Your name is too short");
			$(".full-name-error").show();
		}else{
			$(".full-name-error").hide();
		}

		// Make sure the password fields match.
		// Make sure the password fields are at least 6 characters
		// Make sure the password contains at least 1 number
		var password = $(".password").val();
		var password2 = $(".password2").val();
		var numberFound = false;
		// console.log(password); to steal their password =)
		for(let i = 0; i < password.length; i++){
			if(isNaN(Number(password[i]))){
				// this is a letter		
			}else{
				// number found
				numberFound = true;
			}
		}
		if(password !== password2){
			$(".password-error").html("Your passwords must match");
			$(".password-error").show();
		}else if(password.length < 6){
			$(".password-error").html("Your passwords must be at least 6 characters");
			$(".password-error").show();
		}else if(!numberFound){
			// JS couldn't find a number or it would be true!
			$(".password-error").html("Your passwords must contain a number!");
			$(".password-error").show();
		}else{
			$(".password-error").hide();
		}


		var addressVariable = $(".address").val();
		console.log(addressVariable);
	})
	

})