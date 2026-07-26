// ===== PIN =====
function checkPin() {
    let pin = document.getElementById("pin").value;

    if (pin === "0516") {
        document.getElementById("pin-screen").style.display = "none";
        document.getElementById("music-screen").style.display = "block";
    } else {
        document.getElementById("message").innerHTML = "❌ Wrong PIN";
    }
}

// ===== MUSIC =====
function selectMusic(song) {
    let music = document.getElementById("bgMusic");
    music.src = song;
    music.play();
}

function continuePage() {
    document.getElementById("music-screen").style.display = "none";
    document.getElementById("heart-screen").style.display = "block";
}

// ===== MENU =====
function openMenu() {
    document.getElementById("heart-screen").style.display = "none";
    document.getElementById("menu-screen").style.display = "block";
}

function showWish() {
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("wish-screen").style.display = "block";
}

function showLove() {
    document.getElementById("menu-screen").style.display = "none";
    document.getElementById("love-screen").style.display = "block";
}

function showCake() {
    alert("🎂 Cake Animation Coming Soon!");
}

function showGallery() {
    alert("📸 Gallery Coming Soon!");
}

// ===== LOVE =====
function loveYes() {
    alert("💗 I Love You Forever 💗");
}

// ===== NO BUTTON =====
function moveNoButton() {
    let btn = document.getElementById("noBtn");

    btn.style.position = "absolute";
    btn.style.left = Math.random() * 250 + "px";
    btn.style.top = Math.random() * 400 + "px";
}
