window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${event.keyCode}']`);
  if (!audio) {
    return;
  }
    
  // Rewind to the start
  audio.currentTime = 0;
  // Play the audio
  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove("playing");
  }, 0.01);
}); 