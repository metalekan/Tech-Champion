const toggleButton = document.getElementById("checkbox");
const menu = document.getElementById("mobile_menu");

const newdays = document.getElementById("days");
const newhours = document.getElementById("hours");
const newminutes = document.getElementById("minutes");
const newseconds = document.getElementById("seconds");

const countdown = document.getElementById("countdown");

function toggleMenu() {
  if (menu.classList.contains("flex")) {
  } else {
  }
  menu.classList.toggle("hidden");
}

toggleButton.addEventListener("click", toggleMenu);

// Function to update the countdown
const targetDate = new Date("May 17, 2024 13:16:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  console.log(now);
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  newdays.innerText = days;
  newhours.innerText = hours;
  newminutes.innerText = minutes;
  newseconds.innerText = seconds;

  // If the countdown is over, display some text
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdown.classList.add("hidden");
  }
}

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);
