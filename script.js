var navigation = document.querySelector('.main-nav');
var mobileNavigation = document.querySelector('.mobile-nav');

mobileNavigation.addEventListener('click', function() {
    navigation.classList.toggle('mobile');
});

document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = document.querySelectorAll('img.lazy')
    var lazyLoadThrottleTimeout;
    
    function lazyLoad() {
        if(lazyLoadThrottleTimeout) {
            clearTimeout(lazyLoadThrottleTimeout)
        }
        
        lazyLoadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.pageYOffset;
            lazyImages.forEach(function(img) {
                var offsetTop = 0, tempElement = img;
                while(tempElement) {
                    offsetTop += tempElement.offsetTop;
                    tempElement = tempElement.offsetParent;
                }
                console.log(offsetTop);
                if(offsetTop < (window.innerHeight + scrollTop + 500)) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
            if(lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                document.removeEventListener('resize', lazyLoad);
                document.removeEventListener('orientationchange', lazyLoad);
            }
        }, 20);
    }
    
    document.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);
});