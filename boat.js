document.addEventListener('DOMContentLoaded', function () {
    const cat = document.querySelector('.cat1');
    const category = document.querySelector('.category')
    cat.addEventListener('mouseenter', function () {
        category.classList.add("active");
    });

    cat.addEventListener('mouseleave', function () {
        category.classList.remove('active');
    });
});
