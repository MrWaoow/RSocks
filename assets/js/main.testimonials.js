const getChildIndex = (element) => {
    return Array.from(element.parentNode.children).indexOf(element);
};

const removeClass = (clasName, element, no = 0) => {
    let i = no;
    if (element[i].classList.contains(clasName)) {
        element[i].classList.remove(clasName);
        return 0;
    } else if (i < element.length) {
        i++;
        removeClass(clasName, element, i);
    } else {
        return 0;
    }
};

const addClass = (clasName, element, targetElement, no = 0) => {
    let i = no;
    if (element[i].classList.contains(clasName)) {
        targetElement[i].classList.add(clasName);
        return 0;
    } else if (i < element.length) {
        i++;
        addClass(clasName, element, i);
    } else {
        return 0;
    }
};

const onClickLink = (evt, targetElementClassName) => {
    const element = evt.currentTarget;
    const elementIndex = getChildIndex(element);
    const targetElement = document.getElementsByClassName(targetElementClassName);
    const className = "active";
    removeClass(className, targetElement);
    console.log(targetElement.previousSibling);
    targetElement[elementIndex].classList.add(className);
};
(() => {
    const targetElement = $(".testimonials ul li");
    const element = document.getElementsByClassName("carousel-item");
    const className = "active";
    setInterval(addClass(className, element, targetElement), 800);
    console.log(targetElement);
})()