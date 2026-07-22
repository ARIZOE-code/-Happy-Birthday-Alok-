const audio = document.getElementById('birthday-music');

function playMusic() {
    if (audio.paused) {
        audio.play();
        launchConfetti();
    } else {
        audio.pause();
    }
}

function launchConfetti() {
    const colors = ['#ff4081', '#e91e63', '#ff9800', '#4caf50', '#2196f3'];
    for (let i = 0; i < 180; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.style.position = 'fixed';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.top = '-10px';
            c.style.width = '12px';
            c.style.height = '12px';
            c.style.background = colors[Math.floor(Math.random()*colors.length)];
            c.style.opacity = Math.random() * 0.8 + 0.5;
            document.body.appendChild(c);

            let y = -10;
            const speed = 4 + Math.random() * 6;
            const sway = Math.random() * 3 - 1.5;

            function fall() {
                y += speed;
                c.style.top = y + 'vh';
                c.style.left = (parseFloat(c.style.left) + sway) + 'vw';
                if (y < 110) requestAnimationFrame(fall);
                else c.remove();
            }
            fall();
        }, i * 6);
    }
}

function submitWish() {
    const input = document.getElementById('wish-input');
    const display = document.getElementById('wishes-display');
    
    if (input.value.trim() !== '') {
        const wish = document.createElement('div');
        wish.className = 'wish';
        wish.innerHTML = `<strong>Wish for Alok:</strong><br>${input.value}`;
        display.appendChild(wish);
        input.value = '';
        launchConfetti(); // mini celebration
    }
}

// Auto confetti on load
window.onload = () => setTimeout(launchConfetti, 600);