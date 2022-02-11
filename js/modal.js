const parent = document.querySelector(".parent")
const modalContainer = document.querySelector("#modal-container")
const modal = document.querySelector("#modal")
const closeButton = document.querySelector("#close-modal")

const closeModal = () => modalContainer.style.display = "none"

const showModal = (event) => {
    modalContainer.style.display = "flex"
    const currentImage = event.target
    modal.style.background = getComputedStyle(currentImage).background
}

parent.addEventListener("click", (event) => showModal(event))

closeButton.addEventListener("click", () => closeModal())

modalContainer.addEventListener("click", (event) => {
    if (event.target !== modal) closeModal()
})