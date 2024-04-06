document.addEventListener("DOMContentLoaded", function(){
    const links = document.querySelectorAll('.pagination a');
    const prevLink = document.getElementById('prev');
    const nextLink = document.getElementById('next');
    const activeLink = document.querySelector('.pagination a.active');
    let currentPage = parseInt(activeLink.textContent);

    prevLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            window.location.href = links[currentPage].href;
        }
    });

    nextLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentPage < links.length - 1) {
            currentPage++;
            updatePagination();
            window.location.href = links[currentPage].href;
        }
    });

    function updatePagination() {
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        links[currentPage - 1].classList.add('active');
    }
});
