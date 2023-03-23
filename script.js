var div=document.createElement("div");
div.style.textAlign="center";
div.style.paddingTop="100px";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var buttton=document.createElement("button");
buttton.setAttribute("type","button");
buttton.classList.add("btn","btn-primary");
buttton.innerHTML="Search";
buttton.style.marginLeft="5px";
buttton.addEventListener("click",foo);

let active=document.createElement("div");
active.setAttribute("id","active");

let death=document.createElement("div");
death.setAttribute("id","death");

let recover=document.createElement("div");
recover.setAttribute("id","recover");

div.append(input,buttton,active);
document.body.append(div);

async function foo(){
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/total/dayone/country/${res}`;
    let res1=await fetch(url);
    let res2=await res1.json();
    let index=res2.length-1;
    active.innerHTML=`Total Active Cases: ${res2[index].Active}<br>
                    Total Death Cases: ${res2[index].Deaths}<br>
                    Total Recovered Cases: ${res2[index].Recovered}`;
}