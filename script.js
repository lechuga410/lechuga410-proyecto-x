
function openLightbox(src, isVideo = false) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const video = document.getElementById('lightbox-video');

  if (isVideo) {
    img.style.display = 'none';
    video.style.display = 'block';
    video.src = src;
  } else {
    video.style.display = 'none';
    video.pause();
    img.style.display = 'block';
    img.src = src;
  }

  lightbox.classList.add('show');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const video = document.getElementById('lightbox-video');
  lightbox.classList.remove('show');
  video.pause();
}

