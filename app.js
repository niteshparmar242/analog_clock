const hrsHand = document.querySelector('.hours');
const minHand = document.querySelector('.minutes');
const secHand = document.querySelector('.seconds');

const date = new Date;
console.log(date.getHours());

setInterval(()=>{
	const date = new Date;
// console.log(date.getHours());
const secRotation = date.getSeconds()/60 * 360 - 90;
// console.log(secRotation);
const minRotation = date.getMinutes()/60 * 360 - 90;
const hrsRotation = date.getHours()/12 * 360 - 90;

secHand.style.transform = `rotate(${secRotation}deg)`;
minHand.style.transform = `rotate(${minRotation}deg)`;
hrsHand.style.transform = `rotate(${hrsRotation}deg)`;

},1000)


