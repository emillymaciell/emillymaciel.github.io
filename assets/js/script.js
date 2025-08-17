const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll('.accordion__header');
const menuLinks = document.querySelectorAll(".menu__link");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    rootHtml.setAttribute("data-theme", savedTheme);
    if (savedTheme === "dark") {
        toggleTheme.classList.add("bi-sun");
        toggleTheme.classList.remove("bi-moon");
    } else {
        toggleTheme.classList.add("bi-moon");
        toggleTheme.classList.remove("bi-sun");
    }
}

function changeTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    rootHtml.setAttribute('data-theme', newTheme);

    toggleTheme.classList.toggle('bi-sun')
    toggleTheme.classList.toggle('bi-moon')


    localStorage.setItem("theme", newTheme);
}

toggleTheme.addEventListener('click', changeTheme);

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains('active');

        accordionActive ? accordionItem.classList.remove('active') : accordionItem.classList.add('active');
    })
})

menuLinks.forEach(item => {
    item.addEventListener("click", () => {
        menuLinks.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    })
})
