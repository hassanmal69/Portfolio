const video = document.querySelector('#hovervideo');
video.addEventListener("click",()=>{
    console.log('object');
})
video.addEventListener('mouseenter', () => {
    video.play();
    console.log('object');
});

video.addEventListener('mouseleave', () => {
    video.pause();
});
const video2 = document.querySelector('#hovervideo2');

video2.addEventListener('mouseenter', () => {
    video2.play();
    console.log('object');
});

video2.addEventListener('mouseleave', () => {
    video2.pause();
});
const tags=document.querySelector(".links");
const menu=document.querySelector(".menu");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        tags.classList.remove("show");
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
menu.addEventListener("click",()=>{
    tags.classList.toggle("show");
    
});
