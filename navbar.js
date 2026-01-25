document.addEventListener('DOMContentLoaded', () => {
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
});