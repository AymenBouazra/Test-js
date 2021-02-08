function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('Companies')) || []
    var rows=''
    storage.forEach(x =>  {   
        
       rows+= `<option id="selected">${x.companyName}</option>`
       document.getElementById('Company').innerHTML = rows
    });
}
function change(){
    var first=document.getElementById('firstname')
    var last=document.getElementById('lastname')
    var email=document.getElementById('email')
    var adress=document.getElementById('adress')
    var storage=JSON.parse(localStorage.getItem('Companies')) || []
    var storage=JSON.parse(localStorage.getItem('Employees')) || []
    var x = document.getElementById("selected").value;
    console.log(x);
storage.forEach(a => {if(x===a.companyName){
            x.employees.push({
            firstname: first.value,
            lastname:last.value,
            email:email.value,
            adress:adress.value
                        })
                            }})
localStorage.setItem('Companies',JSON.stringify(storage))
}

function addEmployee(){
    var first=document.getElementById('firstname')
    var last=document.getElementById('lastname')
    var email=document.getElementById('email')
    var adress=document.getElementById('adress')
    var storage=JSON.parse(localStorage.getItem('Employees')) || []

    if(first.value=="" ){
        first.className +=' is-invalid'
      return ; 
    }
    else { 
        first.classList.remove('is-invalid')
        first.className +=' is-valid'
    }
    if(last.value=="" ){
        last.className +=' is-invalid'
       return;
    }
    else { 
        last.classList.remove('is-invalid')
        last.className +=' is-valid'
    }
    if(email.value.indexOf('@')==-1){
        email.className +=' is-invalid'
       return;
    }
    else { 
        email.classList.remove('is-invalid')
        email.className +=' is-valid'
    }
    if(adress.value=="" ){
        adress.className +=' is-invalid'
      return ; 
    }
    else { 
        adress.classList.remove('is-invalid')
        adress.className +=' is-valid'
    }
    
    storage.push(
        {
            firstname: first.value,
            lastname:last.value,
            email:email.value,
            adress:adress.value
        }
    )
    
        localStorage.setItem('Employees',JSON.stringify(storage))
}   
