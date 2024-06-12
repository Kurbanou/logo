'use strict';
const first = document.querySelector('.fisrt');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const popup = document.querySelector('.popup');
const popBody = document.querySelector('.popup__content');
const popCls = document.querySelector('.x');
const form = document.querySelector('.form');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const fields = document.querySelectorAll('.field');
const container = document.querySelector('main');
const mounthes = ['Января',
                'Февраля',
                'Марта',
                'Апреля',
                'Мая',
                'Июня',
                'Июля',
                'Августа',
                'Сентября',
                'Октября',
                'Ноября',
                'Декабря'];
let date = new Date();
let day = date.getDate();
let mounth = date.getMonth();
let year = date.getFullYear();
function openPopup() {
    popup.classList.add('popup_open');
    document.body.classList.add('open');
    popBody.style.transitionDelay = `0.9s`;
};
function clsPopup() {
    popup.classList = 'popup';
    document.body.classList = '';
    popBody.style.transitionDelay = '0s';
    form.reset();
};
function diploma(){    
    container.innerHTML=`<div class="wrapper" style="max-width: 297mm;">
            <div id="section-to-print" class="container" style="background-image: url(./assets/img/svg/bg.svg); background-size: contain; width: 297mm; height: 210mm;">
                <h1 >грамота</h1>
                <h2 >Почетная</h2>
                <h3 >Награждается:</h3>
                <div class="name field">Name Surname</div>
                <div class="text field">
                    За добросовестный и плодотворный труд в лесном хозяйстве, достижение высоких результатов по использованию, охране, защите лесного фонда и воспроизводству лесов и в связи с профессиональным праздником "Днём работников леса"
                </div>
                <div class="atribut">
                    <div class="date"></div>
                    <div class="signature"><div class="name">А. Ч. Бумбуль</div> </div>
                </div>   
            </div>
        </div>`
        document.querySelector('.date').innerHTML = `${day} ${mounthes[mounth]} ${year}`;
        document.querySelectorAll('.field').forEach(field => {
            field.addEventListener('dblclick', () => {
                openPopup();
                field.classList.add('modify');
                input.innerHTML = field.innerHTML;
            })
        })
};
function lesorub(){
    container.innerHTML=`<div class="wrapper" style="max-width: 210mm;">
            <div id="section-to-print" class="container" style="background-image: url(./assets/img/fon.png); background-size: contain; width: 210mm; height: 297mm;">
               <img src="/assets/img/logo.png" alt="logo" width="350">
                <div>
                    <h1>диплом</h1>                
                    <h3>Награждается:</h3>
                </div>
                <div>
                    <div class="name field">команда Скидельского лесничества</div>
                    <div class="text field">
                        занявшая I общекомандное место в соревнованиях вальщиков леса Скидельского лесхоза "Лесоруб 2024"
                    </div>
                </div>   
                <div class="atribut">
                    <div class="date"></div>
                    <div class="signature"><div class="name">А. Ч. Бумбуль</div> </div>
                </div>   
            </div>
        </div>`
        document.querySelector('.date').innerHTML = `${day} ${mounthes[mounth]} ${year}`;
        document.querySelectorAll('.field').forEach(field => {
            field.addEventListener('dblclick', () => {
                openPopup();
                field.classList.add('modify');
                input.innerHTML = field.innerHTML;
            })
        })
};

button.addEventListener('click', () => {
    const modify = document.querySelector('.modify');
    modify.innerHTML = input.value;
    modify.classList.remove('modify');
    clsPopup();
});

document.querySelector('.date').innerHTML = `${day} ${mounthes[mounth]} ${year}`;
document.querySelectorAll('.field').forEach(field => {
    field.addEventListener('dblclick', () => {
        openPopup();
        field.classList.add('modify');
        input.innerHTML = field.innerHTML;
    })
});


popup.addEventListener('click', e => { //закрываем popup
    let target = e.target;
    let its_popup = target == popBody || popBody.contains(target);
    let its_button = target == popCls;

    // if (!its_popup || its_button ) {
    //     clsPopup();

    // }
    if ( its_button ) {
        clsPopup();

    }
});

first.addEventListener("click", diploma);
second.addEventListener("click", lesorub);