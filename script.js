function checkEmail(){
    var result = document.getElementById("result")
    var PhonelInpt = document.getElementById("Phone").value;
    if(/^[a-zA-Z0-9]{9,}$/.test(PhonelInpt)){
        result.innerHTML = "Phone number is valid"
        result.style.color = 'green'
    }
    else{
        result.innerHTML = "Phone number is invalid"
        result.style.color = 'red'
    }
}

