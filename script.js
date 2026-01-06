const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const closeBackdrop = document.getElementById("closeBackdrop");
const video = document.getElementById("video");

function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // Try autoplay (some browsers block it unless muted)
    // video.muted = true; video.play();
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    video.pause();
    video.currentTime = 0;
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
closeBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
