const toggleDarkMode = document.querySelector('.setting-toggle');
toggleDarkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

