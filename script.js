let seconds = 10;
const count = document.getElementById("count");
const target = "https://telegram.me/%2Bo_lJCT4UdxJhYjU1";

const timer = setInterval(() => {
  seconds--;
  count.textContent = seconds;
  if (seconds <= 0) {
    clearInterval(timer);
    window.location.href = target;
  }
}, 1000);
