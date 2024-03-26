window.RufflePlayer = window.RufflePlayer || {};
window.addEventListener("load", (event) => {
    // window.RufflePlayer.config = {
    //     // Start playing the content automatically, without audio if the browser in use does not allow audio to autoplay
    //    "autoplay": "on",
    // }
    const ruffle = window.RufflePlayer.newest();

    const player = ruffle.createPlayer();
    player.config ={
        autoplay: "on",
    }
    const container = document.getElementById("container");
    container.appendChild(player);
    player.load("EscapeRoom11.swf");
});