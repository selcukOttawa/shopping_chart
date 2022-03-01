// Add an event to the form on submit to validate input
document.profileForm.addEventListener("submit", ValidateModule.validateForm);

// Add an event to the form on reset to clear form
document.profileForm.addEventListener("reset", ValidateModule.resetForm);

// Add an event to clear warning message on First Name element
document.querySelector('#firstName').addEventListener('blur', (e)=> {
    ValidateModule.showUserData();

    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

// Add an event to clear warning message on Last Name element
document.querySelector('#lastName').addEventListener('blur', (e)=> {
    ValidateModule.showUserData();
    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

// Add an event to clear warning message on address element
document.querySelector('#address').addEventListener('blur', (e)=> {
    ValidateModule.showUserData();
    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

// Add an event to clear warning message on birthdate element
document.querySelector('#birthDate').addEventListener('blur', (e)=> {
    ValidateModule.showUserData();
    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

// Add an event to clear warning message on birthdate element
document.querySelector('#province').addEventListener('blur', (e)=> {
    ValidateModule.showUserData();
    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

// Add an event to clear warning message on agreement element
document.querySelector('#chkAgree').addEventListener('click', (e)=> {
    ValidateModule.showUserData();
    if(e.target.value !== ''){
        e.target.classList.remove('is-invalid');
    } else {
        e.target.classList.add('is-invalid');
    }
});

document.querySelector('#radioMale').addEventListener('click', (e)=> {
    ValidateModule.showUserData();
    if($("#radioMale").prop('checked') == true)
    {
        document.querySelector('#radioGroup').classList.remove('is-invalid');
    }
    else
    {
        document.querySelector('#radioGroup').classList.add('is-invalid');
    }
});

document.querySelector('#radioFemale').addEventListener('click', (e)=> {
    ValidateModule.showUserData();
    if($("#radioFemale").prop('checked') == true)
    {
        document.querySelector('#radioGroup').classList.remove('is-invalid');
    }
    else
    {
        document.querySelector('#radioGroup').classList.add('is-invalid');
    }
});

document.querySelector('#radioOther').addEventListener('click', (e)=> {
    ValidateModule.showUserData();
    if($("#radioOther").prop('checked') == true)
    {
        document.querySelector('#radioGroup').classList.remove('is-invalid');
    }
    else
    {
        document.querySelector('#radioGroup').classList.add('is-invalid');
    }
});

// Grabbing image and button elements
let images = document.getElementsByTagName('img');
let button = document.getElementById('clear');

// Adding click event to the images
for (const image of images) {
    image.addEventListener('click', (e)=> {
        let img = e.target;
        ProductModule.addProduct(img.id);
    });
}

// Adding click event to the button
button.addEventListener('click', ()=> { 
    ProductModule.clear();
});

