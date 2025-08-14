document.addEventListener("DOMContentLoaded", function () {
    const accordionBtns = document.querySelectorAll("#accordion");

    accordionBtns.forEach(btn => {
        const plusMinus = btn.querySelector("span");

        btn.addEventListener("click", function () {
            accordionBtns.forEach(otherBtn => {
                const otherPanel = otherBtn.nextElementSibling;
                const otherPlusMinus = otherBtn.querySelector("span");

                if (otherBtn !== btn) {
                    // Dusre panel ko smoothly close karo
                    otherPanel.style.maxHeight = null;
                    otherPanel.classList.remove("show");
                    otherPlusMinus.textContent = "+";
                }
            });

            // Click kiya hua panel toggle karo
            const panel = btn.nextElementSibling;

            if (panel.classList.contains("show")) {
                panel.style.maxHeight = null; // smoothly close
                panel.classList.remove("show");
                plusMinus.textContent = "+";
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // smoothly open
                panel.classList.add("show");
                plusMinus.textContent = "-";
            }
        });
    });
});
