'use strict';


const show_model = document.querySelectorAll(".show-modal")
const close_model = document.querySelector(".close-modal")
const overlay = document.querySelector(".overlay")
const model = document.querySelector(".modal")

const hide = function () {
    model.classList.add("hidden")
    overlay.classList.add("hidden")

}
const open_model = function () {
    model.classList.remove("hidden");
    overlay.classList.remove("hidden")
}

for (let i = 0; i < show_model.length; i++) {
    show_model[i].addEventListener("click", open_model)
}

overlay.addEventListener("click", hide)
close_model.addEventListener("click", hide)

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        hide()
    }
})
























