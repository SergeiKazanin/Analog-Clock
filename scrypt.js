

let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
let diClock  = document.querySelector('.digClock');

let timeRef = () => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let sec = day.getSeconds();

    hr.style.transform = `rotateZ(${hh * 30 + (mm / 12)}deg)`
    mn.style.transform = `rotateZ(${mm * 6}deg)`
    sc.style.transform = `rotateZ(${sec * 6}deg)`
    if(hh < 10 ){
        hh = '0' + hh;
    }
    if(mm < 10 ){
        mm = '0' + mm;
    }
    if(sec < 10 ){
        sec = '0' + sec;
    }
    diClock.innerHTML = `${hh} : ${mm} : ${sec}`
}

setInterval(timeRef, 1000)