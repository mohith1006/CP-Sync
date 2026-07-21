document.addEventListener("DOMContentLoaded",()=>{

chrome.runtime.sendMessage({

type:"PING"

},(response)=>{

console.log(response);

});

chrome.storage.local.get(null,(data)=>{

if(data.githubConnected)
{

document.getElementById("githubStatus").innerText="Connected";

}
else{

document.getElementById("githubStatus").innerText="Disconnected";

}

if(data.repository!="")
{

document.getElementById("repository").innerText=data.repository;

}

});

document.getElementById("connect").addEventListener("click",()=>{

alert("GitHub Integration Coming in Module 2");

});

document.getElementById("settings").addEventListener("click",()=>{

alert("Settings Coming Soon");

});

document.getElementById("about").addEventListener("click",()=>{

alert("CP Sync v1.0");

});

});