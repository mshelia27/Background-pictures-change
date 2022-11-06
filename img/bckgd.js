const container = document.querySelector('.images');
const prevBtnn= document.querySelector('.prevBtn');
const nextBtnn = document.querySelector('.nextBtn');


let counter=0;

nextBtnn.addEventListener('click', nextSlide);
prevBtnn.addEventListener('click', prevSlide);


function nextSlide(){
    if(counter==4){
        counter=-1
    }
    counter++;
    
    container.style.backgroundImage=`url(bcg-${counter}.JPG)`;

}
function prevSlide(){
    if(counter==0){
        counter=5
    }
    counter--;
    container.style.backgroundImage=`url(bcg-${counter}.JPG)`;

}