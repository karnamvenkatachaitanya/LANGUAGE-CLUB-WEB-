// script.js
let videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
let index = 0;
let videoElement = document.getElementById("bgVideo");
setInterval(() => {
  index = (index + 1) % videos.length;
  videoElement.style.opacity = 0;
  setTimeout(() => {
    videoElement.src = videos[index];
    videoElement.play();
    videoElement.style.opacity = 1;
  }, 500);
}, 5000);

document.querySelectorAll('.parallelogram').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.5)';
  });
  button.addEventListener('mouseleave', () => {
    button.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
  });
});
