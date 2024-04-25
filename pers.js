// Mobile: Fecha menu após escolha
let navItems = document.querySelectorAll('.navbar li a');
let navClose = document.querySelector('.navbar-collapse');
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (navClose.classList.contains('show')) {
            navClose.classList.remove('show');
        }
    });
});

let lastScrollY = 0;

function changeNavClass(lastPosition, position) {
    if (position == 0) {
        $('#navbar').removeClass("hiddenNavBar");
        return
    }
    if (lastPosition < position){
        $('#navbar').addClass("hiddenNavBar");
    }else{
        $('#navbar').removeClass("hiddenNavBar");
    }
}

$(window).on('scroll',function () {
   changeNavClass(lastScrollY,this.scrollY);
   lastScrollY = this.scrollY;
});

