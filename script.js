document.addEventListener("DOMContentLoaded", function () {

    var hamburger = document.getElementById('hamburgerBtn');
    var mobileMenu = document.querySelector('.mobileNav');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });
    }

    var currentFile = window.location.pathname.split('/').pop();
    if (currentFile === '') currentFile = 'index.html';

    var allLinks = document.querySelectorAll('.topNav a, .mobileNav a');

    for (var i = 0; i < allLinks.length; i++) {
        var linkHref = allLinks[i].getAttribute('href');
        if (linkHref === currentFile) {
            allLinks[i].classList.add('active');
        }
    }

    var tabs = document.querySelectorAll('.tabBtn');
    var panels = document.querySelectorAll('.menuPanel');

    if (tabs.length > 0 && panels.length > 0) {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener('click', function () {
                var target = this.getAttribute('data-tab');

                for (var j = 0; j < tabs.length; j++) {
                    tabs[j].classList.remove('active');
                }

                for (var j = 0; j < panels.length; j++) {
                    panels[j].classList.remove('active');
                }

                this.classList.add('active');

                var targetPanel = document.getElementById(target);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        }
    }

});