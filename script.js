let arr=[`https://i.pinimg.com/736x/81/60/5e/81605e77565564c36a62eb8c3c829997.jpg`,`https://i.pinimg.com/736x/e7/81/3f/e7813f4fc983dbafd0d9dd6691568009.jpg`,`https://i.pinimg.com/474x/47/91/d3/4791d3c30033aedcb4fd29a2c104e398.jpg`,`https://i.pinimg.com/736x/b6/ba/52/b6ba52373776fd56a553fbd2112ac962.jpg`];

let box=document.querySelector("#main");
let s="";
for(let i=1;i<=40;i++){
    let r= Math.floor(Math.random()*4);
s+= `<div id="photo"> <img src=${arr[r]}></div>`;
}
box.innerHTML=s;


