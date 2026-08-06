const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function openLightbox(index){
    current = index;
    lightbox.classList.add("active");
    lightboxImg.src = images[current].src;
}

function showNext(){
    current = (current + 1) % images.length;
    lightboxImg.src = images[current].src;
}

function showPrev(){
    current = (current - 1 + images.length) % images.length;
    lightboxImg.src = images[current].src;
}

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        openLightbox(index);
    });
});

closeBtn.addEventListener("click",()=>{
    lightbox.classList.remove("active");
});

nextBtn.addEventListener("click",showNext);

prevBtn.addEventListener("click",showPrev);

lightbox.addEventListener("click",(e)=>{
    if(e.target===lightbox){
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){
        lightbox.classList.remove("active");
    }

    if(e.key==="ArrowRight"){
        showNext();
    }

    if(e.key==="ArrowLeft"){
        showPrev();
    }

});
