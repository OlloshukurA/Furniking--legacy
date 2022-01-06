const colMenu = document.getElementById('collection--menu');
const helpList = document.getElementById('help--list');

colMenu.addEventListener('click', () => {
    colMenu.classList.toggle('active');
    helpList.classList.toggle('active');
})

// * --------------------------------- *

const oval = document.querySelector('.oval');
oval.addEventListener('click', () =>{
    oval.classList.toggle('change');
})

// * ============== SLIDER ===============
const btn = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const last = document.querySelector("#last");
const chair = document.querySelector('#big--chair')

// if(btn){
//     second || third || last.addEventListener('click', () => {
//         btn.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
//     })
// } else{
//     btn.style.backgroundColor = "#7AC751"
// }

if(second){
    second.addEventListener('click', () => {
        btn.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        third.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        last.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
    })
}  if(third){
    third.addEventListener('click', () => {
        btn.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        second.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        last.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
    })
}   if(last){
    last.addEventListener('click', () => {
        btn.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        second.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        third.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
    })
}   if(btn){
    btn.addEventListener('click', () => {
        second.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        third.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
        last.style.backgroundColor = " rgba(122, 199, 81, 0.29)"
    })
}


btn.addEventListener('click', () => {
    chair.src = "img/header/tall--chair.png"
    btn.style.borderRadius = "666px"
    btn.style.backgroundColor = "#7AC751"
})

chair.style.width = "370px"
chair.style.height = "370px"

// *****************************

second.addEventListener('click', () => {
    chair.src = "img/header/chair2.png"
    second.style.borderRadius = "666px"
    second.style.backgroundColor = "#7AC751"
})

third.addEventListener('click', () => {
    chair.src = "img/header/big--chair.png"
    third.style.borderRadius = "666px"
    third.style.backgroundColor = "#7AC751"
})

last.addEventListener('click', () => {
    chair.src = "img/header/last--chair.png",
    last.style.borderRadius = "666px",
    last.style.backgroundColor = "#7AC751";
})


// * Trending ===========================

const beGreen = document.getElementById('product--status_first');
beGreen.addEventListener("click", () => {
    beGreen.style.color = "#7AC751"
})

const beGreenSecond = document.getElementById('product--status_second');
beGreenSecond.addEventListener("click", () => {
    beGreenSecond.style.color = "#7AC751"
})

const beGreenThird = document.getElementById('product--status_third');
beGreenThird.addEventListener("click", () => {
    beGreenThird.style.color = "#7AC751"
})


// * If statement for trending types ***************==//==

if(beGreen){
    beGreen.addEventListener('click', () => {
        beGreenSecond.style.color = "#C2C2C2"
        beGreenThird.style.color = "#C2C2C2"
    })
}  

if(beGreenSecond){
    beGreenSecond.addEventListener('click', () => {
        beGreen.style.color = "#C2C2C2"
        beGreenThird.style.color = "#C2C2C2"
    })
}

if(beGreenThird){
    beGreenThird.addEventListener('click', () => {
        beGreen.style.color = "#C2C2C2"
        beGreenSecond.style.color = "#C2C2C2"
    })
}

// **** Trending chair stars

const starF = document.getElementById('star1');
const starS = document.getElementById('star2');
const starTh = document.getElementById('star3');
const starL = document.getElementById('star4');
const star5 = document.getElementById('star5')
const star6 = document.getElementById('star6')
const star7 = document.getElementById('star7')
const star8 = document.getElementById('star8')
const star9 = document.getElementById('star9')
const star10 = document.getElementById('star10')
const star11 = document.getElementById('star11')
const star12 = document.getElementById('star12')
const star13 = document.getElementById('star13')
const star14 = document.getElementById('star14')
const star15 = document.getElementById('star15')
const star16 = document.getElementById('star16')
const star17 = document.getElementById('star17')
const star18 = document.getElementById('star18')
const star19 = document.getElementById('star19')
const star20 = document.getElementById('star20')
const star21 = document.getElementById('star21')
const star22 = document.getElementById('star22')
const star23 = document.getElementById('star23')
const star24 = document.getElementById('star24')
const star25 = document.getElementById('star25')
const star26 = document.getElementById('star26')
const star27 = document.getElementById('star27')
const star28 = document.getElementById('star28')
const star29 = document.getElementById('star29')
const star30 = document.getElementById('star30')
const star31 = document.getElementById('star31')
const star32 = document.getElementById('star32')
const star33 = document.getElementById('star33')
const star34 = document.getElementById('star34')
const star35 = document.getElementById('star35')
const star36 = document.getElementById('star36')
const star37 = document.getElementById('star37')
const star38 = document.getElementById('star38')
const star39 = document.getElementById('star39')
const star40 = document.getElementById('star40')

if(star1){
    star1.addEventListener('click', () => {
        star1.src = "img/section2/star.svg"
    })
}
if(star2){
    star2.addEventListener('click', () => {
        star2.src = "img/section2/star.svg"
    })
}
if(star3){
    star3.addEventListener('click', () => {
        star3.src = "img/section2/star.svg"
    })
}
if(star4){
    star4.addEventListener('click', () => {
        star4.src = "img/section2/star.svg"
    })
}
if(star5){
    star5.addEventListener('click', () => {
        star5.src = "img/section2/star.svg"
    })
}
if(star6){
    star6.addEventListener('click', () => {
        star6.src = "img/section2/star.svg"
    })
}
if(star7){
    star7.addEventListener('click', () => {
        star7.src = "img/section2/star.svg"
    })
}
if(star8){
    star8.addEventListener('click', () => {
        star8.src = "img/section2/star.svg"
    })
}
if(star9){
    star9.addEventListener('click', () => {
        star9.src = "img/section2/star.svg"
    })
}

if(star10){
    star10.addEventListener('click', () => {
        star10.src = "img/section2/star.svg"
    })
}


if(star11){
    star11.addEventListener('click', () => {
        star11.src = "img/section2/star.svg"
    })
}
if("star12"){
    star12.addEventListener('click', () => {
        star12.src = "img/section2/star.svg"
    })
}
if("star13"){
    star13.addEventListener('click', () => {
        star13.src = "img/section2/star.svg"
    })
}
if("star14"){
    star14.addEventListener('click', () => {
        star14.src = "img/section2/star.svg"
    })
}
if("star15"){
    star15.addEventListener('click', () => {
        star15.src = "img/section2/star.svg"
    })
}
if("star16"){
    star16.addEventListener('click', () => {
        star16.src = "img/section2/star.svg"
    })
}
if("star17"){
    star17.addEventListener('click', () => {
        star17.src = "img/section2/star.svg"
    })
}
if("star18"){
    star18.addEventListener('click', () => {
        star18.src = "img/section2/star.svg"
    })
}
if("star19"){
    star19.addEventListener('click', () => {
        star19.src = "img/section2/star.svg"
    })
}
if("star20"){
    star20.addEventListener('click', () => {
        star20.src = "img/section2/star.svg"
    })
}
if("star21"){
    star21.addEventListener('click', () => {
        star21.src = "img/section2/star.svg"
    })
}
if("star22"){
    star22.addEventListener('click', () => {
        star22.src = "img/section2/star.svg"
    })
}
if("star23"){
    star23.addEventListener('click', () => {
        star23.src = "img/section2/star.svg"
    })
}
if("star24"){
    star24.addEventListener('click', () => {
        star24.src = "img/section2/star.svg"
    })
}
if("star25"){
    star25.addEventListener('click', () => {
        star25.src = "img/section2/star.svg"
    })
}
if("star26"){
    star26.addEventListener('click', () => {
        star26.src = "img/section2/star.svg"
    })
}
if("star27"){
    star27.addEventListener('click', () => {
        star27.src = "img/section2/star.svg"
    })
}
if("star28"){
    star28.addEventListener('click', () => {
        star28.src = "img/section2/star.svg"
    })
}
if("star29"){
    star29.addEventListener('click', () => {
        star29.src = "img/section2/star.svg"
    })
}
if("star30"){
    star30.addEventListener('click', () => {
        star30.src = "img/section2/star.svg"
    })
}
if("star31"){
    star12.addEventListener('click', () => {
        star12.src = "img/section2/star.svg"
    })
}
if("star32"){
    star32.addEventListener('click', () => {
        star32.src = "img/section2/star.svg"
    })
}
if("star33"){
    star33.addEventListener('click', () => {
        star33.src = "img/section2/star.svg"
    })
}
if("star34"){
    star34.addEventListener('click', () => {
        star34.src = "img/section2/star.svg"
    })
}
if("star35"){
    star35.addEventListener('click', () => {
        star35.src = "img/section2/star.svg"
    })
}
if("star36"){
    star36.addEventListener('click', () => {
        star36.src = "img/section2/star.svg"
    })
}
if("star37"){
    star37.addEventListener('click', () => {
        star137.src = "img/section2/star.svg"
    })
}
if("star38"){
    star38.addEventListener('click', () => {
        star38.src = "img/section2/star.svg"
    })
}
if("star39"){
    star39.addEventListener('click', () => {
        star39.src = "img/section2/star.svg"
    })
}
if("star40"){
    star40.addEventListener('click', () => {
        star40.src = "img/section2/star.svg"
    })
}













if(star5){
    star5.addEventListener('click', () => {
        star5.src = "img/section2/star.svg"
    })
}



// * For circles slider =================

const circledSliderOne = document.getElementById('circled--slider_one');
const circledSliderTwo = document.getElementById('circled--slider_two');
const firstTargetOfSlider = document.getElementById("second--slider_group")
const changeImgOne = document.getElementById('change--img_one')
const changeImgTwo = document.getElementById('change--img_two')
const changeImgThree = document.getElementById('change--img_three')
const changeImgFour = document.getElementById('change--img_four')
const changeImgFive = document.getElementById('change--img_five')
const changeImgSexth = document.getElementById('change--img_sexth')
const changeImgSeven = document.getElementById('change--img_seven')
const changeImgEight = document.getElementById('change--img_eight')
const changeChairType = document.getElementById('chair--type');
const changeDisPrice = document.getElementById('changeDisPrice');
const changeRealPrice = document.getElementById('changeRealPrice');
const changeDisPrice2 = document.getElementById('changeDisPrice2');
const changeRealPrice2 = document.getElementById('changeRealPrice2');
const changeDisPrice3 = document.getElementById('changeDisPrice3');
const changeRealPrice3 = document.getElementById('changeRealPrice3');
const changeDisPrice4 = document.getElementById('changeDisPrice4');
const changeRealPrice4 = document.getElementById('changeRealPrice4');
const changeDisPrice5 = document.getElementById('changeDisPrice5');
const changeRealPrice5 = document.getElementById('changeRealPrice5');
const changeDisPrice6 = document.getElementById('changeDisPrice6');
const changeRealPrice6 = document.getElementById('changeRealPrice6');
const changeDisPrice7 = document.getElementById('changeDisPrice7');
const changeRealPrice7 = document.getElementById('changeRealPrice7');
const changeDisPrice8 = document.getElementById('changeDisPrice8');
const changeRealPrice8 = document.getElementById('changeRealPrice8');
const chair2 = document.getElementById("chair2")
const chair3 = document.getElementById("chair3")
const chair4 = document.getElementById("chair4")
const chair5 = document.getElementById("chair5")
const chair6 = document.getElementById("chair6")
const chair7 = document.getElementById("chair7")
const chair8 = document.getElementById("chair8")

if(circledSliderOne){
    circledSliderOne.addEventListener('click', () => {
        circledSliderOne.src = "img/section2/greened--slider.svg";
        circledSliderTwo.src = "img/section2/grayed--slider.svg";

        changeChairType.innerText = "Minimal red armchair"
        chair2.innerText = "Modern relax chair"
        chair3.innerText = "Modern relax chair"
        chair4.innerText = "Small chair"
        chair5.innerText = "Classic chair"
        chair6.innerText = "Soft chair"
        chair7.innerText = "Red covered chair"
        chair8.innerText = "Leather chair"

        changeImgOne.src = "img/chairs/ch1.png"
        changeImgTwo.src = "img/chairs/ch2.png"
        changeImgThree.src = "img/chairs/ch3.png"
        changeImgFour.src = "img/chairs/ch4.png"
        changeImgFive.src = "img/chairs/ch5.png"
        changeImgSexth.src = "img/chairs/ch6.png"
        changeImgSeven.src = "img/chairs/ch9.png"
        changeImgEight.src = "img/chairs/ch8.png"

        changeImgOne.style.width = "269.03px" 
        changeImgOne.style.height = "287.82px" 
        changeImgTwo.style.width = "269.03px" 
        changeImgTwo.style.height = "287.82px" 
        changeImgThree.style.width = "269.03px" 
        changeImgThree.style.height = "287.82px" 
        changeImgFour.style.width = "269.03px" 
        changeImgFour.style.height = "287.82px" 
        changeImgFive.style.width = "269.03px" 
        changeImgFive.style.height = "287.82px" 
        changeImgSexth.style.width = "269.03px" 
        changeImgSexth.style.height = "287.82px" 
        changeImgSeven.style.width = "269.03px" 
        changeImgSeven.style.height = "287.82px" 
        changeImgEight.style.width = "269.03px" 
        changeImgEight.style.height = "287.82px"

        // ** For change text ==============================
        
        changeDisPrice.innerText = "$110"
        changeRealPrice.innerHTML = "$140"
        changeDisPrice2.innerText = "$100"
        changeRealPrice2.innerHTML = "$145"
        changeDisPrice3.innerText = "$110"
        changeRealPrice3.innerHTML = "$140"
        changeDisPrice4.innerText = "$120"
        changeRealPrice4.innerHTML = "$160"
        changeDisPrice5.innerText = "$210"
        changeRealPrice5.innerHTML = "$240"
        changeDisPrice6.innerText = "$105"
        changeRealPrice6.innerHTML = "$135"
        changeDisPrice7.innerText = "$210"
        changeRealPrice7.innerHTML = "$300"
        changeDisPrice8.innerText = "$150"
        changeRealPrice8.innerHTML = "$170"
        
        // ** For change text ==============================
    })
}

if(circledSliderTwo){
    circledSliderTwo.addEventListener('click', () => {
        circledSliderOne.src = "img/section2/grayed--slider.svg";
        circledSliderTwo.src = "img/section2/greened--slider.svg"
        firstTargetOfSlider.classList.toggle('fTarget')

        // ** For change text ==================================
        changeChairType.innerText = "Minimal LCD chair"
        chair2.innerText = "Minimal iconic chair"
        chair3.innerText = "Dining chairs"
        chair4.innerText = "Buskbo armchair"
        chair5.innerText = "Modern chairs"
        chair6.innerText = "Plastic dining chair"
        chair7.innerText = "Minimal Wood chair"
        chair8.innerText = "Elegent wood chair"

        changeDisPrice.innerText = "$180"
        changeRealPrice.innerHTML = "$250"
        changeDisPrice2.innerText = "$120"
        changeRealPrice2.innerHTML = "$150"
        changeDisPrice3.innerText = "$100"
        changeRealPrice3.innerHTML = "$120"
        changeDisPrice4.innerText = "$130"
        changeRealPrice4.innerHTML = "$160"
        changeDisPrice5.innerText = "$100"
        changeRealPrice5.innerHTML = "$120"
        changeDisPrice6.innerText = "$130"
        changeRealPrice6.innerHTML = "$150"
        changeDisPrice7.innerText = "$180"
        changeRealPrice7.innerHTML = "$250"
        changeDisPrice8.innerText = "$120"
        changeRealPrice8.innerHTML = "$150"
        // ** For change text ===================================

        changeImgOne.src = "img/section2/1.png"
        changeImgTwo.src =  "img/section2/2.png "
        changeImgThree.src = "img/section2/3.png "
        changeImgFour.src =  "img/section2/4.png "
        changeImgFive.src =  "img/section2/5.png "
        changeImgSexth.src = "img/section2/6.png "
        changeImgSeven.src = "img/section2/7.png "
        changeImgEight.src = "img/section2/8.png "

        changeImgOne.style.width = "269.03px" 
        changeImgOne.style.height = "287.82px" 
        changeImgTwo.style.width = "269.03px" 
        changeImgTwo.style.height = "287.82px" 
        changeImgThree.style.width = "269.03px" 
        changeImgThree.style.height = "287.82px" 
        changeImgFour.style.width = "269.03px" 
        changeImgFour.style.height = "287.82px" 
        changeImgFive.style.width = "269.03px" 
        changeImgFive.style.height = "287.82px" 
        changeImgSexth.style.width = "269.03px" 
        changeImgSexth.style.height = "287.82px" 
        changeImgSeven.style.width = "269.03px" 
        changeImgSeven.style.height = "287.82px" 
        changeImgEight.style.width = "269.03px" 
        changeImgEight.style.height = "287.82px" 

    })
}

// * ============= Offer first countdown ================== *

const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 21 ${currentYear } 00:00:00`);

// Update countdown

function updateCountdowntime(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    
    
    
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    
    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// updateCountdowntime()

setInterval(updateCountdowntime, 1000);


// * ============= Offer second countdown ================== *

const kun = document.querySelector('#kun');
const soat = document.querySelector('#soat');
const minut = document.querySelector('#minut');
const sek = document.querySelector('#sekund');

const hozirDavr = new Date().getFullYear();

const yangiDavr = new Date(`January 16 ${hozirDavr } 00:00:00`);


function sanoqYangilash(){
    const hozirDavr = new Date();
    const farq = yangiDavr - hozirDavr;
    
    const k = Math.floor(farq / 1000 / 60 / 60 / 24);
    const so = Math.floor(farq / 1000 / 60 / 60) % 24;
    const mi = Math.floor(farq / 1000 / 60) % 60;
    const sec = Math.floor(farq / 1000) % 60;
    
    
    
    kun.innerHTML = k;
    soat.innerHTML = so;
    minut.innerHTML = mi;
    sec.innerHTML = sec;
    
    kun.innerHTML = k < 10 ? '0' + k : k;
    soat.innerHTML = so < 10 ? '0' + so : so;
    minut.innerHTML = mi < 10 ? '0' + mi : mi;
    sek.innerHTML = sec < 10 ? '0' + sec : sec;
}


setInterval(sanoqYangilash, 1000);

//  * scroll up effect =============
const up = document.querySelector('.scrollUp');

window.addEventListener("scroll", () =>{
    if (window.scrollY > 100) {
        up.classList.add('active');
    } else {
        up.classList.remove('active');
    }
})

// *** Add to cart =============

let onclick = document.querySelector('#bag');
let bag2 = document.querySelector('.bag2');
let bag3 = document.querySelector('.bag3');
let bag4 = document.querySelector('.bag4');
let bag5 = document.querySelector('.bag5');
let bag6 = document.querySelector('.bag6');
let bag7 = document.querySelector('.bag7');
let bag8 = document.querySelector('.bag8');
let value = document.querySelector('.addNum');

let counter = 0

onclick.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag2.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag3.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag4.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag5.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag6.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag7.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

bag8.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

// ** Trend changing texts trepled

const topProduct = document.getElementById('product--status_first');
const newArrival = document.getElementById('product--status_second');
const bestSeller = document.getElementById('product--status_third');
const img5 = document.getElementsByClassName('secondary--img5')

const sale1 = document.querySelector('.sale1')
const sale2 = document.querySelector('.sale2')
const sale3 = document.querySelector('.sale3')
const sale4 = document.querySelector('.sale4')
const sale5 = document.querySelector('.sale5')
const sale6 = document.querySelector('.sale6')
const new7 = document.getElementById('new7');
const new8 = document.getElementById('new8');


newArrival.addEventListener('click', () => {
    // ** Width and Height of imgs

    changeImgOne.style.width = "269.03px" 
    changeImgOne.style.height = "287.82px" 
    changeImgTwo.style.width = "269.03px" 
    changeImgTwo.style.height = "287.82px" 
    changeImgThree.style.width = "269.03px" 
    changeImgThree.style.height = "287.82px" 
    changeImgFour.style.width = "269.03px" 
    changeImgFour.style.height = "287.82px" 
    changeImgFive.style.width = "269.03px" 
    changeImgFive.style.height = "287.82px" 
    changeImgSexth.style.width = "269.03px" 
    changeImgSexth.style.height = "287.82px" 
    changeImgSeven.style.width = "269.03px" 
    changeImgSeven.style.height = "287.82px" 
    changeImgEight.style.width = "269.03px" 
    changeImgEight.style.height = "287.82px"

    changeImgOne.src = "img/section2/1.png"
    changeImgTwo.src = "img/section2/2.png"
    changeImgThree.src = "img/section2/7.png"
    changeImgFour.src = "img/section2/8.png"
    changeImgFive.src = "img/chairs/ch9.png"
    changeImgSexth.src = "img/chairs/ch8.png"
    changeImgSeven.src = "img/chairs/ch1.png"
    changeImgEight.src = "img/chairs/ch2.png"
    

    sale1.style.backgroundColor = "#00B7F1"
    sale2.style.backgroundColor = "#00B7F1"
    sale3.style.backgroundColor = "#00B7F1"
    sale4.style.backgroundColor = "#00B7F1"
    sale5.style.backgroundColor = "#00B7F1"
    sale6.style.backgroundColor = "#00B7F1"
    new7.style.backgroundColor = "#00B7F1"
    new8.style.backgroundColor = "#00B7F1"

    sale1.innerText = 'New'
    sale2.innerText = 'New'
    sale3.innerText = 'New'
    sale4.innerText = 'New'
    sale5.innerText = 'New'
    sale6.innerText = "New"
    new7.innerText = "New"
    new8.innerText = "New"

    circledSliderOne.style.display = "none"
    circledSliderTwo.style.display = "none"
})

bestSeller.addEventListener('click', () => {
    // ** Width and Height of imgs

    changeImgOne.style.width = "269.03px" 
    changeImgOne.style.height = "287.82px" 
    changeImgTwo.style.width = "269.03px" 
    changeImgTwo.style.height = "287.82px" 
    changeImgThree.style.width = "269.03px" 
    changeImgThree.style.height = "287.82px" 
    changeImgFour.style.width = "269.03px" 
    changeImgFour.style.height = "287.82px" 
    changeImgFive.style.width = "269.03px" 
    changeImgFive.style.height = "287.82px" 
    changeImgSexth.style.width = "269.03px" 
    changeImgSexth.style.height = "287.82px" 
    changeImgSeven.style.width = "269.03px" 
    changeImgSeven.style.height = "287.82px" 
    changeImgEight.style.width = "269.03px" 
    changeImgEight.style.height = "287.82px"

    changeImgOne.src = "img/section2/3.png"
    changeImgTwo.src = "img/section2/4.png"
    changeImgThree.src = "img/section2/5.png"
    changeImgFour.src = "img/section2/6.png"
    changeImgFive.src = "img/chairs/ch3.png"
    changeImgSexth.src = "img/chairs/ch4.png"
    changeImgSeven.src = "img/chairs/ch5.png"
    changeImgEight.src = "img/chairs/ch6.png"

    sale1.style.backgroundColor = "#7AC751"
    sale2.style.backgroundColor = "#7AC751"
    sale3.style.backgroundColor = "#7AC751"
    sale4.style.backgroundColor = "#7AC751"
    sale5.style.backgroundColor = "#7AC751"
    sale6.style.backgroundColor = "#7AC751"
    new7.style.backgroundColor = "#7AC751"
    new8.style.backgroundColor = "#7AC751"
    sale1.innerText = 'Sale'
    sale2.innerText = 'Sale'
    sale3.innerText = 'Sale'
    sale4.innerText = 'Sale'
    sale5.innerText = "Sale"
    sale6.innerText = "Sale"
    new7.innerText = "Sale"
    new8.innerText = "Sale"

    circledSliderOne.style.display = "none"
    circledSliderTwo.style.display = "none"
})

topProduct.addEventListener('click',() => {

    changeImgOne.style.width = "269.03px" 
    changeImgOne.style.height = "287.82px" 
    changeImgTwo.style.width = "269.03px" 
    changeImgTwo.style.height = "287.82px" 
    changeImgThree.style.width = "269.03px" 
    changeImgThree.style.height = "287.82px" 
    changeImgFour.style.width = "269.03px" 
    changeImgFour.style.height = "287.82px" 
    changeImgFive.style.width = "269.03px" 
    changeImgFive.style.height = "287.82px" 
    changeImgSexth.style.width = "269.03px" 
    changeImgSexth.style.height = "287.82px" 
    changeImgSeven.style.width = "269.03px" 
    changeImgSeven.style.height = "287.82px" 
    changeImgEight.style.width = "269.03px" 
    changeImgEight.style.height = "287.82px"

    changeImgOne.src = "img/section2/1.png"
    changeImgTwo.src = "img/section2/2.png"
    changeImgThree.src = "img/section2/3.png"
    changeImgFour.src = "img/section2/4.png"
    changeImgFive.src = "img/section2/5.png"
    changeImgSexth.src = "img/section2/6.png"
    changeImgSeven.src = "img/section2/7.png"
    changeImgEight.src = "img/section2/8.png"

    sale1.style.backgroundColor = "#00B7F1"
    sale2.style.backgroundColor = "#00B7F1"
    sale3.style.backgroundColor = "#7AC751"
    sale4.style.backgroundColor = "#7AC751"
    sale5.style.backgroundColor = "#7AC751"
    sale6.style.backgroundColor = "#7AC751"
    new7.style.backgroundColor = "#00B7F1"
    new8.style.backgroundColor = "#00B7F1"

    sale1.innerText = 'New'
    sale2.innerText = 'New'
    sale3.innerText = 'Sale'
    sale4.innerText = 'Sale'
    sale5.innerText = "Sale"
    sale6.innerText = "Sale"
    new7.innerText = "New"
    new8.innerText = "New"

    circledSliderOne.style.display = "block"
    circledSliderTwo.style.display = "block"
})







