let info = document.querySelector(".info");
let read = document.querySelector(".markRead");
let names = document.querySelector("b");

info.addEventListener("mouseover",() => {
    info.style.backgroundColor = "hsl(211, 68%, 94%)";
});

info.addEventListener("mouseout", () => {
	info.style.backgroundColor = "";
});

names.addEventListener("mouseover", () => {
    document.querySelectorAll("b").forEach((b) => {
			b.style.color = "hsl(211, 68%, 94%)";
		});
});

read.addEventListener("click", () => {
    document.querySelector(".count").innerText = "0";
    document.querySelectorAll(".ppls").forEach(ppl => {
        ppl.style.backgroundColor = "white";
    });
    document.querySelectorAll(".dot").forEach(dot => {
        dot.classList.add("hide");
    });
});