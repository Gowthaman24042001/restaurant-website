document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuCol = document.querySelector('.menu-col');
    const closeIcon = document.querySelector('.close');

    menuToggle.addEventListener('click', function() {
        menuCol.classList.add('active');
        closeIcon.style.display = 'block';
    });

    closeIcon.addEventListener('click', function() {
        menuCol.classList.remove('active');
        closeIcon.style.display = 'none';
    });
});
