'use strict';
const popup = document.querySelector('.popup');  // .gameinfo для опред попапа , если попапов больше => дублировать функции с их именами
const popBody = document.querySelector('.popup__content');
const popCls = document.querySelector('.x');
const form = document.querySelector('.form');
const button = document.querySelector('.button');




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

}








document.addEventListener('dblclick', e => {


    if (e.target.classList.contains('field')) {
        openPopup();
        let target = e.target;
        let input = document.querySelector('.input');

        button.addEventListener('click', () => {

            target.innerHTML = input.value;
            clsPopup();
            form.reset();
            return;
        })

    } else {
        return false;
    }

})
