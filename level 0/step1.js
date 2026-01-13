//level 0= question 1 text alter
function text(){

    if (document.querySelector(".card").innerText==""){
        document.querySelector(".card").innerText="Hey There";
    }
    else{
        document.querySelector(".card").innerText="";
    }
}
//level 0= question 2 
function toogle(){
    if(document.body.style.backgroundColor=="black" && document.body.style.color=="white"){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";

    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";

    }
}
//level 0= question 3
function magnifier(){
    document.querySelector(".show").innerHTML=`<h3>${document.querySelector("input").value}</h3>`;
    
}
function reset(){
    document.querySelector("input.focus").value="";
    magnifier();
}
c=document.querySelector('input.check')
console.log(c.checked)
c.checked=false;
document.querySelector("input.sub").disabled=true;
function box(){
    if (c.checked==true){
        document.querySelector("input.sub").disabled=false;
    } 


}
function check(){
        alert("submitted");
}
function color(){
    let x=document.querySelector("select.bg").value
    if (x=="browse default"){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";

    }
    if (x=="red"){
        document.body.style.backgroundColor="red";
        document.body.style.color="white";
        
    }
    if (x=="green"){
        document.body.style.backgroundColor="green";
        document.body.style.color="white";
        
        
    }
    if (x=="yellow"){
        document.body.style.backgroundColor="yellow";
        document.body.style.color="black";
        
        
        
    }
    if (x=="blue"){
        document.body.style.backgroundColor="red";
        document.body.style.color="white";
        
        
    }

}
document.querySelector("text.order").innerText=0;
function add(){
    document.querySelector("text.order").innerText=Number(document.querySelector("text.order").innerText)+1;

}

function minus(){
    document.querySelector("text.order").innerText=Number(document.querySelector("text.order").innerText)-1;

    
}

function resetCount(){
    document.querySelector("text.order").innerText=0
    
}
function show_pass(){
    if(document.querySelector("button.hide_pass").innerText=="hide") {
        document.querySelector("input.pass").type="password";
        document.querySelector("button.hide_pass").innerText="show";

    }
    else{
        document.querySelector("input.pass").type="text";
        document.querySelector("button.hide_pass").innerText="hide";
    }
}