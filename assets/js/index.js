'use strict';
const popup = document.querySelector('.popup');
const popBody = document.querySelector('.popup__content');
const popCls = document.querySelector('.x');
const form = document.querySelector('.form');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const fields = document.querySelectorAll('.field');


fields.forEach(field => {
    field.addEventListener('dblclick', () => {
        openPopup();
        field.classList.add('modify');
        input.innerHTML = field.innerHTML;
    })
})


button.addEventListener('click', () => {
    const modify = document.querySelector('.modify');
    modify.innerHTML = input.value;
    modify.classList.remove('modify');
    clsPopup();
})


popup.addEventListener('click', e => { //закрываем popup
    let target = e.target;
    let its_popup = target == popBody || popBody.contains(target);
    let its_button = target == popCls;

    if (!its_popup || its_button ) {
        clsPopup();

    }
})


function openPopup() {
    popup.classList.add('popup_open');
    document.body.classList.add('open');
    popBody.style.transitionDelay = `0.9s`;
}


function clsPopup() {
    popup.classList = 'popup';
    document.body.classList = '';
    popBody.style.transitionDelay = '0s';
    form.reset();
}