function checkPin() {
    const pin = document.getElementById("pin").value;

    if (pin === "0516") {
        document.getElementById("pin-screen").style.display = "none";
        document.getElementById("music-screen").style.display = "block";
    } else {
        document.getElementById("message").innerHTML = "❌ Wrong PIN! Try Again 😛";
    }
}

function selectMusic(song) {
    const music = document.getElementById("bgMusic");

    music.src = song;
    music.play();

    alert("🎵 Music Selected!");
}

function continuePage() {
    alert("💗 Hearts Animation Coming Next...");
}
