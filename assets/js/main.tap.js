function openTap(evt, divId) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(divId).style.display = "block";
    evt.currentTarget.className += " active";
}
//change button title class
function changeBtn(evt) {
    let btn = document.getElementsByClassName("personal-new__buy-countries-usa-city");
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
}
//change Country button Private tab
const buyBillPrivate = document.getElementById("BuyBillPrivate");
const countryImagePrivate = document.getElementById("CurrentCountryImagePrivate");
const countryNamePrivate = document.getElementById("CurrentCountryNamePrivate");
let currentCountryNamePrivate;
let currentCountryImagePrivate;

function changeCountryPrivate(evt) {
    let btn = document.getElementsByClassName("personal-new__buy-countries-list-item");
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    buyBillPrivate.classList.remove("hidden");
    currentCountryNamePrivate = evt.currentTarget.getAttribute("data-name");
    currentCountryImagePrivate = evt.currentTarget.childNodes[1].getAttribute("src");
    countryNamePrivate.innerHTML = currentCountryNamePrivate;
    countryImagePrivate.src = currentCountryImagePrivate;
}

//change Country button Shared tab
const buyBillShared = document.getElementById("BuyBillShared");
const countryImageShared = document.getElementById("CurrentCountryImageShared");
const countryNameShared = document.getElementById("CurrentCountryNameShared");
let currentCountryNameShared;
let currentCountryImageShared;

function changeCountryShared(evt) {
    let btn = document.getElementsByClassName("personal-new__buy-countries-list-item");
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    buyBillShared.classList.remove("hidden");
    currentCountryNameShared = evt.currentTarget.getAttribute("data-name");
    currentCountryImageShared = evt.currentTarget.childNodes[1].getAttribute("src");
    countryNameShared.innerHTML = currentCountryNameShared;
    countryImageShared.src = currentCountryImageShared;
}

//open div
/*const openDiv = (evt) => {
    const divOpen = "open";
    if (evt.currentTarget.classList.contains(divOpen)) {
        evt.currentTarget.classList.remove(divOpen);
    } else {
        evt.currentTarget.classList.add(divOpen);
    }
}*/

const Smooth = {
    r180: "r-180",
    init: (evt) => {
        let el = evt.currentTarget;
        if (!el.hasAttribute('data-height')) {
            el.dataset.height = "7rem";
            el.style.height = "3.5rem";
        }
        return el;
    },
    expandCollapse: (evt) => {
        const icon = evt.currentTarget.childNodes[1].childNodes[3];
        if (!icon.classList.contains(Smooth.r180)) {
            icon.classList.add(Smooth.r180)
            let div1 = Smooth.init(evt);
            setTimeout(() => { div1.style.height = div1.dataset.height; }, 20);
        } else {
            icon.classList.remove(Smooth.r180)
            let div2 = Smooth.init(evt);
            div2.style.height = "3.5rem";
        }
    }
}