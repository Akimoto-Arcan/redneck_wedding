document.getElementById('rsvp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you for submitting your RSVP!');
  // Here you would add functionality to post data to a service like Google Forms or Airtable
});

document.body.addEventListener('click', function playMusic() {
  var weddingMusic = document.getElementById('weddingMusic');
  if (weddingMusic) {
    weddingMusic.play();
  }
  document.body.removeEventListener('click', playMusic);
}, {once: true});
