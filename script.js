const songlist = document.getElementById("songList");
const player = document.getElementById("player");
const slider = document.getElementById("volumeSlider");
const songs = [
	"bensound-allthat.mp3",
	"bensound-cute.mp3",
	"bensound-dreams.mp3",
	"bensound-endlessmotion.mp3",
	"bensound-moose.mp3",
];

const createSonglist = () => {
	const list = document.createElement("ol");
	songs.forEach((song) => {
		const item = document.createElement("li");
		item.appendChild(document.createTextNode(song));
		list.appendChild(item);
	});
	return list;
};

songlist.addEventListener("click", (e) => {
	document.querySelector("#thumbnail").classList.remove("pulse");
	const source = document.getElementById("source");
	source.src = `songs/${e.target.innerText}`;
	document.querySelector(
		"#currentSong"
	).innerText = `Now Playing: ${e.target.innerText}`;

	player.load();
	player.play();
	document.querySelector("#thumbnail").classList.add("pulse");
});

const playAudio = () => {
	if (player.readyState) {
		player.play();
	}
};

const pauseAudio = () => {
	player.pause();
};

slider.addEventListener("input", (e) => {
	const volume = e.target.value;
	player.volume = volume;
});

const updateProgress = () => {
	if (player.currentTime > 0) {
		const progressBar = document.getElementById("progress");
		progressBar.value = (player.currentTime / player.duration) * 100;
	}
};

songlist.appendChild(createSonglist());
