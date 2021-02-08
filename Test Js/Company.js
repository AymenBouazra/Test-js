function addCompany(){
    
        var companyName=document.getElementById('Companyname')        
        var adress=document.getElementById('adress')
        var email=document.getElementById('email')
        var storage=JSON.parse(localStorage.getItem('Companies')) || []
    
        if(companyName.value=="" ){
            companyName.className +=' is-invalid'
          return ; 
        }
        else { 
            companyName.classList.remove('is-invalid')
            companyName.className +=' is-valid'
        }
        if(adress.value=="" ){
            adress.className +=' is-invalid'
           return;
        }
        else { 
            adress.classList.remove('is-invalid')
            adress.className +=' is-valid'
        }
        if(email.value.indexOf('@')==-1){
            email.className +=' is-invalid'
           return;
        }
        else { 
            email.classList.remove('is-invalid')
            email.className +=' is-valid'
        }
        storage.push(
            {
                companyName :companyName.value,
                adress:adress.value,
                email:email.value,
                employees: [{}]
            }
        )
            localStorage.setItem('Companies',JSON.stringify(storage))
    }   
