
  document.addEventListener('DOMContentLoaded', () => {
    const eyes = document.querySelectorAll('.eye-roll');

    window.addEventListener('mousemove', (e) => {
      eyes.forEach(eye => {
        const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2);
        const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2);
        const radian = Math.atan2(e.clientX - x, e.clientY - y); // Use e.clientY here
        const rot = (radian * (180 / Math.PI) * -1) + 90;
        eye.style.transform = `rotate(${rot}deg)`;
        
        console.log(rot);
      });
    });
  });
