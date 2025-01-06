
/* Project Created By Sama Modz */
setInterval(function () {
  document.getElementById('hours').innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // Formato 24h
}, 1000);