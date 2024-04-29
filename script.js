function submit(res){
    var fname= document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var email= document.getElementById("email").value;
    var pass= document.getElementById("pass").value;
    var user= fname+lname;

    console.log(fname);
    if(fname.length==0){
        var res= document.getElementById("fres");
        res.innerText="First Name cannot be empty";
    }
 if(lname.length==0){
        var res= document.getElementById("lres");
        res.innerText="Last Name cannot be empty";
    }
 if(email.length==0){
        var res= document.getElementById("eres");
        res.innerText="Email cannot be empty";
    }
 if(pass.length==0){
        var res= document.getElementById("pres");
        res.innerText="Password cannot be empty";
    }
    
    else{
        
     if(user==pass||user.length<4||pass.length<6||pass.length>16){
        var res = document.getElementById("res");
        res.innerText="Wrong Username or Password";
    }else if(checkCharacter(pass)){
        var res = document.getElementById("res");
        res.style.color="green";
        res.innerText="Success";
    }else{
        var res = document.getElementById("res");
        res.innerText="Wrong Username or Password";
    }
}


}

function checkCharacter(text){

    for(var i =0 ; i<text.length;i++){
        console.log(text.charAt(i))
        var test=""+text.charAt(i);
        if(test==test.toUpperCase() || test==test.LowerCase()|| test.isNan()){
        return true;
        }else {
            return false;
        }
    }

}