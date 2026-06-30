function startAI() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported on this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "hi-IN";
  recognition.start();

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;

    let reply = "Tumne kaha: " + text;

    const speech = new SpeechSynthesisUtterance(reply);
    speech.lang = "hi-IN";
    speechSynthesis.speak(speech);

    alert(reply);
  };

  recognition.onerror = function() {
    alert("Voice recognition failed.");
  };
}
