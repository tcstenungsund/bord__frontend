const color = document.body;

const text = document.querySelector("h1");
const info = document.querySelector("h2");

// Function scan after a nfc tag
function startScanning(){
    // Get refercens to nfc reader
    const ndef = new NDEFReader();
    color.style.backgroundColor = "#00FFFF";

    // Start scaning for NFC tags
    ndef.scan().then(() => {
        text.innerHTML = "Scan started successfully.";
        
        // If you get a error while reading a tag
        ndef.addEventListener("readingerror", () => {
            text.innerHTML = "Error! Cannot read data from the NFC tag. Try a different one?";
            color.style.backgroundColor = "#ff0000";
            //delay(400).then(() => startScanning());
        });
        // If you reading a tag successful 
        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            info.innerHTML = message + ", " + serialNumber;
            text.innerHTML = "NDEF message read.";
            //delay(400).then(() => startScanning());
        });

        // If it get a error while starting the scan
        }).catch((error) => {
        text.innerHTML = `Error! Scan failed to start: ${error}.`;
        color.style.backgroundColor = "#ff0000";
        //delay(400).then(() => startScanning());
    });
    
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}