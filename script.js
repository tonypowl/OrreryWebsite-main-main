window.addEventListener('DOMContentLoaded', function() {
  const overlay = document.getElementById('video-overlay');
  const video = document.getElementById('splash-video');
  if (video && overlay) {
    video.addEventListener('ended', function() {
      overlay.style.display = 'none';
    });
    overlay.addEventListener('click', function() {
      video.pause();
      overlay.style.display = 'none';
    });
  }
});