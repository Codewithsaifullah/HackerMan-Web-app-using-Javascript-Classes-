document.addEventListener("DOMContentLoaded", function () {
let textmessage =  [
    "User name found: @dummy",
    "Fetching password from encrypted database...",
    "Password found: dummy123",
    "Hacked successfully...",
    "Access granted...",
    "Initiating data extraction...",
    "Retrieving sensitive information...",
    "Data transfer in progress...",
    "Mission accomplished..."
]

const sleep = async (ms) => {
    return new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(true) 
    }, ms * 1000)
});
}

const rumMessage = async (message)=>{
    await sleep(2);
    console.log(message);
    text.innerHTML = text.innerHTML + message + "<br>";
}

(async () => {
    for (let i = 0; i < textmessage.length; i++) {
        await rumMessage(textmessage[i]);
    }
})()






});