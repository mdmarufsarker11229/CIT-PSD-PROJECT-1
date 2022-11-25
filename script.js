const nav=document.querySelector("nav");
const bottom_top=document.querySelector(".back_to_top");

window.addEventListener('scroll',function(){

    const scroll_value=window.scrollY;
    if(scroll_value>180){
        nav.classList.add("sticky");

    }else {
        nav.classList.remove("sticky");
    }

    if(scroll_value>180){
        bottom_top.classList.add("show");
    }else {
        bottom_top.classList.remove("show");
    }
})