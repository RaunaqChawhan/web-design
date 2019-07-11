var navigation = document.querySelector('.main-nav');
var mobileNavigation = document.querySelector('.mobile-nav');

mobileNavigation.addEventListener('click', function() {
    navigation.classList.toggle('mobile');
});