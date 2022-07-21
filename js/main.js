/* Show & hide menu */
let menu = document.querySelector('.nav-menu');
let menuBtn = document.querySelector('#open-menu-btn');
let navbar = document.querySelector('nav');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () =>{
  menuBtn.classList.remove('bx-x');
  menu.classList.remove('active');
  navbar.classList.toggle('window-scroll', window.scrollY > 0);
}

/* Show & hide answers */
let allAns = document.querySelectorAll('.question');

allAns.forEach(ans => {
    ans.addEventListener('click',()=>{
        ans.classList.toggle('show');

        let icon = ans.querySelector('.question-item i');
        //change icon
        if(icon.className === 'bx bx-plus')
        {
            icon.className = "bx bx-minus";
        }
        else 
        {
            icon.className = "bx bx-plus";
        }
    }) 
});
 
/* Swiper testimonials */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:{
        delay: 7000,
        disableOnInteration: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
  });

/* Bact to top */
let backToTopBtn = document.querySelector('#back-to-top');
window.addEventListener("scroll",() => {
  if(window.scrollY > 100){
    backToTopBtn.classList.add("show");
  }else{
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.onclick = () => {
  console.log("p");
  window.scrollTo(0,0);
};
