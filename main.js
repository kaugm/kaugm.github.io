// MODAL
const imgModal = document.getElementById("imgModal");
const selectedImg = document.getElementById("selectedImg");
const selectedP = document.getElementById("selectedP");
let imgs = document.getElementsByTagName("img");
// ADD ONCLICK FUNCTION
for (img of imgs) {
    img.addEventListener("click", function() {
        // UNHIDE MODAL
        imgModal.style.display = "block";
        // SET MODAL IMAGE SOURCE
        selectedImg.src = this.src;
        selectedP.innerHTML = this.alt;
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
            if (img.nextElementSibling == null) {
                selectedImg.src = imgs[0].src;
                selectedP.innerHTML = imgs[0].alt;
            } else {
                selectedImg.src = img.nextElementSibling.src;
                selectedP.innerHTML = img.nextElementSibling.alt;
            }
            selectedImg.animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
              ], {
                // timing options
                duration: 600,
              });
            break;
        }
    }
})
prevButton.addEventListener("click", function() {
    for (img of imgs) {
        if (img.src == selectedImg.src) {
            if (img.previousElementSibling == null) {
                selectedImg.src = imgs[imgs.length -2].src;
                selectedP.innerHTML = imgs[imgs.length -2].alt;
            } else {
                selectedImg.src = img.previousElementSibling.src;
                selectedP.innerHTML = img.previousElementSibling.alt;
            }
            selectedImg.animate([
                // keyframes
                { opacity: '0' },
                { opacity: '1' }
              ], {
                // timing options
                duration: 600,
              });
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
        if (windowBottom > objectBottom) {
            console.log('New section element is now visible on the screen')
            section.classList.remove("hidden");
        }
    })
    // STOP ARROWDIV ANIMATION WHEN AFTER SCROLLING DOWN A CERTAIN POINT
    if (window.pageYOffset >= 575) {
        arrowDiv.childNodes[1].style.animation = "none";
    } else {
        arrowDiv.childNodes[1].style.animation = "bounce 3s infinite";
    }
})


// BUTTON CLICK TO SCROLL TO DOWN
let arrowDiv = document.querySelector(".centeredDiv");
arrowDiv.addEventListener("click", function() {
    window.scrollBy(0, (window.innerHeight / 2));
})



// RESUME PAGE
// let downloadBtn = document.getElementById("resumeDownload");
// downloadBtn.addEventListener("click", function() {
//     downloadBtn.parentElement.style.display = "none";
// })


//TODO PROJECTS PAGE
let btn = querySelector("button");
btn.addEventListener("click", function() {
    alert('sorry dog, this page isnt ready yet.')
})

