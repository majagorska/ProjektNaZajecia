const buttons = document.querySelectorAll("button.przycisk_faq")
const arrows = document.querySelectorAll("i.fa-solid fa-angle-down")

function openItem() {
    if (this.nextElementSibling.classList.contains('active_box')) {
        this.nextElementSibling.classList.remove('active_box');
        this.nextElementChild.classList.remove('active_arrow')
    } else {
        closeItem();
        this.nextElementSibling.classList.toggle('active_box');
        this.nextElementChild.classList.toggle('active_arrow')
    }
}

const closeItem = () => {
    const activeBoxes = document.querySelectorAll('.info');
    activeBoxes.forEach(box => {
        box.classList.remove('active_box');
    })
    arrows.forEach(arrow => {
        arrow.classList.remove('active_arrow')
    })
}

buttons.forEach(button => {
    button.addEventListener('click', openItem);
})