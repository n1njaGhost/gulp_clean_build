function accordion() {
    const items = document.querySelectorAll(".accordion__item");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const content = item.querySelector(".accordion__content");

            item.classList.toggle("active");
            if (item.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            else {
                content.style.maxHeight = 0;
            }

        });
    });
}

accordion();