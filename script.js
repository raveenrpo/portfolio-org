function sendMail(){
    let parms={
        name:document.getElementById('fname').value,
        email:document.getElementById('ed').value,
        message:document.getElementById('mn').value,
        message:document.getElementById('es').value,
    }

emailjs.send("service_hxqbhmc","template_04m67fu",parms)
.then(
    res =>{
        document.getElementById('fname').value ="";
        document.getElementById('ed').value ="";
        document.getElementById('mn').value ="";
        document.getElementById('es').value ="";
        console.log(res);
        alert("your message send successfully");
    }
).catch(err=>console.log(err))
}