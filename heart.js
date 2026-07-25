<style>
.heart{
    position:fixed;
    bottom:-20px;
    font-size:30px;
    animation:heartMove 5s linear infinite;
    pointer-events:none;
}

@keyframes heartMove{
    0%{
        transform:translateY(0) scale(1);
        opacity:1;
    }
    100%{
        transform:translateY(-100vh) scale(1.5);
        opacity:0;
    }
}
</style>


<script>

function startLove(){

    // music start
    document.getElementById("music").play();

    // hearts start
    setInterval(createHeart,300);
}


function createHeart(){

    let heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="💗";

    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*3+2)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },5000);
}

</script>
