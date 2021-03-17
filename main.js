// MODAL
const imgModal = document.getElementById("imgModal");
const selectedImg = document.getElementById("selectedImg");
const selectedP = document.getElementById("selectedP");
let imgs = document.querySelectorAll("img");
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


// SCROLLING
// SECTION APPEAR ON SCROLL
let sections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
    sections.forEach(function(section) {
        let objectBottom = section.offsetTop + section.offsetHeight;
        let windowBottom = (window.pageYOffset + window.innerHeight) * 1.2;
        if (windowBottom > objectBottom) {
            section.classList.remove("hidden");
        }
    })
    // STOP ARROWDIV ANIMATION WHEN AFTER SCROLLING DOWN A CERTAIN POINT
    if (window.pageYOffset >= 285) {
        arrowDiv.childNodes[1].style.opacity = "0";
    } else {
        arrowDiv.childNodes[1].style.opacity = "1";
    }
})

// BUTTON CLICK TO SCROLL TO DOWN
let arrowDiv = document.querySelector(".centeredDiv");
arrowDiv.addEventListener("click", function() {
    window.scrollBy(0, (window.innerHeight / 2));
})




// JS ANIMATIONS FOR REMAINING ELEMENTS WHEN HOVERING ON SELECTED ELEMENT
// CONTACT SVGS
let svgs = document.querySelectorAll("svg");
for (i=1; i<svgs.length; i++) {
	svgs[i].addEventListener("mouseover", function() {
		for (svg of svgs) {
			svg.style.opacity = "0.5";
        }
        this.style.opacity = "1";
    });
    svgs[i].addEventListener("mouseout", function() {
        for (svg of svgs) {
            svg.style.opacity = "1";
        }
    })
}

// JOB + EDUCATION DETAILS
let divDetails = document.querySelectorAll(".jobDetails, .eduDetails");

for (i=0; i<divDetails.length; i++) {
    divDetails[i].addEventListener("mouseover", function() { 
        for (div of divDetails) {
            div.style.opacity = "0.5";
        }
        this.style.opacity = "1";
        this.querySelector("svg").style.opacity = "1";
        this.style.left = "20px";
        this.style.border = "2px solid white";
    });
    divDetails[i].addEventListener("mouseout", function() {
        for (div of divDetails) {
            div.style.opacity = "1";
            div.querySelector("svg").style.opacity = "0";
            div.style.left = "0";
            div.style.border = "2px solid black";
        }
    });
    divDetails[i].addEventListener("click", function() {
        // SWAP SHOWN AND HIDDEN CLASSES
        let ps = this.querySelectorAll("p");
        for (p of ps) {
            if (p.className == "shown") {
                p.className = "none";
            } else {
                p.className = "shown";
            }
        }
    });
}
