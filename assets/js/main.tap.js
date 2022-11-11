const getChildIndex = (element) => {
    return Array.from(element.parentNode.children).indexOf(element);
};

const addHidden = (element, n = 0) => {
    let i = 0;
    const className = "hidden";
    if (i < element.length) {
        element[i].classList.add(className);
        i++;
        addHidden(element, i);
    } else {
        return 0;
    }

    const removeHidden = (element, n = 0) => {
        let i = 0;
        const className = "hidden";
        if (i < element.length) {
            element[i].classList.remove(className);
            i++;
            removeHidden(element, i);
        } else {
            return 0;
        }

    }
};

const showPrivate = (evt, n = 0) => {
    let i = n;
    const titleUsa = document.getElementById("TitleUsa");
    const otherBtn = document.getElementById("BtnShared");
    const targetClassName = "personal-new__buy-countries-list-item";
    const element = document.getElementsByClassName(targetClassName);
    if (i < element.length) {
        if (element[i].classList.contains("shared")) {
            element[i].classList.add("hidden")
            i++;
            showPrivate(evt, i);
        } else {
            element[i].classList.remove("hidden")
            i++;
            showPrivate(evt, i);
        }
    } else {
        titleUsa.classList.remove("hidden");
        otherBtn.classList.remove("active")
        evt.currentTarget.classList.add("active");
        return 0;
    }
};

const showShared = (evt, n = 0) => {
    let i = n;
    const titleUsa = document.getElementById("TitleUsa");
    const otherBtn = document.getElementById("BtnPrivate");
    const targetClassName = "personal-new__buy-countries-list-item";
    const element = document.getElementsByClassName(targetClassName);
    if (i < element.length) {
        if (element[i].classList.contains("personal")) {
            element[i].classList.add("hidden")
            i++;
            showShared(evt, i);
        } else {
            element[i].classList.remove("hidden")
            i++;
            showShared(evt, i);
        }
    } else {
        titleUsa.classList.add("hidden");
        otherBtn.classList.remove("active");
        evt.currentTarget.classList.add("active");
        return 0;
    }
};
//change Country button tab
const changeCountry = (evt) => {
    const buyBill = document.getElementById("BuyBill");
    const countryImage = document.getElementById("CurrentCountryImage");
    const countryName = document.getElementById("CurrentCountryName");
    let currentCountryName;
    let currentCountryImage;
    const targetClassName = "personal-new__buy-countries-list-item";
    let btn = document.getElementsByClassName(targetClassName);
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
    buyBill.classList.remove("hidden");
    currentCountryName = evt.currentTarget.getAttribute("data-name");
    currentCountryImage = evt.currentTarget.childNodes[1].getAttribute("src");
    countryName.innerHTML = currentCountryName;
    countryImage.src = currentCountryImage;
}
//change button title class
const changeBtn = (evt) => {
    let btn = document.getElementsByClassName("personal-new__buy-countries-usa-city");
    for (i = 0; i < btn.length; i++) {
        btn[i].classList.remove("selected");
    }
    evt.currentTarget.classList.add("selected");
}

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