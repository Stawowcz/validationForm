const form = document.getElementById('form')
const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('password2')
const day = document.getElementById('days')
const month = document.getElementById('months')
const year = document.getElementById('years')
const check1 = document.getElementById('check1')
const check2 = document.getElementById('check2')
const company = document.getElementById('company')
const address = document.getElementById('address')
const address2 = document.getElementById('addressline')
const country = document.getElementById('countryid')
const zip = document.getElementById('zipid')
const phone = document.getElementById('phone')
const addinfo = document.getElementById('addinfo')


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
})

checkInputs = function() {
    const firstnameValue = firstname.value.trim()
    const lastnameValue = lastname.value.trim()
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()
    const dayValue = day.value.trim()
    const valueDay = day.options[day.selectedIndex].value;
    const monthValue = month.value.trim()
    const valueMonth = month.options[month.selectedIndex].value;
    const yearValue = year.value.trim()
    const valueYear = year.options[year.selectedIndex].value;
    const check1Value = check1.value.trim()
    const check2Value = check2.value.trim()
    const companyValue = company.value.trim()
    const addressValue = address.value.trim()
    const address2Value = address2.value.trim()
    const countryValue = country.value.trim()
    const zipValue = zip.value.trim()
    const phoneValue = phone.value.trim()
    const addinfoValue = addinfo.value.trim()

    if(firstnameValue === '') {
        setErrorFor(firstname, 'Firstname cannot be blank')
    } else {
        setSuccessFor(firstname)
    }

    if(lastnameValue === '') {
        setErrorFor(lastname, 'Lastname cannot be blank')
    } else {
        setSuccessFor(lastname)
    }

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email out of standard')
    }
    else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if (!isCorrectPassword(passwordValue)){
        setErrorFor(password, 'Password out of standard')
    }
    else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank')
    }
    else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match')
    } else {
        setSuccessFor(password2)
    }

    if (valueDay === '-') {
        setErrorFor(day, 'Day cannot be empty')
    } else {
        setSuccessFor(day)
    }

    if (valueMonth === '-') {
        setErrorFor(month, 'Month cannot be empty')
    } else {
        setSuccessFor(month)
    }

    if (valueYear === '-') {
        setErrorFor(year, 'Year cannot be empty')
    } else {
        setSuccessFor(year)
    }

    if (addressValue === '') {
        setErrorFor(address, 'Address cannot be empty')
    } else {
        setSuccessFor(address)
    }

    if (zipValue === '') {
        setErrorFor(zip, 'Zip cannot be empty')
    } else {
        setSuccessFor(zip)
    }

    if (phoneValue === '') {
        setErrorFor(phone, 'Phone cannot be empty')
    } else {
        setSuccessFor(phone)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error messege inner small
    small.innerText = message;

    // add error class
    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isCorrectPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);
}

