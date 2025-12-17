
window.addEventListener('load', () => {
    const grid = document.querySelector('.masonry-grid');
    if (!grid) return;

    const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(getComputedStyle(grid).getPropertyValue('gap'));

    grid.querySelectorAll('.masonry-item').forEach(item => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.masonry-caption');

        if (!img || !caption) return;

        const contentHeight =
            img.getBoundingClientRect().height +
            caption.getBoundingClientRect().height;

        const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = `span ${rowSpan}`;
    });
});



const gallery = document.querySelector('.circle-gallery');
const items = document.querySelectorAll('.circle-item');

if (gallery && items.length > 0) {

    const total = items.length;
    let angle = 0;

    function animateCircle() {

        const radius = gallery.offsetWidth / 2.2;

        items.forEach((item, index) => {
            const step = (360 / total) * index + angle;

            item.style.transform =
                `translate(-50%, -50%) rotate(${step}deg) translate(${radius}px) rotate(-${step}deg)`;
        });

        angle += 0.15; 
        requestAnimationFrame(animateCircle);
    }

    animateCircle();
}
