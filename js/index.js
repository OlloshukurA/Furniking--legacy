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


// if(star5){
//     star5.addEventListener('click', () => {
//         star5.src = "img/section2/star.svg"
//     })
// }


if(Gstar1){
    Gstar1.addEventListener('click', () => {
        Gstar1.src = "img/section2/star.svg"
    })
}
if(Gstar2){
    Gstar2.addEventListener('click', () => {
        Gstar2.src = "img/section2/star.svg"
    })
}
if(Gstar3){
    Gstar3.addEventListener('click', () => {
        Gstar3.src = "img/section2/star.svg"
    })
}
if(Gstar4){
    Gstar4.addEventListener('click', () => {
        Gstar4.src = "img/section2/star.svg"
    })
}
if(Gstar5){
    Gstar5.addEventListener('click', () => {
        Gstar5.src = "img/section2/star.svg"
    })
}
if(Gstar6){
    Gstar6.addEventListener('click', () => {
        Gstar6.src = "img/section2/star.svg"
    })
}
if(Gstar7){
    Gstar7.addEventListener('click', () => {
        Gstar7.src = "img/section2/star.svg"
    })
}
if(Gstar8){
    Gstar8.addEventListener('click', () => {
        Gstar8.src = "img/section2/star.svg"
    })
}
if(Gstar9){
    Gstar9.addEventListener('click', () => {
        Gstar9.src = "img/section2/star.svg"
    })
}

if(Gstar10){
    Gstar10.addEventListener('click', () => {
        Gstar10.src = "img/section2/star.svg"
    })
}


if(Gstar11){
    Gstar11.addEventListener('click', () => {
        Gstar11.src = "img/section2/star.svg"
    })
}
if("Gstar12"){
    Gstar12.addEventListener('click', () => {
        Gstar12.src = "img/section2/star.svg"
    })
}
if("Gstar13"){
    Gstar13.addEventListener('click', () => {
        Gstar13.src = "img/section2/star.svg"
    })
}
if("Gstar14"){
    Gstar14.addEventListener('click', () => {
        Gstar14.src = "img/section2/star.svg"
    })
}
if("Gstar15"){
    Gstar15.addEventListener('click', () => {
        Gstar15.src = "img/section2/star.svg"
    })
}
if("Gstar16"){
    Gstar16.addEventListener('click', () => {
        Gstar16.src = "img/section2/star.svg"
    })
}
if("Gstar17"){
    Gstar17.addEventListener('click', () => {
        Gstar17.src = "img/section2/star.svg"
    })
}
if("Gstar18"){
    Gstar18.addEventListener('click', () => {
        Gstar18.src = "img/section2/star.svg"
    })
}
if("Gstar19"){
    Gstar19.addEventListener('click', () => {
        Gstar19.src = "img/section2/star.svg"
    })
}
if("Gstar20"){
    Gstar20.addEventListener('click', () => {
        Gstar20.src = "img/section2/star.svg"
    })
}
if("Gstar21"){
    Gstar21.addEventListener('click', () => {
        Gstar21.src = "img/section2/star.svg"
    })
}
if("Gstar22"){
    Gstar22.addEventListener('click', () => {
        Gstar22.src = "img/section2/star.svg"
    })
}
if("Gstar23"){
    Gstar23.addEventListener('click', () => {
        Gstar23.src = "img/section2/star.svg"
    })
}
if("Gstar24"){
    Gstar24.addEventListener('click', () => {
        Gstar24.src = "img/section2/star.svg"
    })
}
if("Gstar25"){
    Gstar25.addEventListener('click', () => {
        Gstar25.src = "img/section2/star.svg"
    })
}
if("Gstar26"){
    Gstar26.addEventListener('click', () => {
        Gstar26.src = "img/section2/star.svg"
    })
}
if("Gstar27"){
    Gstar27.addEventListener('click', () => {
        Gstar27.src = "img/section2/star.svg"
    })
}
if("Gstar28"){
    Gstar28.addEventListener('click', () => {
        Gstar28.src = "img/section2/star.svg"
    })
}
if("Gstar29"){
    Gstar29.addEventListener('click', () => {
        Gstar29.src = "img/section2/star.svg"
    })
}
if("Gstar30"){
    Gstar30.addEventListener('click', () => {
        Gstar30.src = "img/section2/star.svg"
    })
}
if("Gstar31"){
    Gstar12.addEventListener('click', () => {
        Gstar12.src = "img/section2/star.svg"
    })
}
if("Gstar32"){
    Gstar32.addEventListener('click', () => {
        Gstar32.src = "img/section2/star.svg"
    })
}
if("Gstar33"){
    Gstar33.addEventListener('click', () => {
        Gstar33.src = "img/section2/star.svg"
    })
}
if("Gstar34"){
    Gstar34.addEventListener('click', () => {
        Gstar34.src = "img/section2/star.svg"
    })
}
if("Gstar35"){
    Gstar35.addEventListener('click', () => {
        Gstar35.src = "img/section2/star.svg"
    })
}
if("Gstar36"){
    Gstar36.addEventListener('click', () => {
        Gstar36.src = "img/section2/star.svg"
    })
}
if("Gstar37"){
    Gstar37.addEventListener('click', () => {
        Gstar137.src = "img/section2/star.svg"
    })
}
if("Gstar38"){
    Gstar38.addEventListener('click', () => {
        Gstar38.src = "img/section2/star.svg"
    })
}
if("Gstar39"){
    Gstar39.addEventListener('click', () => {
        Gstar39.src = "img/section2/star.svg"
    })
}
if("Gstar40"){
    Gstar40.addEventListener('click', () => {
        Gstar40.src = "img/section2/star.svg"
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
let Gbag1 = document.querySelector('#Gbag1')
let Gbag2 = document.querySelector('#Gbag2')
let Gbag3 = document.querySelector('#Gbag3')
let Gbag4 = document.querySelector('#Gbag4')
let Gbag5 = document.querySelector('#Gbag5')
let Gbag6 = document.querySelector('#Gbag6')
let Gbag7 = document.querySelector('#Gbag7')
let Gbag8 = document.querySelector('#Gbag8')

let counter = 0


Gbag1.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

Gbag2.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag3.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag4.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag5.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag6.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag7.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})
Gbag8.addEventListener('click', () => {
    counter++;
    value.innerText = counter;
})

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

const productSection1 = document.querySelector('.product--section1')
const productSection2 = document.querySelector('.product--section2')
const productSection3 = document.querySelector('.product--section3')
const productSection4 = document.querySelector('.product--section4')
const Gsale1 = document.querySelector('.Gsale1')
const Gsale2 = document.querySelector('.Gsale2')
const Gsale3 = document.querySelector('.Gsale3')
const Gsale4 = document.querySelector('.Gsale4')
const Gsale5 = document.querySelector('.Gsale5')
const Gsale6 = document.querySelector('.Gsale6')
const Gsale7 = document.querySelector('.Gsale7')
const Gsale8 = document.querySelector('.Gsale8')
const Gsale9 = document.querySelector('.Gsale9')
const Gsale10 = document.querySelector('.Gsale10')

productSection1.addEventListener('click', () => {
    productSection1.style.color = "#7AC751"
    productSection2.style.color = "#C2C2C2"
    productSection3.style.color = "#C2C2C2"
    productSection4.style.color = "#C2C2C2"

    // ** click change market icon

    Gsale1.style.backgroundColor ="#7AC751"
    Gsale2.style.backgroundColor ="#00B7F1"
    Gsale3.style.backgroundColor ="#FF6868"
    Gsale4.style.backgroundColor ="#7AC751"
    Gsale5.style.backgroundColor ="#FF6868"
    Gsale6.style.backgroundColor ="#7AC751"
    Gsale7.style.backgroundColor ="#00B7F1"
    Gsale8.style.backgroundColor ="#00B7F1"
    Gsale1.innerText = "Sale"
    Gsale2.innerText = "New"
    Gsale3.innerText = "-30%"
    Gsale4.innerText = "Sale"
    Gsale5.innerText = "-30%"
    Gsale6.innerText = "Sale"
    Gsale7.innerText = "New"
    Gsale8.innerText = "New"
})

productSection2.addEventListener('click', () => {
    productSection2.style.color = "#7AC751"
    productSection1.style.color = "#C2C2C2"
    productSection3.style.color = "#C2C2C2"
    productSection4.style.color = "#C2C2C2"
})

productSection3.addEventListener('click', () => {
    productSection3.style.color = "#7AC751"
    productSection1.style.color = "#C2C2C2"
    productSection2.style.color = "#C2C2C2"
    productSection4.style.color = "#C2C2C2"
})

productSection4.addEventListener('click', () => {
    productSection4.style.color = "#7AC751"
    productSection1.style.color = "#C2C2C2"
    productSection2.style.color = "#C2C2C2"
    productSection3.style.color = "#C2C2C2"
})






