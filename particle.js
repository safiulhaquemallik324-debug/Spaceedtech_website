// const container = document.getElementById("particles");
// const total = 40; // কতগুলো dot

// for (let i = 0; i < total; i++) {
//     const dot = document.createElement("div");
//     dot.classList.add("particle");

//     const size = Math.random() * 4 + 2;
//     dot.style.width = size + "px";
//     dot.style.height = size + "px";

//     dot.style.left = Math.random() * 100 + "%";
//     dot.style.animationDuration = (Math.random() * 10 + 10) + "s";
//     dot.style.animationDelay = Math.random() * 5 + "s";

//     container.appendChild(dot);
// }
const blob = document.querySelector(".blob-1");

document.addEventListener("mousemove", e => {
    blob.style.transform =
        `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
});