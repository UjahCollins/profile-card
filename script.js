const timeElement = document.getElementById("current-time");

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    timeElement.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  updateTime();
  setInterval(updateTime, 100);