function updateBodyMargin() {
    // Get height of header
    const header = document.querySelector('.main-header');
    const headerHeight = header.offsetHeight;

    // Set margin of body to height of header
    document.body.style.marginTop = headerHeight + 'px';
}

window.addEventListener('load', updateBodyMargin);
window.addEventListener('resize', updateBodyMargin);
