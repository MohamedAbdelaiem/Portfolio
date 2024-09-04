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
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message')

    emailjs.init({
      publicKey: "KZNJXS_gE3veFCGEz",
    });
const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - puplicKey
    emailjs
      .sendForm(
        "service_8a1yx8c",
        "template_k3ix7bn",
        "contact-form",
        "KZNJXS_gE3veFCGEz"
      )
      .then(
        () => {
          // show message
              contactMessage.textContent = "Message sent successfully ✅";
              
              setTimeout(() => {
                  contactMessage.textContent=""
              }, 5000)
              contactForm.reset();

            },
            (error) => {
                //show error message
                contactMessage.textContent =
                "Message not sent (service error) ❌";
                contactForm.reset();
        }
      );

    // emailjs.sendForm("service_8a1yx8c", "contact_form", this).then(
    //   () => {
    //     console.log("SUCCESS!");
    //   },
    //   (error) => {
    //     console.log("FAILED...", error);
    //   }
    // );
}

contactForm.addEventListener("submit", sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
