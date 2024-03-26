document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p");
        elements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("show");
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
