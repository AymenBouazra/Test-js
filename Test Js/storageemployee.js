function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('Employees')) || []
    var rows=''
    storage.forEach((x,i) =>  {   
       rows+= `
       <tr>
       <th scope="row">`+(i+1) + `</th>
       <td> ${x.firstname} </td>
       <td>${x.lastname} </td>
       <td>${x.email}</td>
       <td>${x.adress} </td>
       <td>
       
      
<button type="button" onclick="showData(${i})" class="btn btn-warning testing111" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Update
</button>
<button type="button" class="btn btn-danger" onclick="supprimer(`+i+`)">Delete</button>
</td>
`
document.getElementById('Employees').innerHTML = rows
});
}
function supprimer(i){
  var storage=JSON.parse(localStorage.getItem('Employees')) || []
 storage.splice(i,1)
 localStorage.setItem('Employees',JSON.stringify(storage))
 storageonload()
}
function showData(i){
  var storage=JSON.parse(localStorage.getItem('Employees')) || []
  document.getElementById("firstname").value=storage[i].firstname
  document.getElementById("lastname").value=storage[i].lastname
  document.getElementById("email").value=storage[i].email
  document.getElementById("adress").value=storage[i].adress
  document.getElementById("index").value= i
}
function SaveChanges(){
  var storage=JSON.parse(localStorage.getItem('Employees')) || []
  var index=document.getElementById('index').value
  var firstname=document.getElementById("firstname").value
  var lastname=document.getElementById("lastname").value
  var email=document.getElementById("email").value
  var adress=document.getElementById("adress").value
  var updatedUser={
    firstname:firstname,
    lastname:lastname,
    email:email,
    adress:adress
  }
  storage.splice(index,1,updatedUser)
  localStorage.setItem('Employees',JSON.stringify(storage))
  storageonload()
}