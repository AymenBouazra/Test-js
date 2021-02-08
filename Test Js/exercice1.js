function exercice1(){
    var pos=[]
var tab= [-19,2,44,5,77];
tab.forEach(x=>{ if (x>=0){
    pos.push(x)
}
})
pos.sort((a,b) => a - b)
console.log(pos)    
sum=pos[0]+pos[1]
console.log(sum);
}