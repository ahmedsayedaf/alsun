// Set the target date and time in Cairo time zone (UTC+2)
const targetDate = new Date("June 19, 2025 14:00:00 GMT+0200").getTime();

function updateCountdown() {
  // Get the current time in Cairo time zone (UTC+2)
  const now = new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" });
  const nowInCairo = new Date(now).getTime();

  // Calculate the time difference
  const timeLeft = targetDate - nowInCairo;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML = "<h2>Time's up! 🎉</h2>";
  }
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay
console.log("Script loaded!"); // Add this at the top of script.js

const darkModeSwitch = document.getElementById("dark-mode-switch");

// Check for saved theme in localStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeSwitch.checked = true;
}

// Toggle dark mode
darkModeSwitch.addEventListener("change", () => {
  console.log("Toggle clicked!"); // Add this to verify the event listener works
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
