function exercice2(){
var tab2=[]
var tab= [-19,2,44,5,77];
console.log(tab);
var sum=0
tab.forEach(x=>{ if (x>=0){
    tab2.push(x)
}
})
tab2.forEach(x=>sum+=x)
console.log(tab2)    
console.log(sum);
}