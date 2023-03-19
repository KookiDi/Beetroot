let playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN",
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY",
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD",
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER",
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER",
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK",
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU",
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN",
    },
];

let playlistElement = document.getElementById("playlist");

playList.forEach(function (song) {
    let li = document.createElement("li");
    let text = document.createTextNode(
        song.author + " - " + song.song
    );
    li.appendChild(text);
    li.classList.add("song");
    li.classList.add("author");
    playlistElement.appendChild(li);
});
//--------------------------------------------------------------------------------------------------------------
function showModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
}

function hideModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
