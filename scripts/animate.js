const backToTop = document.getElementById("backToTop");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        document.querySelectorAll(".animate__animated").forEach(element => {
            element.classList.remove("animate__animated", "animate__fadeInDown", "animate__fadeInLeft");
            setTimeout(() => element.classList.add("animate__animated", "animate__fadeInDown"), 10);
        });

        document.getElementById('menuToggle').addEventListener('click', function() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('translate-x-full');
            menu.classList.toggle('flex');
        });