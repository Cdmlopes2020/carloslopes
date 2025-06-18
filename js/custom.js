

const checkbox = document.getElementById('toggleMode');
const body = document.getElementById('siteBody');
const text = document.querySelectorAll('.textomudar');

checkbox.addEventListener('change', () => {
  const theme = checkbox.checked ? 'light' : 'dark';
  body.setAttribute('data-theme', theme);

  // Aplica o data-theme a cada elemento com a classe textomudar
  text.forEach(el => {
    el.setAttribute('data-theme', theme);
  });
});






window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('hidden');

    // Depois da animação, esconder mesmo o elemento e mostrar conteúdo
    splash.addEventListener('transitionend', () => {
      splash.style.display = 'none';
      document.getElementById('content').style.display = 'block';
    });
  }, 3000); // 3000 ms = 3 segundos
});


//CURSOR 


const cursor = document.querySelector(".cursor");
const hoverTargets = document.querySelectorAll(".hover-target");

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.15;
  currentY += (mouseY - currentY) * 0.15;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animate);
}

animate();

// Hover effects
hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});








