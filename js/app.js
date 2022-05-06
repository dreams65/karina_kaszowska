// burger-menu
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu__button');
  let links = menu.find('.burger-menu__link');
  let overlay = menu.find('.burger-menu__overlay');
 
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
 
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
 
  function toggleMenu() {
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden'); 
    } else {
      $('body').css('overflow', 'visible');
    }
  }
 }
 
 burgerMenu('.burger-menu');


// animation
const heroLogo = new Vivus(
 'hero-logo', 
 {
   type: 'sync',
   duration: 500,
   animTimingFunction: Vivus.EASE
 }
);

 const contact = new Vivus(
  'el_3', 
  {
    type: 'delayed',
    duration: 400,
    pathTimingFunction: Vivus.LINEAR,
    animTimingFunction: Vivus.LINEAR
  }
 );

 // auto scroll

 function scrollTo(element) {
  window.scroll({
   left: 0,
   top: element.offsetTop,
   behavior: 'smooth'
  })
 }
 
 var aboutBtn = document.querySelector('.link_about');
 var servicesBtn = document.querySelector('.link_services');
 var galleryBtn = document.querySelector('.link_gallery');
 var contactFormBtn = document.querySelector('.link_contact-form');
 var contactsBtn = document.querySelector('.link_contacts');
 
 var about = document.querySelector('#about');
 var services = document.querySelector('#services');
 var gallery = document.querySelector('#gallery');
 var contactForm = document.querySelector('#contact-form');
 var contacts = document.querySelector('#contacts');
 
 aboutBtn.addEventListener('click', () => {
  scrollTo(about);
 });
 
 servicesBtn.addEventListener('click', () => {
  scrollTo(services);
 });
 
 galleryBtn.addEventListener('click', () => {
  scrollTo(gallery);
 });
 
 contactFormBtn.addEventListener('click', () => {
  scrollTo(contactForm);
 });
 
 contactsBtn.addEventListener('click', () => {
  scrollTo(contacts);
 });

// before-after slider 

const slider = document.getElementById('before-after-slider');
const before = document.getElementById('before-image');
const beforeImage = before.getElementsByTagName('img')[0];
const resizer = document.getElementById('resizer');

let active = false;

//Sort overflow out for Overlay Image
document.addEventListener("DOMContentLoaded", function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
});

//Adjust width of image on resize 
window.addEventListener('resize', function() {
  let width = slider.offsetWidth;
  console.log(width);
  beforeImage.style.width = width + 'px';
})

resizer.addEventListener('mousedown',function(){
  active = true;
 resizer.classList.add('resize');

});

document.body.addEventListener('mouseup',function(){
  active = false;
 resizer.classList.remove('resize');
});

document.body.addEventListener('mouseleave', function() {
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

resizer.addEventListener('touchstart',function(){
  active = true;
  resizer.classList.add('resize');
});

document.body.addEventListener('touchend',function(){
  active = false;
  resizer.classList.remove('resize');
});

document.body.addEventListener('touchcancel',function(){
  active = false;
  resizer.classList.remove('resize');
});

//calculation for dragging on touch devices
document.body.addEventListener('touchmove',function(e){
  if (!active) return;
  let x;
  
  let i;
  for (i=0; i < e.changedTouches.length; i++) {
  x = e.changedTouches[i].pageX; 
  }
  
  x -= slider.getBoundingClientRect().left;
  slideIt(x);
  pauseEvent(e);
});

function slideIt(x){
    let transform = Math.max(0,(Math.min(x,slider.offsetWidth)));
    before.style.width = transform+"px";
    resizer.style.left = transform-0+"px";
}

//stop divs being selected.
function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

// popup

$(document).ready(function() {
 $(function () {
   $('.popup-modal').magnificPopup({
     type: 'inline',
     preloader: false,
     focus: '#username',
     modal: true,
     removalDelay: 300,
     mainClass: 'mfp-fade'
   });
   $(document).on('click', '.popup-modal-dismiss', function (e) {
     e.preventDefault();
     $.magnificPopup.close();
   });
 });

 $('.gallery__image-popup-link').magnificPopup({
   type: 'image',
   image: {
     markup: 
     '<div class="mfp-content_gallery">'+
     '<div class="mfp-figure-image">'+
     '<div class="mfp-close"></div>'+
     '<div class="mfp-img"></div>'+
     '<div class="mfp-bottom-bar">'+
       '<div class="mfp-title"></div>'+
       '<div class="mfp-counter"></div>'+
     '</div>'+
   '</div>'+
   '</div>',
   },
   gallery:{
     enabled:true
   }
 });
});

//form 

let select = document.getElementById("selectItem");
let options = [
  'Konsultacja – dr Karina Kaszowska',
  'Mezoterapia igłowa',
  'Osocze bogatopłytkowe',
  'Kwas hialuronowy',
  'Toksyna botulinowa',
  'Leczenie nadpotliwości oraz migreny',
  'Nici PDO/PLACL biorewitalizujące',
  'Nici PDO/PLACL liftingujące',
  'Liposukcja',
  'Lipotransfer',
  'Leczenie wypadania włosów',
  'Terapia 4D',
  'Hialuronidaza'
];

for(let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}


 