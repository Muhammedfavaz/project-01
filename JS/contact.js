function sendMail(){
    var params ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value
    };
    const serviceID = "service_ci5zku8";
    const TemplateID = "template_op0ilso";
    emailjs.send(serviceID,TemplateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message send successfully.");
        }
    )
    .catch((err) => console.log(err));
    console.log("hi")
}