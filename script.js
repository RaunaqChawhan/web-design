var navigation = document.querySelector('.main-nav');
var mobileNavigation = document.querySelector('.mobile-nav');

mobileNavigation.addEventListener('click', function() {
    navigation.classList.toggle('mobile');
});

document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('img.lazy')
    var lazyLoadThrottleTimeout;
    
    function lazyLoad() {
        
    }
    
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
});