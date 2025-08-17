const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
        setTimeout(() => {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
        }, index * 200); // stagger effect (200ms delay per image)
        observer.unobserve(entry.target); // only once
    }
    });
}, { threshold: 0.2 });

reveals.forEach((el) => observer.observe(el));