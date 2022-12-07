function createContentTemplateHeader() {
    const header = ` <div class="header__container">
        <div class="header__top">
            <img src="img/restart-logo.svg" alt="" class="header__logo">
            <span class="header__title">Restart — Ваша зона автокомфорту</span>
            <div class="menu-icon">
                <span></span>
            </div>
        </div>
        <div class="header__links">
            <a href="about.html" class="header__link-a"><button class="header__link">Про компанію</button></a>
            <a href="network.html" class="header__link-a"><button class="header__link">Мережа СТЦ</button></a>
            <a href="index.html" class="header__link-a"><button class="header__link">Інтернет-магазин</button></a>
            <a href="solutions.html" class="header__link-a"><button class="header__link">Готові рішення для СТО</button></a>
            <a href="contacts.html" class="header__link-a"><button class="header__link">Контакти</button></a>
        </div>
    </div>`;
    return createFragmentTemplate(header);
};

function createContentTemplateFooter() {
    const footer = ` <div class="footer__container">
            <div class="footer__links">
                <a href="about.html" class="footer__link-a"><button class="footer__link">Про компанію</button></a>
                <a href="network.html" class="footer__link-a"><button class="footer__link">Мережа СТЦ</button></a>
                <a href="index.html" class="footer__link-a"><button class="footer__link">Інтернет-магазин</button></a>
                <a href="solutions.html" class="footer__link-a"><button class="footer__link">Готові рішення для СТО</button></a>
                <a href="contacts.html" class="footer__link-a"><button class="footer__link">Контакти</button></a>
            </div>
            <div class="footer__text">Мережа СТЦ Restart надає послуги діагностики, професійного ремонту стартера, генератора у Рівном, Луцьку. Заміна
            бендиксів, втягуючих реле, статорів, роторів, втулок, щіток, підшипників, регуляторів, діодних мостів. Ремонт, заправка
            кондиціонерів. Продаж стартерів, генераторів. Великий вибір компонентів: бендикс стартера, підшипники до стартерів,
            підшипники до генераторів, соленоїди, щітки стартера, якір стартера, регулятор генератора, шків генератора, діодний міст
            генератора, щітки генератора. У нашому асортименті стартера, генератори, компоненти брендів AS, Cargo, Koyo, ZM, ZEN,
            IKA, Mobiletron, оригінальні бренди BOSCH, DELCO, DENSO.</div>
            <div class="footer__copyright">© Restart 2019</div>
        </div>`;
    return createFragmentTemplate(footer);
}

function createFragmentTemplate(str) {
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content;
}

function appendContent(header, footer) {
    const head = document.querySelector('.header');
    const foot = document.querySelector('.footer');
    head.appendChild(header);
    foot.appendChild(footer);
}

function init() {
    const fragment_header = document.createDocumentFragment();
    const fragment_footer = document.createDocumentFragment();
    fragment_header.appendChild(createContentTemplateHeader());
    fragment_footer.appendChild(createContentTemplateFooter());
    appendContent(fragment_header, fragment_footer);
}

init();

//********POPUP*******/
const formButton = document.getElementById("form__button");
const popup = document.querySelector('.popup__outer')
const cross = document.querySelector('.popup__cross')
if (formButton && popup && cross) {
    formButton.addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.toggle("active");
        document.body.classList.add('lock');
    });
    cross.addEventListener('click', () => {
        popup.classList.toggle("active");
        document.body.classList.remove('lock');
    });
}

//********POPUP*******END/


//************MENU-BURGER**********/
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuLinks = document.querySelector('.header__links');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    });
}
//************MENU-BURGER*******END/


//*******SLIDER*********/
const slider = document.getElementById('slider');
const before = document.getElementById('before');
const beforeImage = document.getElementById('img');
const change = document.getElementById('change');
const body = document.body;

let isActive = false; 

document.addEventListener('DOMContentLoaded', () => {
    let width = slider.offsetWidth;
    beforeImage.style.width = `${width}px`;
    console.log(width);
}) 

function beforeAfterSlider(x) {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    let shiftChange = Math.max(0, Math.min(x, slider.offsetWidth)) - 33.5;
    before.style.width = `${shift}px`;
    change.style.left = `${shiftChange}px`;
}

function pauseEvents(e) {
    e.stopPropagation();
    e.preventDefault();
    return false;
}

slider.addEventListener('mousedown', () => {
    isActive = true;
});

slider.addEventListener('mouseup', () => {
    isActive = false;
});

slider.addEventListener('mouseleave', () => {
    isActive = false;
});

body.addEventListener('mousemove', (e) => {
    if (!isActive) {
        return;
    }

    let x = e.pageX;

    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
});
//*******SLIDER*********END/


