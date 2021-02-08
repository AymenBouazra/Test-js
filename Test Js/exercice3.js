function exercice3(){
    let ch="calvin harris"
    newch=""
    // newch+=ch[0].toUpperCase()
    var p = ch.indexOf(" ")
   
    newch+=ch[0].toUpperCase()+'.'+ch[p+1].toUpperCase()
    console.log(newch);
    // deuxiéme methode
    newch=""
    for(let i=0;i<ch.length;i++){
        if (ch[i]==" ")
        newch+=ch[0].toUpperCase()+'.'+ch[i+1].toUpperCase()
    }
      console.log(newch);
    
}