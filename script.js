document.addEventListener("DOMContentLoaded", () => {
    const sparkles = document.querySelectorAll('.sparkle');
    const container = document.querySelector('.container');

    sparkles.forEach(sparkle => {
        sparkle.style.top = `${Math.random() * container.clientHeight}px`;
        sparkle.style.left = `${Math.random() * container.clientWidth}px`;

        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        sparkle.style.animationDuration = `${2 + Math.random() * 3}s`;
    });
});