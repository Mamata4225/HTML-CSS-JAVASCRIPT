function formValiadtion(){
// this is for only username validation
    var textbox = document.getElementById('user');
    var username = document.getElementById('user').Value;
    var passbox = document.getElementById('pass');
    var password = document.getElementById('pass').Value;
    var place = document.getElementById('place').Value;
    if(username== ''){
        alert('plz enter username');
        textbox.style.border = '2px solid red';
        return false;
    }
    if(username.length<5 || username.length>10){
        alert('plz enter username min 5 and max 10 char');
        textbox.style.border = '2px solid red';
        return false;
    }
    // ---------------------------
    // start password validation 
 
    if(password==''){
        alert('plz enter password');
        textbox.style.border = '2px solid red';
        return false;
    }

    if(password.length<5 || password.length>10){
        alert('plz enter username min 5 and max 10 char');
        textbox.style.border = '2px solid red';
        return false;
    }
     //dropdown validate
    if(place==0){
        alert('plz select your place');
        return false;

        }
    }
    //radiobutton validate
    var genderIsActive = false;

    for(var i=0; i<gender.length;i++){
        if(gender[i].checked==true){
            genderIsActive=true;
        }
    }
    if(!genderIsActive){
        alert('plz select gender');
        return false;
    }
    // alert(`Name:${username}\n Place:${place}\n Gender:${gender[0].value}`)

function addCopy(){
    var add1 = document.getElementById('add1').Value;
    document.getElementById('add2').value=add1;
}