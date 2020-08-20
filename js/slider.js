// my own slider, govnocode + me = my own slider

const track = document.querySelector('.track');
const btnPrev = document.querySelector('.btnPrev');
const btnMiddle = document.querySelector('.btnMiddle');
const btnNext = document.querySelector('.btnNext');
const item = document.querySelectorAll('.item');
let position = 0;
let width = item[0].clientWidth;

let moveTrack = () => {
	track.style.transform = "translateX(" + position + "px)"; // When we click on the button, we move the "track" using translateX + position.
}

let checkBtn = () => { // check buttons - check when the button need stops
	position === 0 ? btnPrev.style.pointerEvents = "none" : btnPrev.style.pointerEvents = "auto" ;
	position === -width ? btnMiddle.style.pointerEvents = "none" : btnMiddle.style.pointerEvents = "auto" ;
	position === -width * 2 ? btnNext.style.pointerEvents = "none" : btnNext.style.pointerEvents = "auto" ;

}

btnNext.addEventListener('click', () => {
	position = -width * 2; // take width the item;

	moveTrack();
	checkBtn();
});

btnMiddle.addEventListener('click', () => {
	position = -width; // take width the item;

	moveTrack();
	checkBtn();
});

btnPrev.addEventListener('click', () => {
	position = 0; // take width the item;

	moveTrack();
	checkBtn();
});