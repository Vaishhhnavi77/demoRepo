const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Your browser does not support Speech Recognition.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => {
        console.log("Speech recognition started...");
    };

    recognition.onresult = (event) => {
        let transcript = "";
        for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript + " ";
        }
        document.getElementById("output").innerText = transcript;
    };

    recognition.onerror = (event) => {
        console.error("Error occurred in speech recognition: ", event.error);
    };

    recognition.onend = () => {
        console.log("Speech recognition ended.");
    };

    recognition.start();
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startButton").addEventListener("click", startRecognition);
});
