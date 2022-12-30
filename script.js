function submitForm(){
    let fname=document.getElementById('name').value;
    let lname=document.getElementById('lastname').value;
    let email=document.getElementById('Email').value;
    let reason=document.getElementById('reason').value;

   if(fname != "" && lname != "" && email != "" && reason != ""){
       alert("Form Submitted Successfully!")
   }
    else{
       alert("please fill all fields")
  }

 }