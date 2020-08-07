function validateInput(input, inputFormat)
{
   return inputFormat.test(input);
}

function validateFirstName(name) 
{
    const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}")
    if(!validateInput(name, namePattern))
            document.getElementById("warnFname").innerHTML = "<font class=warnTxt>Enter Valid First Name</font>";
    else
        document.getElementById("warnFname").innerHTML = "";
}

function validateLastName(name) 
{
    const namePattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
    if(!validateInput(name, namePattern))
        document.getElementById("warnLname").innerHTML = "<font class=warnTxt>Enter Valid Last Name</font>";
    else
        document.getElementById("warnLname").innerHTML = "";
}

function validatePhone(phone) 
{
    const phonePattern = new RegExp("^[6-9][0-9]{9}$");
    if(!validateInput(phone, phonePattern))
        document.getElementById("warnPhone").innerHTML = "<font class=warnTxt>Enter Valid Number</font>";
    else
        document.getElementById("warnPhone").innerHTML = "";
}

function validateCity(city) 
{
    const cityPattern = new RegExp("^[A-Z]{1}[A-Za-z]{2}");
    if(!validateInput(city, cityPattern))
        document.getElementById("warnCity").innerHTML = "<font class=warnTxt>Enter Valid City</font>";
    else
        document.getElementById("warnCity").innerHTML = "";
}

function validateZip(zip)
{
    const zipPattern = new RegExp("^[0-9]{5}");
    if(!validateInput(zip, zipPattern))
        document.getElementById("warnZip").innerHTML = "<font class=warnTxt>Enter Valid Zip</font>";
    else
        document.getElementById("warnZip").innerHTML = "";
}