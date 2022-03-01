var ValidateModule = (function(){

    // Function to validate profile
    let validateForm = function(e){

        e.preventDefault();
        isValid = true;
    
        // Display warning message if First Nane is empty
        if($("#firstName").val() == ''){
            $("#firstName").addClass("is-invalid");
            isValid = false;
        }
        // Display warning message if Last Nane is empty
        if($("#lastName").val() == ''){
            $("#lastName").addClass("is-invalid");
            isValid = false;
        }

        // Display warning message if address is empty
        if($("#address").val() == ''){
            $("#address").addClass("is-invalid");
            isValid = false;
        }

        // Display warning message if address is empty
        if($("#birthDate").val() == ''){
            $("#birthDate").addClass("is-invalid");
            isValid = false;
        }

        // Display warning message if province is empty
        if($("#province").val() == ''){
            $("#province").addClass("is-invalid");
            isValid = false;
        }

        // Display warning message if province is empty
        if($("#radioMale").prop('checked') == false && $("#radioFemale").prop('checked') == false && $("#radioOther").prop('checked') == false){
            $("#radioGroup").addClass("is-invalid");
            isValid = false;
        }

        // Display warning message if province is empty
        if($("#chkAgree").prop('checked') == false){
            $("#chkAgree").addClass("is-invalid");
            isValid = false;
        }
        
        // Return
        return isValid; 
    }

    // The function to reset form elements
    let resetForm = function(e){

        e.preventDefault();

        $("#firstName").val('');
        $("#lastName").val('');
        $("#address").val('') ;        
        $("#birthDate").val('');
        $("#province").val('');
        $("#chkAgree").prop('checked', false);
        $("#radioMale").prop('checked', false);
        $("#radioFemale").prop('checked', false);
        $("#radioOther").prop('checked', false);
        
        showUserData();

    }
   
    // Update user data
    let showUserData = function(){
        $('#userData li').remove();

        if($("#firstName").val() !== ''){
            $('#userData').append("<li> First Name:"+ $("#firstName").val() +"</li>");
        }
        if($("#lastName").val() !== ''){
            $('#userData').append("<li> Last Name:"+ $("#lastName").val() +"</li>");
        }
        if($("#address").val() !== ''){
            $('#userData').append("<li> Address:"+ $("#address").val() +"</li>");
        }
        if($("#birthDate").val() !== ''){
            $('#userData').append("<li> Birth Date:"+ $("#birthDate").val() +"</li>");
        }
        if($("#province").val() !== ''){
            $('#userData').append("<li> Province:"+ $("#province").val() +"</li>");
        }
        if($("#radioMale").prop('checked') ==  true){
            $('#userData').append("<li> Gender:"+ $("#radioMale").val() +"</li>");
        }
        if($("#radioFemale").prop('checked') == true){
            $('#userData').append("<li> Gender:"+ $("#radioFemale").val() +"</li>");
        }
        if($("#radioOther").prop('checked') == true){
            $('#userData').append("<li> Gender:"+ $("#radioOther").val() +"</li>");
        }        
        
    }

    // Define the public function(s)
    return {
        validateForm, resetForm, showUserData
    }
    
}());

