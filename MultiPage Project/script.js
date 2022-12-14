function saveData() {
    //Retrieving the data
    var user, user1, email, user3, address, city, region, zip, num, num1,birth,gen,k,fat,mot,cou;
    user = document.getElementById("name1").value;
    user1 = document.getElementById("name2").value;
    email = document.getElementById("email").value;

    birth = document.getElementById("birthday").value;
    gen = document.getElementsByName("gender");
    for(i=0;i<gen.length;i++)
    {
        if(gen[i].checked)
        k=gen[i].value;

    } 
    cou = document.getElementById("country").value;
    user3 = document.getElementById("citizen").value;
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;
    region = document.getElementById("region").value;
    zip = document.getElementById("code").value;
    num = document.getElementById("number").value;
    num1 = document.getElementById("number2").value;
    fat = document.getElementById("fname").value;
    mot = document.getElementById("mname").value;
    
    // validateForm(email);
    const regex_pattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(regex_pattern.test(email)){
    }
    else
    {
        alert("email address is incorrect");
        return false;
    }

    if(zip.length>6)
    {
        alert("postal code must be 6 digits long");
        return false;
    }

    if(num.length>10)
    {
        alert("Home number must be less than 10 digits");
        return false;
    }
    else if(num.length<10){
        alert("Home number too short");
        return false;
        
    }
    if(num1.length>10)
    {
        alert("Mobile number  must be less than 10 digits");
        return false;
    }
    else if(num1.length<10){
        alert("Mobile number too short");
        return false;
        
    }
    
    //Storing the data
    localStorage.setItem("First Name", user);
    localStorage.setItem("Last name", user1);
    localStorage.setItem("Birthdate",birth);
    localStorage.setItem("Email-id", email);
    localStorage.setItem("Father name",fat);  
    localStorage.setItem("Mother name",mot); 
    localStorage.setItem("Nationanlity",user3);
    localStorage.setItem("Gender",k);  
    localStorage.setItem("Address",address);
    localStorage.setItem("Region",region);
    localStorage.setItem("City",city);  
    localStorage.setItem("Pin code",zip);
    localStorage.setItem("Country",cou);
    localStorage.setItem("Mob-No",num);    
    localStorage.setItem("Alt-no",num1);    
     
    
    
}

