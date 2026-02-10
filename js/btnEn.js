const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const shortText = card.querySelector(".short");
    const longText = card.querySelector(".long");
    const btn = card.querySelector(".toggle-btn");

    btn.addEventListener("click", () => {
        const showingShort = shortText.classList.contains("active");

        if (showingShort) {
            shortText.classList.remove("active");
            longText.classList.add("active");
            btn.textContent = "Return";
            btn.classList.add("return");
        } else {
            longText.classList.remove("active");
            shortText.classList.add("active");
            btn.textContent = "Read More";
            btn.classList.remove("return");
        }
    });
});
