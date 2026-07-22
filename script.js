// Loading
setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}, 4200);

// Typing effect for message
const message = "Bhagwan tumhe hamesha khush rakhe. Tumhari har wish puri ho. Jaldi ek accha life partner mile aur zindagi khushiyon se bhari rahe. Happy Birthday Alok! ❤️";
let i = 0;
const typed = document.getElementById('typed-message');

function type() {
    if (i < message.length) {
        typed.innerHTML += message.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

setTimeout(type, 1000);

// Confetti
function launchConfetti() {
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const conf = document.createElement('div');
            conf.textContent = ['🎉','🎊','❤️','✨'][Math.floor(Math.random()*4)];
            conf.style.position = 'fixed';
            conf.style.left = Math.random()*100 + 'vw';
            conf.style.top = '-50px';
            conf.style.fontSize = '2rem';
            document.body.appendChild(conf);
            let y = 0;
            const speed = 5 + Math.random() * 8;
            function fall() {
                y += speed;
                conf.style.top = y + 'vh';
                if (y < 120) requestAnimationFrame(fall);
                else conf.remove();
            }
            fall();
        }, i*8);
    }
}

function startParty() {
    launchConfetti();
    alert("🎉 Party Shuru! Enjoy Alok's Birthday Celebration!");
}

// Wish
function addWish() {
    const wishText = document.getElementById('wish').value;
    if (!wishText) return;
    
    const list = document.getElementById('wish-list');
    const div = document.createElement('div');
    div.style.background = 'rgba(255,255,255,0.15)';
    div.style.padding = '15px';
    div.style.margin = '10px';
    div.style.borderRadius = '12px';
    div.textContent = wishText;
    list.appendChild(div);
    document.getElementById('wish').value = '';
    launchConfetti();
}