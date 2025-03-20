document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Modal Functionality
    const services = document.querySelectorAll('.service');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Buka modal saat service diklik
    services.forEach(service => {
        service.addEventListener('click', () => {
            const modalId = service.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Tutup modal saat tombol close diklik
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    // Tutup modal saat klik di luar konten
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Slider di dalam modal
    modals.forEach(modal => {
        const slider = modal.querySelector('.image-slider-modal');
        const slides = slider.querySelectorAll('.slide-modal');
        const dots = slider.querySelectorAll('.dot-modal');
        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                dots[i].classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                    dots[i].classList.add('active');
                }
            });
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                currentSlide = i;
                showSlide(currentSlide);
            });
        });

        showSlide(currentSlide);
    });
});