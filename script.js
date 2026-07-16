const openBtn = document.getElementById("openBtn");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {

    cover.style.opacity = "0";
    cover.style.transition = "0.8s";

    setTimeout(() => {
        cover.style.display = "none";
        invitation.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});
