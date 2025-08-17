 const body = document.body
const toggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Load saved theme
// if (localStorage.getItem('theme') === 'dark') {
//   html.classList.add('dark');
//   toggle.textContent = '☀️';
// }

toggle.addEventListener('click', () => {
    
    body.classList.toggle("bg-gray-900");
    body.classList.toggle("text-white");
    body.classList.toggle("border-black");

    body.classList.toggle("bg-white");

    var elements = document.querySelectorAll(".text-gray-800");

    elements.forEach(el => {
    el.classList.remove("text-gray-800");
    el.classList.add("text-white");
    });

    var elements = document.querySelectorAll(".text-gray-700");

    elements.forEach(el => {
    el.classList.remove("text-gray-700");
    el.classList.add("text-white");
    });

    elements = document.querySelectorAll(".border-black");

    elements.forEach(el => {
    el.classList.remove("border-black");
    el.classList.add("border-white");
    });

    elements = document.querySelectorAll("img");

    elements.forEach(el => {
    el.classList.add("mask-t-from-50%");
    });

    document.querySelectorAll('.hover\\:text-white').forEach(el => {
    el.classList.remove('hover:text-white');
    el.classList.remove('hover:bg-black');
    el.classList.add('hover:text-black');
    el.classList.add('hover:bg-white');
    });



    if (html.classList.contains('dark')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
    } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
    }
});