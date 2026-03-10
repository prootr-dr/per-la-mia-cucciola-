// TIMER
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

// ABBRACCIO
function sendHug() {
    document.body.classList.add('shaking');
    setTimeout(() => document.body.classList.remove('shaking'), 500);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// SCOPRI FOTO/NOTE
function reveal(el) {
    const placeholder = el.querySelector('.placeholder');
    const content = el.querySelector('.real-content');
    if(placeholder && !placeholder.classList.contains('hidden')) {
        placeholder.classList.add('hidden');
        content.classList.remove('hidden');
        confetti({ particleCount: 40, origin: { x: 0.5, y: 0.5 } });
    }
}

// GRATTA E VINCI (TOUCH FRIENDLY)
const canvas = document.getElementById('scratch-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 200; canvas.height = 250;
ctx.fillStyle = '#888';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function scratch(e) {
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath(); ctx.arc(x, y, 20, 0, Math.PI * 2); ctx.fill();
}
canvas.addEventListener('mousemove', scratch);
canvas.addEventListener('touchmove', (e) => { scratch(e); e.preventDefault(); }, {passive: false});