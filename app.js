// Set the date we're counting down to
const countdownDate = new Date("Dec 30, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Calculate the time remaining in days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.querySelector('.days-card .box').innerText = days;
  document.querySelector('.hours-card .box').innerText = hours;
  document.querySelector('.minutes-card .box').innerText = minutes;
  document.querySelector('.seconds-card .box').innerText = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector('.header h1').innerText = "We're live!";
    document.querySelector('.cards').style.display = "none";
  }
}, 1000);
