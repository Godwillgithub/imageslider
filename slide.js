const imagecontainer = document.querySelector('.image-container');
const imageslideshow = document.querySelectorAll(".image-container img ");


//button
const prevBtn =document.querySelector("#prevBtn");
const nextBtn =document.querySelector("#nextBtn");

//counter
let counter = 1
const size = imageslideshow['0'].clientWidth;

imagecontainer.style.transform ='translateX(' +(-size * counter) + 'px)';

// button Listener

nextBtn.addEventListener('click',()=>{
    imagecontainer.style.transition = "transform 0.4s ease-in-out"
    counter ++;
    imagecontainer.style.transform ='translateX(' +(-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    imagecontainer.style.transition = "transform 0.4s ease-in-out"
    counter--;
    imagecontainer.style.transform ='translateX(' +(-size * counter) + 'px)';
});

imagecontainer.addEventListener('transitionend', ()=>{
    console.log(imageslideshow[counter]);
    if (imageslideshow[counter].id === "lastclone"){
        imageslideshow.style.transition = "none";
        counter =  imageslideshow.length -2;
        imagecontainer.style.transform ='translateX(' +(-size * counter) + 'px)';
    }
})