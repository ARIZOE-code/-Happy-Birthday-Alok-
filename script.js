// Loading
setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}, 3800);

// Typing Effect
const text = "May your life be filled with happiness, success, love and all the beautiful things you deserve. Happy Birthday Alok! ❤️";
let index = 0;
const typedElement = document.getElementById('typed-text');

function typeWriter() {
    if (index < text.length) {
        typedElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}
setTimeout(typeWriter, 1000);

// Celebration
function startCelebration() {
    for (let i = 0; i < 180; i++) {
        setTimeout(() => {
            const c = document.createElement('div');
            c.textContent = '🎉❤️✨🎊';
            c.style.position = 'fixed';
            c.style.left = Math.random() * 100 + 'vw';
            c.style.top = '-50px';
            c.style.fontSize = '2.5rem';
            document.body.appendChild(c);
            
            let pos = -50;
            const speed = 6 + Math.random() * 7;
            function fall() {
                pos += speed;
                c.style.top = pos + 'vh';
                if (pos < 110) requestAnimationFrame(fall);
                else c.remove();
            }
            fall();
        }, i * 7);
    }
}

// Wish
function sendWish() {
    const input = document.getElementById('user-wish');
    const wishesDiv = document.getElementById('wishes');
    
    if (input.value.trim()) {
        const newWish = document.createElement('div');
        newWish.style.margin = '12px auto';
        newWish.style.padding = '15px';
        newWish.style.background = 'rgba(255,255,255,0.15)';
        newWish.style.borderRadius = '12px';
        newWish.style.maxWidth = '600px';
        newWish.textContent = input.value;
        wishesDiv.appendChild(newWish);
        input.value = '';
        startCelebration();
    }
}
