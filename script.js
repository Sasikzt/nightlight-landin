
const deadline = new Date(Date.now() + 2 * 60 * 60 * 1000);
const timerEl = document.getElementById('timer');
function updateTimer() {
  const now = new Date();
  const diff = deadline - now;
  if (diff <= 0) {
    timerEl.textContent = "00:00:00";
    return;
  }
  const hours = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
  const minutes = String(Math.floor(diff / 1000 / 60) % 60).padStart(2, '0');
  const seconds = String(Math.floor(diff / 1000) % 60).padStart(2, '0');
  timerEl.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTimer, 1000);
