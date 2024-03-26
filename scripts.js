window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {

    const ruffle = window.RufflePlayer.newest();
    
    const player = ruffle.createPlayer();
    player.style.width = "100vw";
    player.style.height = "100vh";
    player.config ={
        autoplay: "on",
        unmuteOverlay: "hidden",
    }
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("EscapeRoom11.swf");
});