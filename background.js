console.log("================================");
console.log("CP Sync Background Started");
console.log("================================");

chrome.runtime.onInstalled.addListener(() => {

    console.log("Extension Installed");

    chrome.storage.local.set({

        githubConnected: false,

        githubUser: "",

        repository: "",

        autoSync: true,

        totalSynced: 0

    });

});

chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{

    console.log(message);

    if(message.type==="PING")
    {

        sendResponse({

            status:"alive"

        });

    }

});