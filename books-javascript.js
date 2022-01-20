var currentSlideIndex = 1;
showSlideImgs(currentSlideIndex);

function plusSlideImgs(newValue) {
    currentSlideIndex += newValue;
    showSlideImgs(currentSlideIndex);
}

function showSlideImgs(newValue) {
    let index;
    let carouselObject = document.getElementsByClassName("carousel-slide");
    if (newValue > carouselObject.length) { currentSlideIndex = 1 };
    if (newValue < 1) { currentSlideIndex = carouselObject.length };
    for (index = 0; index < carouselObject.length; index++) {
        carouselObject[index].style.display = "none";
    }
    carouselObject[currentSlideIndex - 1].style.display = "block";
}

// automatic slider
// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("carousel-slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 6000);
// }

const openModalBtn = document.getElementsByClassName('more-details-btn');
const closeModalSpan = document.getElementsByClassName('close-modal');

function onDetailsBtnClick(e) {
    console.log(e);
    let srcBtn = e.target || e.srcElement;
    console.log(srcBtn);
    let modalContainer = srcBtn.parentElement.getElementsByClassName('moreDetails-modal')[0];
    modalContainer.style.display = "block";
}

// function onclickBody(e) {
//     let clickBodyDoc = e.target || e.src.element;
//     console.log("body document", clickBodyDoc);
//     // modalContainer.style.display = "none";
// }

for (let detailsBtn of openModalBtn) {
    detailsBtn.onclick = onDetailsBtnClick;
}

function onCloseDetailsBtnClick(e) {
    console.log(e, "event");
    let spanSrcBtn = e.target || e.srcElement;
    console.log(e.target, "target");
    console.log(e.srcElement, "src element");
    let modalContainer = spanSrcBtn.parentElement.parentElement;
    modalContainer.style.display = "none";
    // let wholeContainer = e.path[8];
    // console.log("whole cont", wholeContainer);
    // wholeContainer.body.style.backgroundColor = "red";
}

for (let closeDetailsBtn of closeModalSpan) {
    closeDetailsBtn.onclick = onCloseDetailsBtnClick;
}

window.onclick = function(e) {
    // console.log('WIND', window);
    if (e.target.className === 'moreDetails-modal') {
        e.target.style.display = 'none';
    }
};

const intraInCont = document.getElementById('intra-in-cont');
const iesiDinCont = document.getElementById('x-conectare-modal');
const conectModalCont = document.getElementById('conectare-modal-container');


// let conectModalContDisplayed = false;

// intraInCont.onclick = function() {
//     if (conectModalContDisplayed === false) {
//         conectModalCont.style.display = "block";
//         conectModalContDisplayed = true;
//     } else {
//         conectModalContDisplayed = false;
//         conectModalCont.style.display = "none";
//     }
// }

intraInCont.onclick = function() {
    conectModalCont.style.display = "block";
};

iesiDinCont.onclick = function() {
    conectModalCont.style.display = "none";
};