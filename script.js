// Criação de corações flutuando
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 300);

// Botão "ocê me ama"
function teAmoWee() {
  alert("Eu sabia que ocê me ama!!! 😍 Te amo mais ainda caramelo 💞");
}
