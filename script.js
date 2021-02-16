// Initializing materialize components
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var sidenav = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.dropdown-trigger');
    var dropdown = M.Dropdown.init(elems);

    var elems = document.querySelector('.modal');
    var modal = M.Modal.init(elems);
  });

// To open skills modal
function openSkillsModel(skill) {
	elem = document.querySelector(skill);
	var instance = M.Modal.init(elem);
	instance.open();
}

// Custom video editor
var playButton = document.getElementById("play_button");
var video = document.getElementById("video");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "<i class='material-icons'>pause</i>";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "<i class='material-icons'>play_arrow</i>";
  }
});

// Custom video editor
var playButton_ = document.getElementById("play_button_");
var video_ = document.getElementById("video_");
// Event listener for the play/pause button
playButton_.addEventListener("click", function() {
  if (video_.paused == true) {
    // Play the video
    video_.play();

    // Update the button text to 'Pause'
    playButton_.innerHTML = "<i class='material-icons'>pause</i>";
  } else {
    // Pause the video
    video_.pause();

    // Update the button text to 'Play'
    playButton_.innerHTML = "<i class='material-icons'>play_arrow</i>";
  }
});