const startDate = new Date("2025-12-26T00:00:00").getTime();
function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;
    document.getElementById("months").innerText = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    document.getElementById("weeks").innerText = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
    document.getElementById("days").innerText = Math.floor((diff % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerText = Math.floor((diff % (1000 * 60)) / 1000);
}
setInterval(updateTimer, 1000);

function sendHug() {
    document.body.classList.add('shaking');
    setTimeout(() => document.body.classList.remove('shaking'), 400);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function reveal(el) {
    el.querySelector('.placeholder').classList.add('hidden');
    el.querySelector('.real-content').classList.remove('hidden');
    confetti({ particleCount: 30, origin: { x: Math.random(), y: Math.random() } });
}

const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 200; canvas.height = 250;
ctx.fillStyle = '#777';
ctx.fillRect(0, 0, canvas.width, canvas.height);
const scratch = (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2); ctx.fill();
};
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('touchmove', scratch);