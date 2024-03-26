window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    ruffle.config ={
        "autoplay": "on",
    }
    const player = ruffle.createPlayer();
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("EscapeRoom11.swf");
});