'use strict';

/*=============== SHOW MENU ===============*/
const nav_logo =document.querySelector('header .logo');
const nav_menu =document.querySelector('header ul');
const items=document.querySelector('.Items');
const headers=document.querySelector('.header');
const links=document.querySelectorAll("header ul li a");

nav_logo.addEventListener('click',()=>{
    nav_menu.classList.toggle('list_items');
    nav_menu.classList.toggle('vertical_list');
    if(items.style.display===''){
        items.style.display='block';
    }
    else{
        items.style.display='';
    }
});

document.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e.target.closest('header'));
    if(!e.target.closest('header') && e.target!=='logo'){
        if(nav_menu.classList.contains('vertical_list')){
            console.log('pop');
            nav_menu.classList.remove('vertical_list');
            nav_menu.classList.add('list_items');
            items.style.display='';
        }
    }
});

nav_menu.addEventListener('click',function(e){
    if(e.target.tagName==='A'){
        links.forEach(link =>  {
            console.log(link);
            return link.
            style.color="hsl(0, 0%, 100%)";
        });
        e.target.setAttribute("style","color:hsl(162, 100%, 40%)");
    }
})





/*=============== ADD BLUR TO HEADER ===============*/
const headerHeight = headers.getBoundingClientRect().height;
console.log(headers);
window.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        console.log('sss');
        headers.classList.add('blur_header');
    }else{
        headers.classList.remove('blur_header');
    }
    nav_menu.classList.remove('blur_header')
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_igwdy3e', 'template_zuyqupk', '#contact-form','F98WFZaHaq27c8AMB')
    .then(()=>{
        contactMessage.textContent = 'Your message has been sent successfully✅';
        contactMessage.style.color = 'green';

        setTimeout(()=>{
            contactMessage.textContent = '';
        },5000);

        contactForm.reset();

        
    },()=>{
        contactMessage.textContent = 'Your message has not been sent successfully❌';
        contactMessage.style.color = 'red';
    })
    
}

contactForm.addEventListener("submit", sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
