function checkForm(e){
    e.preventDefault();
    console.log(e);
    if(e.target[0].value.length > 3 && e.target[1].value.length > 3){
        document.getElementById("logmess").style.display="none";
        e.target.submit();
    }else if(e.target[0].value.length <= 3)
        document.getElementById("logmess").style.display = "block";

    