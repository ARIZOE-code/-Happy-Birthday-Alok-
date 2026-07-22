* { margin:0; padding:0; box-sizing:border-box; }

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(45deg, #1e3c72, #ff4081);
    color: white;
    min-height: 100vh;
    overflow-x: hidden;
}

.loading {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    color: white;
}

.progress {
    width: 300px;
    height: 6px;
    background: #333;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
}

.progress::after {
    content: '';
    display: block;
    width: 0;
    height: 100%;
    background: linear-gradient(to right, #ff4081, #ffd700);
    animation: load 4s forwards;
}

@keyframes load { to { width: 100%; } }

.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 20px;
}

.hero-content span { color: #ffd700; }

.hero-img {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    border: 12px solid rgba(255,255,255,0.3);
    margin-top: 30px;
    box-shadow: 0 0 60px rgba(255,64,129,0.6);
}

.memories h2, .message-box h2, .wishes h2 {
    text-align: center;
    margin: 40px 0 20px;
    font-size: 2.2rem;
}

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
    padding: 20px;
}

.gallery img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    transition: 0.4s;
}

.gallery img:hover { transform: scale(1.08); }

.message-box p {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.4rem;
    line-height: 1.8;
    background: rgba(255,255,255,0.1);
    padding: 30px;
    border-radius: 20px;
}

button {
    background: #ff4081;
    color: white;
    border: none;
    padding: 16px 40px;
    font-size: 1.3rem;
    border-radius: 50px;
    cursor: pointer;
    margin: 20px auto;
    display: block;
}