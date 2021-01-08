
const haourHand = document.querySelector(".haour-hand");
const bigHand = document.querySelector(".big-hand");
const smallHand = document.querySelector(".small-hand");


setInterval(() => {
        
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    haourHand.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    bigHand.style.transform = `rotateZ(${(mm)}deg)`;
    smallHand.style.transform = `rotateZ(${(ss)}deg)`;

})