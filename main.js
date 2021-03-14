// MODAL

const imgModal = document.getElementById("imgModal");
const selectedImg = document.getElementById("selectedImg");
let imgs = document.getElementsByTagName("img");
// ADD ONCLICK FUNCTION
for (img of imgs) {
    img.addEventListener("click", function() {
        // UNHIDE MODAL
        imgModal.style.display = "block";
        // SET MODAL IMAGE SOURCE
        selectedImg.src = this.src
    })
}

// MODAL BUTTONS
// CLOSING MODAL
const closeButton = document.getElementsByClassName("closeButton");
closeButton[0].addEventListener("click", function() {
    imgModal.style.display = "none";
})
window.onclick = function(e) {
    if (e.target == imgModal) {
        imgModal.style.display = "none";
    }
}
// CYCLING THROUGH PHOTOS
const prevButton = document.getElementsByClassName("prevButton")[0];
const nextButton = document.getElementsByClassName("nextButton")[0];
nextButton.addEventListener("click", function() {
    for (img of imgs) {
        if (img.src == selectedImg.src) {
            selectedImg.src = img.nextElementSibling.src;
            break;
        }
    }
})
prevButton.addEventListener("click", function() {
    for (img of imgs) {
        if (img.src == selectedImg.src) {
            selectedImg.src = img.previousElementSibling.src;
            break;
        }
    }
})


// SECTION APPEAR ON SCROLL
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
        let objectBottom = section.offsetTop + section.offsetHeight;
        let windowBottom = (window.pageYOffset + window.innerHeight) * 1.2;

        console.log(objectBottom, windowBottom);

        if (windowBottom > objectBottom) {
            console.log('making element appear')
            section.classList.remove("hidden");
        }
    })
})


//TODO PROJECTS PAGE
let btns = document.querySelectorAll("button");
btns[0].addEventListener("click", function() {
    alert('sorry dog, this part of the page isnt complete yet');
})