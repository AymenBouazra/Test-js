function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('Companies')) || []
    var rows=''
    storage.forEach((x,i) =>  {   
       rows+= `
       <tr>
       <th scope="row">`+(i+1) + `</th>
       <td> ${x.companyName} </td>
       <td>${x.adress} </td>
       <td>${x.email}</td>
       <td>
       
      
<button type="button" onclick="showData(${i})" class="btn btn-warning testing111" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Update
</button>
<button type="button" class="btn btn-danger" onclick="supprimer(`+i+`)">Delete</button>
</td>
`
document.getElementById('Companies').innerHTML = rows
});
}
function supprimer(i){
  var storage=JSON.parse(localStorage.getItem('Companies')) || []
 storage.splice(i,1)
 localStorage.setItem('Companies',JSON.stringify(storage))
 storageonload()
}
function showData(i){
  var storage=JSON.parse(localStorage.getItem('Companies')) || []
  document.getElementById("companyName").value=storage[i].companyName
  document.getElementById("adress").value=storage[i].adress
  document.getElementById("email").value=storage[i].email
  document.getElementById("index").value= i
}
function SaveChanges(){
  var storage=JSON.parse(localStorage.getItem('Employees')) || []
  var index=document.getElementById('index').value
  var companyName=document.getElementById("companyName").value
  var adress=document.getElementById("adress").value
  var email=document.getElementById("email").value
  var updatedCompany={
    companyName:companyName,
    adress:adress,
    email:email,
  }
  storage.splice(index,1,updatedCompany)
  localStorage.setItem('Companies',JSON.stringify(storage))
  storageonload()
}