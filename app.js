const toggleButton = document.getElementById("checkbox");
const menu = document.getElementById("mobile_menu");

const newdays = document.getElementById("days");
const newhours = document.getElementById("hours");
const newminutes = document.getElementById("minutes");
const newseconds = document.getElementById("seconds");

function toggleMenu() {
  if (menu.classList.contains("flex")) {
  } else {
  }
  menu.classList.toggle("hidden");
}

toggleButton.addEventListener("click", toggleMenu);

function startCountdown(duration) {
  const countdownElement = document.getElementById("timer");
  let endTime = localStorage.getItem("countdownEndTime");

  if (!endTime) {
    endTime = Date.now() + duration;
    localStorage.setItem("countdownEndTime", endTime);
  } else {
    endTime = parseInt(endTime, 10);
  }

  function updateCountdown() {
    const now = Date.now();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      countdownElement.innerHTML = "Countdown finished!";
      clearInterval(interval);
      localStorage.removeItem("countdownEndTime");
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    newdays.innerText = days;
    newhours.innerText = hours;
    newminutes.innerText = minutes;
    newseconds.innerText = seconds;

  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to display the countdown immediately
}

// 30 days in milliseconds
const forTwoDays = 2 * 24 * 60 * 60 * 1000; //change the day to update 

// Start the countdown
startCountdown(forTwoDays);
