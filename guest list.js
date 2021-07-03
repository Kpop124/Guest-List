function add(){
guest_name=document.getElementById("input1").value
div1.push(guest_name);}
function show(){
    div1.sort();
document.getElementById("div1").innerHTML=guest_name.value}
function search(){
    s=document.getElementById("input1").value
    found=0;
    j;
    for(j=0; j<div1.length; j++){
        if(s==div1[j]){
            found=found+1;
        }
    }
    document.getElementById("input1").innerHTML="label1"+found+"time/s";
    console.log("input1"+found+"time/s");
}

