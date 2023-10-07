function updateClock() {
  const now = new Date();
  const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  document.querySelector('#dayname').textContent = dayName;
  document.querySelector('#month').textContent = month;
  document.querySelector('#daynum').textContent = date;
  document.querySelector('#year').textContent = year;
  document.querySelector('#hour').textContent = formattedHours;
  document.querySelector('#minutes').textContent = formattedMinutes;
  document.querySelector('#seconds').textContent = formattedSeconds;
  document.querySelector('#period').textContent = period;
}

function initClock() {
  updateClock();
  setInterval(updateClock, 1000); // Update every second
}

initClock();
