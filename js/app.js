// app.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');

    // Fungsi untuk mengubah tema
    function toggleTheme() {
        if (themeSwitch.checked) {
            // Aktifkan dark mode
            document.body.classList.add('dark-mode');
        } else {
            // Nonaktifkan dark mode
            document.body.classList.remove('dark-mode');
        }
    }

    // Tambahkan event listener ke checkbox
    themeSwitch.addEventListener('change', toggleTheme);
});
