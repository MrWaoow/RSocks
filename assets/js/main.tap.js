/*
Template Name: RSocks - Startup & SaaS Bootstrap 5 Template.
Author: Mr. Waoow
*/

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
    r90: "r-90",
    pxToRem: (num) => {
        const remNum = num * 0.0625;
        return remNum;
    },
    init: (evt, elementID = "") => {
        let el;
        if (!elementID == "") {
            el = document.getElementById(elementID);
        } else {
            el = evt.currentTarget.parentNode;
        }
        if (!el.hasAttribute('data-height')) {
            const baseHeight = parseFloat(window.getComputedStyle(el, null).getPropertyValue('height'));
            const baseHeightRem = parseFloat(Smooth.pxToRem(baseHeight));
            el.style.height = "auto";
            const elementHeight = parseFloat($(el).height());
            const paddingTop = parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top'));
            const paddingBottom = parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            const borderTop = parseFloat(window.getComputedStyle(el, null).getPropertyValue('border-top'));
            const borderBottom = parseFloat(window.getComputedStyle(el, null).getPropertyValue('border-bottom'));
            const marginTop = parseFloat(window.getComputedStyle(el, null).getPropertyValue('margin-top'));
            const marginBottom = parseFloat(window.getComputedStyle(el, null).getPropertyValue('margin-bottom'));
            const fullHeight = elementHeight + paddingTop + paddingBottom + borderTop + borderBottom + marginTop + marginBottom;
            const fullHeightToRem = parseFloat(Smooth.pxToRem(fullHeight));
            el.dataset.height = fullHeightToRem + "rem";
            el.dataset.baseHeight = baseHeightRem + "rem";
            el.style.height = baseHeightRem + "rem";
        }
        return el;
    },
    expandCollapse: (evt) => {
        const element = evt.currentTarget;
        const icon = element.querySelector('.icon-sm');
        const iconAnimation = Smooth.r180;
        if (!icon.classList.contains(iconAnimation)) {
            icon.classList.add(Smooth.r180)
            let div1 = Smooth.init(evt);
            setTimeout(() => { div1.style.height = div1.dataset.height; }, 20);
        } else {
            icon.classList.remove(Smooth.r180)
            let div2 = Smooth.init(evt);
            div2.style.height = div2.dataset.baseHeight;
        }
    },
    expandCollapsePlus: (evt) => {
        const element = evt.currentTarget;
        const icon = element.querySelector('.icon-md');
        const plus = icon.querySelector('.plus')
        const iconAnimation = Smooth.r90;
        if (plus.classList.contains(iconAnimation)) {
            plus.classList.remove(Smooth.r90)
            let div1 = Smooth.init(evt);
            setTimeout(() => { div1.style.height = div1.dataset.height; }, 20);

        } else {
            plus.classList.add(Smooth.r90)
            let div2 = Smooth.init(evt);
            div2.style.height = div2.dataset.baseHeight;
        }
    },
    expandCollapseTarget: (evt, elementID) => {
        const btn = evt.currentTarget;
        const btnIcon = btn.querySelector('.icon-sm');
        const btnContent = btn.querySelector('.content');
        const iconAnimation = Smooth.r180;
        if (!btnIcon.classList.contains(iconAnimation)) {
            btnIcon.classList.add(Smooth.r180)
            btnContent.innerHTML = "Hide all";
            let div1 = Smooth.init(evt, elementID);
            setTimeout(() => { div1.style.height = div1.dataset.height; }, 20);
        } else {
            btnIcon.classList.remove(Smooth.r180);
            btnContent.innerHTML = "Show all";
            let div2 = Smooth.init(evt, elementID);
            div2.style.height = div2.dataset.baseHeight;
        }
    }
}