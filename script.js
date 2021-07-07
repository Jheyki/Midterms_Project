function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
    }
    emailjs.send('kapoycoffe62@gmail.com','KapoyCoffee62', tempParams)
    .then(function(res){
        console.log("success",res.status)
    })
}

//function sendMail(params){
                    
//    var tempParams = {
    

//    from_name:document.getElementById("fromName").value,
//    to_name:document.getElementById("toName").value,
    //message:document.getElementById("msg").value,
//    }

//    emailjs.send('kapoycoffe62@gmail.com','KapoyCoffee62', tempParams)
//   .then(function(res){
//  console.log("success",res.status)
//     })
//   }
