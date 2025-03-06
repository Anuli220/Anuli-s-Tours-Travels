

const Anuli = new Typed('.span-effect',{
    strings:['food', 'wine', 'holiday specials', 'resorts'],
    typeSpeed: 75,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
const Anu = new Typed('.about-effect',{
        strings:['food', 'wine', 'holiday specials', 'resorts'],
        typeSpeed: 75,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    })

const carousel = document.querySelector('.carousel');   
const nextBtn = document.querySelector('.next-btn');   
const prevBtn = document.querySelector('.prev-btn');
let currentIndex = 0;
const itemWidth = 320; // Width of each testimonial (including margin/padding)

nextBtn.addEventListener('click', () => {
    const maxIndex = carousel.children.length - 1;
    if (currentIndex < maxIndex) {
        currentIndex++;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});   
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
});

document.querySelector("form").addEventListener("submit",function(event){
    document.body.classList.add("sent")
});