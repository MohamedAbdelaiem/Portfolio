/*=============== SHOW MENU ===============*/
const nav_logo =document.querySelector('header .logo');
const nav_menu =document.querySelector('header ul');
const items=document.querySelector('.Items');
const header=document.querySelector('header');
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


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
