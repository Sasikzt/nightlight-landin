function openForm() {
  document.getElementById('popup-form').classList.remove('hidden');
}
function countdownTimer() {
  const end = new Date();
  end.setHours(end.getHours() + 2);
  function update() {
    const now = new Date();
    const diff = end - now;
    if (diff <= 0) return document.getElementById("countdown").textContent = "00:00:00";
    const hrs = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const mins = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const secs = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    document.getElementById("countdown").textContent = `${hrs}:${mins}:${secs}`;
  }
  setInterval(update, 1000);
}
countdownTimer();