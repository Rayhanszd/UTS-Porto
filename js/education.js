document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengontrol slider
    function setupSlider(containerId) {
        const container = document.getElementById(containerId);
        const slides = container.querySelectorAll(".slide");
        const dots = container.querySelectorAll(".dot");
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
                dots[i].classList.toggle("active", i === index);
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });

        showSlide(currentIndex); // Tampilkan slide pertama saat halaman dimuat
    }

    // Terapkan slider ke semua container
    setupSlider("education1");
    setupSlider("education2");
});
