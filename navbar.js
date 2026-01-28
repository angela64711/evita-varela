document.addEventListener('DOMContentLoaded', () => {
    // =========================
    // Navbar toggler icons
    // =========================
    const toggler = document.querySelector('.navbar-toggler');
    const icon = toggler.querySelector('i');
    const collapseElement = document.getElementById('navbarNav');

    collapseElement.addEventListener('show.bs.collapse', () => {
        icon.classList.remove('fa-ellipsis-vertical');
        icon.classList.add('fa-ellipsis');
    });

    collapseElement.addEventListener('hide.bs.collapse', () => {
        icon.classList.remove('fa-ellipsis');
        icon.classList.add('fa-ellipsis-vertical');
    });

    // =========================
    // Dynamic body padding + scroll-margin-top
    // =========================
    function adjustBodyPaddingAndScroll() {
        const navbar = document.querySelector('.navbar.fixed-top');
        if (!navbar) return;

        const navbarHeight = navbar.offsetHeight;

        // Body padding
        document.body.style.paddingTop = navbarHeight + 'px';

        // Scroll-margin-top for all sections with IDs (anchors)
        document.querySelectorAll('[id]').forEach(el => {
            el.style.scrollMarginTop = navbarHeight + 'px';
        });
    }

    // Run once immediately
    adjustBodyPaddingAndScroll();

    // Update on resize / orientation change
    window.addEventListener('resize', adjustBodyPaddingAndScroll);
    window.addEventListener('orientationchange', adjustBodyPaddingAndScroll);
});
